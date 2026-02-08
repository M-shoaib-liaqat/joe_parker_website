import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { fullName, phone, email, serviceNeeded, message } = req.body || {};

    // Basic validation
    if (!fullName || !phone || !email || !serviceNeeded || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured in environment');
      return res.status(500).json({ success: false, message: 'Server configuration error' });
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

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

    const msg = {
      to: 'info@parkerelectricalsolutions.uk',
      from: 'Parker Electrical Solutions <info@parkerelectricalsolutions.uk>',
      replyTo: email,
      subject: 'New Quote Request – Parker Electrical Solutions',
      html: htmlContent,
      text: `Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nService: ${serviceNeeded}\nMessage: ${message}`,
    } as any;

    await sgMail.send(msg);

    return res.status(200).json({ success: true, message: 'Message sent' });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}
