import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { trackEvent } from '../lib/analytics';

/**
 * Persistent mobile-only bottom bar with equal-weight Call / WhatsApp buttons.
 * Replaces the old sticky-bar markup in App.tsx that was written but never
 * actually mounted in the component tree (dead JSX, no effect on the live site).
 */
const StickyCallBar: React.FC = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
    <a
      href={`tel:${BUSINESS_INFO.phone}`}
      onClick={() => trackEvent('click_call', { source: 'sticky_bar' })}
      className="bg-brand-orange text-white py-4 flex items-center justify-center gap-2 font-bold text-base"
    >
      <Phone size={20} /> Call Now
    </a>
    <a
      href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I found you on your website and need help with...')}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('click_whatsapp', { source: 'sticky_bar' })}
      className="bg-[#25D366] text-white py-4 flex items-center justify-center gap-2 font-bold text-base"
    >
      <MessageCircle size={20} /> WhatsApp
    </a>
  </div>
);

export default StickyCallBar;
