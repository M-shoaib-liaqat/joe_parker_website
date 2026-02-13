import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Phone, Calendar, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Hello! I'm the digital assistant for Parker Electrical Solutions. How can I help you with your electrical needs today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (forcedText?: string) => {
    const textToSend = forcedText || input;
    if (!textToSend.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Convert messages to Gemini history format (excluding the welcome message and current user message)
      // Limit history length to reduce token usage / quota impact.
      const historyMessages = updatedMessages.slice(1, -1).slice(-6);
      const history = historyMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      console.log('=== SENDING TO API ===');
      console.log('Message:', textToSend);
      console.log('History:', history);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: textToSend,
          history: history
        }),
      });

      console.log('=== RESPONSE STATUS ===');
      console.log('Status:', response.status);
      console.log('OK:', response.ok);

      const contentType = response.headers.get('content-type') || '';
      const rawText = await response.text();
      let data: any = null;
      if (contentType.includes('application/json') && rawText) {
        try {
          data = JSON.parse(rawText);
        } catch (parseErr) {
          console.error('=== JSON PARSE ERROR ===');
          console.error('Raw response text:', rawText);
          throw new Error('Server returned invalid JSON. Please try again.');
        }
      }
      console.log('=== API RESPONSE DATA ===');
      console.log('Full response:', data);

      if (!response.ok) {
        console.error('=== API ERROR ===');
        console.error('Status:', response.status);
        console.error('Data:', data);
        const msgFromJson = data?.message || data?.error;
        const msgFromText = rawText?.trim();
        throw new Error(msgFromJson || msgFromText || `API error: ${response.status} ${response.statusText}`);
      }

      if (data?.success && data?.response) {
        // Hard limit on response length to help keep within free quota
        const MAX_RESPONSE_CHARS = 800;
        const responseText = String(data.response).slice(0, MAX_RESPONSE_CHARS);
        console.log('=== SUCCESS ===');
        console.log('Response text:', responseText);
        
        setMessages(prev => [...prev, { role: 'model', text: '' }]);
        
        // Streaming effect
        for (let i = 0; i <= responseText.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 10));
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { 
              role: 'model', 
              text: responseText.slice(0, i) 
            };
            return updated;
          });
        }

        // Check if user provided booking info (name, phone, service)
        await extractAndSubmitBooking(updatedMessages);
      } else {
        console.error('=== UNEXPECTED RESPONSE FORMAT ===');
        console.error('data.success:', data?.success);
        console.error('data.response:', data?.response);
        throw new Error(data?.message || 'Failed to get response from API');
      }
    } catch (error: any) {
      console.error("=== CHAT ERROR ===");
      console.error("Error object:", error);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
      
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'm sorry, I'm having trouble right now. Please call us at " + BUSINESS_INFO.phone + "\n\nError: " + error.message
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const extractAndSubmitBooking = async (conversationMessages: Message[]) => {
    console.log('\n🔍 === CHAT BOOKING EXTRACTION START ===');
    console.log('Total messages in conversation:', conversationMessages.length);
    
    // Get all user messages (not just last 4)
    const userMessages = conversationMessages.filter(m => m.role === 'user');
    console.log('User messages:', userMessages.map(m => m.text));

    // Combine all user messages for extraction
    const combinedText = conversationMessages.map(m => m.text).join(' | ');
    console.log('Combined text for extraction:', combinedText);

    // More flexible regex patterns
    // Name: look for patterns like "name is John", "I'm John", "my name is John"
    const namePatterns = [
      /(?:name|i'm|i am|call me|john|smith|david|michael|sarah|rachel)[\s:]+([A-Za-z\s]{2,25}?)(?:\.|,|$|\||phone|call|number)/i,
      /([A-Za-z]{2,})\s+([A-Za-z]{2,})(?:\s+(?:here|speaking|available))?/i,
    ];
    let name = null;
    for (const pattern of namePatterns) {
      const match = combinedText.match(pattern);
      if (match) {
        name = match[1].trim();
        if (name.length > 1 && name.length < 50) break;
      }
    }

    // Phone: flexible pattern for UK and international numbers
    const phoneMatch = combinedText.match(
      /(?:phone|call|number|mobile|contact|reach me|07)[\s:]*(\+?[0-9\s\-\(\)]{8,})|([0-9]{3,}[\s\-]?[0-9]{3,}[\s\-]?[0-9]{3,})/i
    );
    const phone = phoneMatch ? (phoneMatch[1] || phoneMatch[2]).replace(/\s/g, '') : null;

    // Service: look for service keywords
    const servicePatterns = [
      /(?:need|want|require|install|service|help with|looking for)[\s:]+([A-Za-z\s\-]{5,50}?)(?:\.|,|$|\||phone|call|emergency)/i,
      /(?:rewire|eicr|testing|emergency|charger|commercial|domestic)[\s\w\s]{0,30}/i,
    ];
    let service = null;
    for (const pattern of servicePatterns) {
      const match = combinedText.match(pattern);
      if (match) {
        service = match[1]?.trim() || match[0]?.trim();
        if (service && service.length > 3) break;
      }
    }

    console.log('🔎 Extraction results:');
    console.log('  Name found:', name);
    console.log('  Phone found:', phone);
    console.log('  Service found:', service);

    // Only submit if all three are present and non-empty
    if (name && phone && service) {
      try {
        console.log('\n📤 === SUBMITTING BOOKING TO /api/chat-booking ===');
        console.log('Payload:', JSON.stringify({ name, phone, service }, null, 2));

        const bookingResponse = await fetch('/api/chat-booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            service,
          }),
        });

        console.log('📊 Response status:', bookingResponse.status);
        console.log('📊 Response ok:', bookingResponse.ok);

        const contentType = bookingResponse.headers.get('content-type');
        const responseText = await bookingResponse.text();
        console.log('Response content-type:', contentType);
        console.log('Response text:', responseText);

        let bookingData: any = {};
        if (contentType?.includes('application/json') && responseText) {
          try {
            bookingData = JSON.parse(responseText);
          } catch (parseErr) {
            console.error('❌ Failed to parse booking response JSON:', parseErr);
          }
        }

        console.log('Parsed response:', bookingData);

        if (bookingResponse.ok && bookingData.success) {
          console.log('✅ === BOOKING SUBMITTED SUCCESSFULLY ===');
          setMessages(prev => [...prev, {
            role: 'model',
            text: '✅ Perfect! I\'ve logged your booking. Joe will contact you shortly at ' + phone + '.'
          }]);
        } else {
          console.warn('⚠️ Booking submission returned error:', bookingData.message || 'Unknown error');
        }
      } catch (bookingError) {
        console.error('❌ === BOOKING SUBMISSION FAILED ===');
        console.error('Error:', bookingError);
        if (bookingError instanceof Error) {
          console.error('Error message:', bookingError.message);
          console.error('Error stack:', bookingError.stack);
        }
      }
    } else {
      console.log('⚠️ Not all fields found. Skipping booking submission.');
      console.log('Missing:', {
        name: !name ? 'NAME' : null,
        phone: !phone ? 'PHONE' : null,
        service: !service ? 'SERVICE' : null,
      });
    }
  };

  const quickActions = [
    { label: "Book an EICR", icon: <Calendar className="w-3 h-3" /> },
    { label: "Emergency Help", icon: <Phone className="w-3 h-3" /> },
    { label: "Pricing Info", icon: <Info className="w-3 h-3" /> },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-brand-deep text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group border-4 border-white"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Chat with Sparky
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border-4 border-brand-electric">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-deep to-brand-electric text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-brand-electric" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sparky</h3>
                <p className="text-xs opacity-90">Parker Electrical Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 bg-brand-electric rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-brand-electric text-white rounded-br-none'
                      : 'bg-white border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text || (isTyping && idx === messages.length - 1 ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : null)}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length < 3 && !isTyping && (
            <div className="px-4 py-2 flex gap-2 flex-wrap border-t border-gray-200">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(action.label)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-brand-electric/30 rounded-full text-xs font-bold text-brand-electric hover:bg-brand-electric hover:text-white transition-colors shadow-sm"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-brand-electric transition-all"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Sparky anything..."
                disabled={isTyping}
                className="flex-grow bg-transparent p-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="bg-brand-electric text-white p-2 rounded-xl hover:bg-brand-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-2">
              Joe Parker will follow up on all booking requests.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;