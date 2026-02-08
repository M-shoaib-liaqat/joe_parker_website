import { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { message, systemInstruction } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Message is required and must be a string',
      });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error',
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
    } else {
      console.error('Unknown chat error:', error);
    }

    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your chat request. Please try again later.',
    });
  }
}
