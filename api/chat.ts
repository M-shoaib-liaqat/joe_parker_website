import { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    console.log('=== CHAT API CALLED ===');
    console.log('Request body:', req.body);

    const { message, systemInstruction, history } = req.body;

    // Validate message
    if (!message || typeof message !== 'string') {
      console.error('Invalid message:', message);
      return res.status(400).json({
        success: false,
        message: 'Message is required and must be a string',
      });
    }

    // Check API key
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    console.log('API Key exists:', !!GEMINI_API_KEY);
    console.log('API Key length:', GEMINI_API_KEY?.length || 0);

    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set in environment variables');
      return res.status(503).json({
        success: false,
        message:
          'Chat assistant is temporarily unavailable because the AI API key is not configured. Please try again later or contact us by phone.',
      });
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
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

    console.log('Creating model...');

    // Use a model that is confirmed to work with this key (see server.ts debug)
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-flash-latest',
      systemInstruction: systemInstruction || defaultSystemInstruction,
    });

    console.log('Starting chat with history length:', history?.length || 0);
    
    // Start a chat session with history if provided
    const safeHistory = Array.isArray(history) ? history.slice(-6) : [];
    const chat = model.startChat({
      history: safeHistory,
    });

    console.log('Sending message to Gemini...');
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const MAX_RESPONSE_CHARS = 800;
    const responseText = response.text().slice(0, MAX_RESPONSE_CHARS);

    console.log('Got response:', responseText.substring(0, 100) + '...');

    return res.status(200).json({
      success: true,
      response: responseText,
    });

  } catch (error: any) {
    console.error('=== CHAT API ERROR ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error response:', error.response?.data);

    // Handle specific Gemini API errors
    if (error.message?.includes('API key')) {
      return res.status(500).json({
        success: false,
        message: 'Invalid API key. Please check your GEMINI_API_KEY in Vercel environment variables.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }

    if (error.message?.includes('quota') || error.message?.includes('rate limit')) {
      return res.status(429).json({
        success: false,
        message: 'API rate limit exceeded. Please try again in a moment.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }

    if (error.message?.includes('high demand') || error.message?.includes('Service Unavailable') || error.message?.includes('[503')) {
      return res.status(503).json({
        success: false,
        message: 'Our AI assistant is currently experiencing high demand from the provider. Please try again in a few minutes or call us directly.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }

    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your chat request.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}