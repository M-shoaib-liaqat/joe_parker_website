import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { trackEvent } from '../lib/analytics';

/**
 * Floating WhatsApp bubble. Hidden on mobile (md:hidden) where StickyCallBar
 * already gives WhatsApp equal billing with Call — avoids stacking two
 * floating elements over the same corner of a small screen.
 */
const WhatsAppWidget: React.FC = () => (
  <div className="hidden md:flex fixed bottom-6 left-6 z-40">
    <a
      href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I found you on your website and need help with...')}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('click_whatsapp', { source: 'floating_widget' })}
      className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  </div>
);

export default WhatsAppWidget;
