import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  console.error('Error: SENDGRID_API_KEY environment variable is not set');
  process.exit(1);
}

sgMail.setApiKey(SENDGRID_API_KEY);

// Initialize Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable is not set');
  process.exit(1);
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

    // Prepare email content
    const htmlContent = formatEmailBody({
      fullName,
      phone,
      email,
      serviceNeeded,
      message,
    });

    // Send email using SendGrid
    const msg = {
      to: 'info@parkerelectricalsolutions.uk',
      from: 'Parker Electrical Solutions <info@parkerelectricalsolutions.uk>',
      replyTo: email!,
      subject: 'New Quote Request – Parker Electrical Solutions',
      html: htmlContent,
      text: `
Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Service Needed: ${serviceNeeded}
Message: ${message}
      `,
    };

    await sgMail.send(msg);

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
    const { message, systemInstruction } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Message is required and must be a string',
      });
    }

    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const defaultSystemInstruction = `
      You are "Sparky", the friendly and professional AI assistant for Parker Electrical Solutions.
      The lead electrician is Joe Parker.
      The business is NICEIC approved and has been running since 2014.
      We serve: Brentwood, Harlow, Chelmsford, Basildon, Southend, Romford, Ilford.
      Phone: +447737447302
      Services we offer: EICR Certificates & Testing, Emergency Electrician 24/7, Domestic Electrical Work, Commercial Services, EV Charger Installation, House Rewiring.
      
      Your goals:
      1. Be human-like, helpful, and polite.
      2. If a user wants to book, ask for their name, phone number, and what service they need. Tell them Joe will call them back personally.
      3. If it's an emergency, advise them to call +447737447302 immediately for a <60 min response.
      4. Answer technical questions about EICRs, EV chargers, and domestic wiring based on our expertise.
      5. Keep responses concise and engaging. Use UK English.
    `;

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: systemInstruction || defaultSystemInstruction,
      },
    });

    const response = await chat.sendMessage({ message });
    const responseText = response.text;

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

    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your chat request. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Contact endpoint available at POST http://localhost:${PORT}/api/contact`);
});
