
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Phone, Calendar, Info } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the digital assistant for Parker Electrical Solutions. How can I help you with your electrical needs today?" }
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
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Call the backend API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: textToSend,
          // Optional: can send custom system instruction if needed
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success && data.response) {
        // Simulate streaming effect for UX by adding the response char by char
        const responseText = data.response;
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        // Add response with a small delay per character for visual effect
        for (let i = 0; i < responseText.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 10));
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { 
              role: 'model', 
              text: responseText.slice(0, i + 1) 
            };
            return updated;
          });
        }
      } else {
        throw new Error(data.message || 'Failed to get response from API');
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having a bit of a moment. Could you try again or call us directly at " + BUSINESS_INFO.phone + "?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickActions = [
    { label: "Book an EICR", icon: <Calendar size={14} /> },
    { label: "Emergency Help", icon: <Phone size={14} /> },
    { label: "Pricing Info", icon: <Info size={14} /> },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); }}
          className="fixed bottom-6 right-6 z-50 bg-brand-deep text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group border-4 border-white"
        >
          <MessageSquare size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap pr-2">
            Chat with Sparky
          </span>
        </button>
      )}

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[95vw] md:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-brand-deep p-4 text-white flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-brand-electric p-2 rounded-xl">
              <Bot size={24} />
            </div>
            <div>
              <p className="font-bold leading-tight text-lg">Sparky</p>
              <p className="text-xs text-white/60">Parker Electrical Assistant</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-brand-orange text-white' : 'bg-brand-deep text-white'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-brand-orange text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'}`}>
                  {msg.text || (isTyping && idx === messages.length - 1 ? <Loader2 size={16} className="animate-spin" /> : null)}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length < 3 && !isTyping && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
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
        <div className="p-4 bg-white border-t border-gray-100">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-brand-electric transition-all"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sparky anything..."
              className="flex-grow bg-transparent p-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`p-2 rounded-xl transition-all ${input.trim() && !isTyping ? 'bg-brand-deep text-white shadow-md hover:scale-105' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              <Send size={18} />
            </button>
          </form>
          <p className="text-[10px] text-center text-gray-400 mt-2">
            Joe Parker will follow up on all booking requests.
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
