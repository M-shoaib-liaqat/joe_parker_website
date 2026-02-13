import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as brevo from '@getbrevo/brevo';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Brevo (formerly Sendinblue)
const BREVO_API_KEY = process.env.BREVO_API_KEY;

let brevoApiInstance: brevo.TransactionalEmailsApi | null = null;
if (BREVO_API_KEY) {
  const apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);
  brevoApiInstance = apiInstance;
  console.log('✅ Brevo API Key loaded:', BREVO_API_KEY.substring(0, 10) + '...');
} else {
  console.warn('Warning: BREVO_API_KEY environment variable is not set. Email functionality will be disabled.');
}

// Initialize Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  // Do NOT crash the whole server if the key is missing.
  // This would break the contact/get-quote form as well.
  console.warn('Warning: GEMINI_API_KEY is not set. Chat endpoint will be disabled.');
} else {
  console.log('✅ Gemini API Key loaded:', GEMINI_API_KEY.substring(0, 10) + '...');
}

// Types
interface ContactRequest {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
}

interface ValidationError {
  field: string;
  error: string;
}

// Validation function
function validateContactForm(data: ContactRequest): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.fullName || data.fullName.trim() === '') {
    errors.push({ field: 'fullName', error: 'Full name is required' });
  }

  if (!data.phone || data.phone.trim() === '') {
    errors.push({ field: 'phone', error: 'Phone number is required' });
  }

  if (!data.email || data.email.trim() === '') {
    errors.push({ field: 'email', error: 'Email address is required' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', error: 'Invalid email address format' });
  }

  if (!data.serviceNeeded || data.serviceNeeded.trim() === '') {
    errors.push({ field: 'serviceNeeded', error: 'Service needed is required' });
  }

  if (!data.message || data.message.trim() === '') {
    errors.push({ field: 'message', error: 'Message is required' });
  }

  return errors;
}

// Helper function to construct email HTML
function formatEmailBody(data: ContactRequest): string {
  return `
    <h2>New Quote Request</h2>
    <p><strong>Full Name:</strong> ${sanitizeHtml(data.fullName || '')}</p>
    <p><strong>Phone:</strong> ${sanitizeHtml(data.phone || '')}</p>
    <p><strong>Email:</strong> ${sanitizeHtml(data.email || '')}</p>
    <p><strong>Service Needed:</strong> ${sanitizeHtml(data.serviceNeeded || '')}</p>
    <p><strong>Message:</strong></p>
    <p>${sanitizeHtml(data.message || '').replace(/\n/g, '<br>')}</p>
  `;
}

// Basic HTML sanitization to prevent injection
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Contact endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { fullName, phone, email, serviceNeeded, message } = req.body as ContactRequest;

    // Validate fields
    const validationErrors = validateContactForm(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors,
      });
    }

    // Check if Brevo is configured
    if (!brevoApiInstance) {
      return res.status(503).json({
        success: false,
        message: 'Email service is temporarily unavailable. Please try again later or call us directly.',
      });
    }

    // Prepare email content
    const htmlContent = formatEmailBody({
      fullName,
      phone,
      email,
      serviceNeeded,
      message,
    });

    const businessRecipient = 'pesolutions.ltd@hotmail.com';
    const textContent = `
Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Service Needed: ${serviceNeeded}
Message: ${message}
    `;

    // Email to business using Brevo
    const businessEmail = new brevo.SendSmtpEmail();
    businessEmail.to = [{ email: businessRecipient }];
    businessEmail.sender = { name: 'Parker Electrical Solutions', email: 'pesolutions.ltd@hotmail.com' };
    businessEmail.replyTo = { email: email! };
    businessEmail.subject = 'New Quote Request – Parker Electrical Solutions';
    businessEmail.htmlContent = htmlContent;
    businessEmail.textContent = textContent;

    await brevoApiInstance.sendTransacEmail(businessEmail);

    // Email to business owner
    const ownerEmail = new brevo.SendSmtpEmail();
    ownerEmail.to = [{ email: 'pesolutions.ltd@hotmail.com' }];
    ownerEmail.sender = {
      name: 'Parker Electrical Solutions',
      email: 'pesolutions.ltd@hotmail.com',
    };
    ownerEmail.replyTo = { email: email! };
    ownerEmail.subject = 'New Quote Request - Parker Electrical Solutions';
    ownerEmail.htmlContent = `
      <h2>New Quote Request</h2>
      <p><strong>Full Name:</strong> ${sanitizeHtml(fullName || '')}</p>
      <p><strong>Phone:</strong> ${sanitizeHtml(phone || '')}</p>
      <p><strong>Email:</strong> ${sanitizeHtml(email || '')}</p>
      <p><strong>Service Needed:</strong> ${sanitizeHtml(serviceNeeded || '')}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitizeHtml(message || '').replace(/\n/g, '<br>')}</p>
    `;
    ownerEmail.textContent = `
New Quote Request

Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Service Needed: ${serviceNeeded}
Message: ${message}
    `;

    try {
      await brevoApiInstance.sendTransacEmail(ownerEmail);
    } catch (e) {
      console.warn('Warning: failed to send email to owner:', e);
    }

    // Confirmation email to customer
    const customerEmail = new brevo.SendSmtpEmail();
    customerEmail.to = [{ email: email! }];
    customerEmail.sender = { name: 'Parker Electrical Solutions', email: 'pesolutions.ltd@hotmail.com' };
    customerEmail.subject = 'Weve received your quote request – Parker Electrical Solutions';
    customerEmail.htmlContent = `
      <h2>Thanks for getting in touch, ${sanitizeHtml(fullName || '')}!</h2>
      <p>We've received your quote request and will get back to you as soon as possible.</p>
      <h3>Your details</h3>
      <p><strong>Phone:</strong> ${sanitizeHtml(phone || '')}</p>
      <p><strong>Email:</strong> ${sanitizeHtml(email || '')}</p>
      <p><strong>Service Needed:</strong> ${sanitizeHtml(serviceNeeded || '')}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitizeHtml(message || '').replace(/\n/g, '<br>')}</p>
      <p style="margin-top:16px;">If this is an emergency, please call us directly on <strong>+447737447302</strong>.</p>
    `;
    customerEmail.textContent = `Thanks for getting in touch, ${fullName || ''}!

We've received your quote request and will get back to you as soon as possible.

Your details:
- Phone: ${phone}
- Email: ${email}
- Service Needed: ${serviceNeeded}
- Message: ${message}

If this is an emergency, please call us directly on +447737447302.`;

    try {
      await brevoApiInstance.sendTransacEmail(customerEmail);
    } catch (e) {
      console.warn('Warning: failed to send confirmation email to customer:', e);
    }

    res.status(200).json({
      success: true,
      message: 'Your contact request has been sent successfully. We will get back to you soon.',
    });
  } catch (error) {
    // Log error with full details for debugging
    if (error instanceof Error) {
      console.error('Error sending contact email:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('Unknown error:', error);
    }

    const errMsg = error instanceof Error ? error.message : String(error);

    // Handle common Brevo API errors
    if (errMsg.includes('ETIMEDOUT') || errMsg.includes('ECONNREFUSED') || errMsg.includes('network')) {
      return res.status(503).json({
        success: false,
        message:
          'Email service is currently unavailable (network issue). Please try again later or contact us directly by phone or email.',
      });
    }

    if (errMsg.includes('unauthorized') || errMsg.includes('401') || errMsg.includes('API key')) {
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact support.',
      });
    }

    // Return generic error message
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
    });
  }
});

// Chat endpoint for Gemini API
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    if (!GEMINI_API_KEY) {
      return res.status(503).json({
        success: false,
        message:
          'Chat assistant is temporarily unavailable because the AI API key is not configured. Please try again later or contact us by phone.',
      });
    }

    const { message, systemInstruction, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Message is required and must be a string',
      });
    }

    const defaultSystemInstruction = `You are "Sparky", the friendly AI assistant for Parker Electrical Solutions.
      Lead: Joe Parker. NICEIC approved since 2014.
      Areas: Brentwood, Harlow, Chelmsford, Basildon, Southend, Romford, Ilford.
      Phone: +447737447302
      Services: EICR Testing, Emergency 24/7, Domestic Work, Commercial, EV Chargers, House Rewiring.
      
      CRITICAL RULES:
      1. Keep ALL responses to 2-3 short sentences maximum. Be direct and concise.
      2. No lengthy explanations. Use simple, straightforward language.
      3. If booking needed: get name, phone, service. Say Joe will call them.
      4. Emergency? Direct to +447737447302 immediately.
      5. Use UK English. Be friendly but brief.`;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    // Use a model that is confirmed to work with this key (see debug script)
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: systemInstruction || defaultSystemInstruction,
    });

    // Limit history length server-side as an extra safety guard.
    const safeHistory = Array.isArray(history) ? history.slice(-6) : [];
    const chat = model.startChat({ history: safeHistory });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    // Limit response length to reduce token usage and force concise answers.
    const MAX_RESPONSE_CHARS = 400;
    const responseText = response.text().slice(0, MAX_RESPONSE_CHARS);

    res.status(200).json({
      success: true,
      response: responseText,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Chat Error:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('Unknown chat error:', error);
    }

    const errMsg = error instanceof Error ? error.message : String(error);

    // Map common Gemini failures to a more accurate HTTP status + message
    if (errMsg.includes('quota') || errMsg.includes('rate limit') || errMsg.includes('[429')) {
      return res.status(429).json({
        success: false,
        message: 'API rate limit / quota exceeded. Please try again later, or update your Gemini plan/billing.',
        error: process.env.NODE_ENV === 'development' ? errMsg : undefined,
      });
    }

    // High-demand / temporary outage from Gemini
    if (errMsg.includes('high demand') || errMsg.includes('Service Unavailable') || errMsg.includes('[503')) {
      return res.status(503).json({
        success: false,
        message:
          'Our AI assistant is currently experiencing high demand from the provider. Please try again in a few minutes or call us directly.',
        error: process.env.NODE_ENV === 'development' ? errMsg : undefined,
      });
    }

    if (errMsg.toLowerCase().includes('api key') || errMsg.toLowerCase().includes('permission')) {
      return res.status(500).json({
        success: false,
        message: 'Invalid or missing API key. Please verify GEMINI_API_KEY in your environment.',
        error: process.env.NODE_ENV === 'development' ? errMsg : undefined,
      });
    }

    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your chat request. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? errMsg : undefined,
    });
  }
});

// Chat Booking endpoint
app.post('/api/chat-booking', async (req: Request, res: Response) => {
  try {
    console.log('\n📋 === CHAT BOOKING REQUEST RECEIVED ===');
    console.log('Request body:', req.body);
    
    const { name, phone, service, email } = req.body;

    console.log('Extracted: name=', name, 'phone=', phone, 'service=', service);

    // Validate fields
    if (!name || name.trim() === '') {
      console.warn('❌ Validation failed: Name is required');
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      });
    }

    if (!phone || phone.trim() === '') {
      console.warn('❌ Validation failed: Phone is required');
      return res.status(400).json({
        success: false,
        message: 'Phone number is required',
      });
    }

    if (!service || service.trim() === '') {
      console.warn('❌ Validation failed: Service is required');
      return res.status(400).json({
        success: false,
        message: 'Service is required',
      });
    }

    console.log('✅ All fields validated');

    // Check if Brevo is configured
    if (!brevoApiInstance) {
      console.error('❌ Brevo API not configured');
      return res.status(503).json({
        success: false,
        message: 'Email service is temporarily unavailable. Please try again later or call us directly.',
      });
    }

    console.log('✅ Brevo API is configured');

    // Email to Joe Parker (owner)
    const JOE_EMAIL = 'pesolutions.ltd@hotmail.com';
    console.log('📧 Target email address:', JOE_EMAIL);
    
    const bookingEmail = new brevo.SendSmtpEmail();
    bookingEmail.to = [{ email: JOE_EMAIL }];
    bookingEmail.sender = {
      name: 'Parker Electrical Solutions',
      email: 'pesolutions.ltd@hotmail.com',
    };
    if (email) {
      bookingEmail.replyTo = { email: email };
    }
    bookingEmail.subject = 'New Chat Booking - Parker Electrical Solutions';
    bookingEmail.htmlContent = `
      <h2>New Chat Booking Request</h2>
      <p><strong>Customer Name:</strong> ${sanitizeHtml(name)}</p>
      <p><strong>Phone:</strong> ${sanitizeHtml(phone)}</p>
      <p><strong>Service Needed:</strong> ${sanitizeHtml(service)}</p>
      ${email ? `<p><strong>Email:</strong> ${sanitizeHtml(email)}</p>` : ''}
      <p style="margin-top:16px; padding-top:16px; border-top:1px solid #ccc;">
        Customer contact Joe directly at <strong>${sanitizeHtml(phone)}</strong> or reply to this email.
      </p>
    `;
    bookingEmail.textContent = `
New Chat Booking Request

Customer Name: ${name}
Phone: ${phone}
Service Needed: ${service}
${email ? `Email: ${email}` : ''}

Customer contact Joe directly at ${phone} or reply to this email.
    `;

    console.log('📧 Email object created:', {
      to: bookingEmail.to,
      sender: bookingEmail.sender,
      subject: bookingEmail.subject,
      hasHtmlContent: !!bookingEmail.htmlContent,
      hasTextContent: !!bookingEmail.textContent,
    });

    console.log('📤 Sending email via Brevo...');
    const emailResponse = await brevoApiInstance.sendTransacEmail(bookingEmail);
    console.log('✅ Brevo response:', emailResponse);

    console.log('✅ Email sent successfully. Sending success response to client...');

    res.status(200).json({
      success: true,
      message: 'Your booking has been received. Joe will call you shortly.',
    });
    
    console.log('✅ === CHAT BOOKING COMPLETE ===\n');
  } catch (error) {
    console.error('\n❌ === CHAT BOOKING ERROR ===');
    console.error('Error type:', typeof error);
    console.error('Error constructor:', error?.constructor?.name);
    
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('Error JSON:', error);
      console.error('Error toString:', String(error));
    }

    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('Final error message:', errMsg);

    if (errMsg.includes('ETIMEDOUT') || errMsg.includes('ECONNREFUSED') || errMsg.includes('network')) {
      console.error('Network-related error detected');
      return res.status(503).json({
        success: false,
        message: 'Email service is currently unavailable. Please try again later or call us directly on +447737447302.',
      });
    }

    if (errMsg.includes('401') || errMsg.includes('Unauthorized') || errMsg.includes('API key')) {
      console.error('API authentication error detected');
      return res.status(500).json({
        success: false,
        message: 'Email service authentication failed. Please contact support.',
      });
    }

    console.error('Unknown error - sending generic 500 response');
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your booking. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    geminiApi: !!GEMINI_API_KEY,
    brevoApi: !!BREVO_API_KEY,
  });
});

// Serve frontend in production (when built with `vite build`)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath));
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // In dev, the site is served by Vite (http://localhost:3000)
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).send(
      'Backend API is running. Open the site via Vite at http://localhost:3000 (this server only serves /api/* in dev).'
    );
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Contact endpoint available at POST http://localhost:${PORT}/api/contact`);
});