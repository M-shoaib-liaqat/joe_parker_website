import { VercelRequest, VercelResponse } from '@vercel/node';
import * as brevo from '@getbrevo/brevo';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { fullName, phone, email, serviceNeeded, message } = req.body || {};

    // Basic validation — email is optional (the 3-field quick quote widget doesn't
    // collect it), everything else is required.
    if (!fullName || !phone || !serviceNeeded || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address format' });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured in environment');
      return res.status(503).json({
        success: false,
        message: 'Email service is temporarily unavailable. Please try again later or call us directly.',
      });
    }

    // Initialize Brevo API
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);

    const sanitized = (text: string) =>
      String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');

    const htmlContent = `
      <h2>New Quote Request</h2>
      <p><strong>Full Name:</strong> ${sanitized(fullName)}</p>
      <p><strong>Phone:</strong> ${sanitized(phone)}</p>
      <p><strong>Email:</strong> ${sanitized(email)}</p>
      <p><strong>Service:</strong> ${sanitized(serviceNeeded)}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitized(message).replace(/\n/g, '<br>')}</p>
    `;

    // NOTE: this was previously hardcoded to the agency's personal Gmail address
    // instead of the business's own inbox — every quote request submitted through
    // this endpoint was going to the wrong person. Fixed to send to the business.
    const businessRecipient = 'pesolutions.ltd@hotmail.com';

    // Email to business
    const businessEmail = new brevo.SendSmtpEmail();
    businessEmail.to = [{ email: businessRecipient }];
    businessEmail.sender = { name: 'Parker Electrical Solutions', email: 'pesolutions.ltd@hotmail.com' };
    if (email) businessEmail.replyTo = { email };
    businessEmail.subject = 'New Quote Request – Parker Electrical Solutions';
    businessEmail.htmlContent = htmlContent;
    businessEmail.textContent = `Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email || 'not provided'}\nService: ${serviceNeeded}\nMessage: ${message}`;

    await apiInstance.sendTransacEmail(businessEmail);

    // Confirmation email to customer — only if they gave us an email to send it to.
    if (email) {
      const customerEmail = new brevo.SendSmtpEmail();
      customerEmail.to = [{ email }];
      customerEmail.sender = { name: 'Parker Electrical Solutions', email: 'pesolutions.ltd@hotmail.com' };
      customerEmail.subject = 'We have received your quote request – Parker Electrical Solutions';
      customerEmail.htmlContent = `
        <h2>Thanks for getting in touch, ${sanitized(fullName)}!</h2>
        <p>We've received your quote request and will get back to you as soon as possible.</p>
        <h3>Your details</h3>
        <p><strong>Phone:</strong> ${sanitized(phone)}</p>
        <p><strong>Email:</strong> ${sanitized(email)}</p>
        <p><strong>Service Needed:</strong> ${sanitized(serviceNeeded)}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitized(message).replace(/\n/g, '<br>')}</p>
        <p style="margin-top:16px;">If this is an emergency, please call us directly on <strong>+447737447302</strong>.</p>
      `;
      customerEmail.textContent = `Thanks for getting in touch, ${fullName}!

We've received your quote request and will get back to you as soon as possible.

Your details:
- Phone: ${phone}
- Email: ${email}
- Service Needed: ${serviceNeeded}
- Message: ${message}

If this is an emergency, please call us directly on +447737447302.`;

      try {
        await apiInstance.sendTransacEmail(customerEmail);
      } catch (e) {
        console.warn('Warning: failed to send confirmation email to customer:', e);
      }
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact API error:', err);
    const msg = err instanceof Error ? err.message : String(err);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: process.env.NODE_ENV === 'development' ? msg : undefined,
    });
  }
}
