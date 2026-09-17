import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { trackEvent } from '../lib/analytics';

/** Slim top-of-page CTA strip — free-quote copy only, no pricing, no promo code. */
const QuickCTABanner: React.FC = () => (
  <div className="bg-brand-deep/95 text-white rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
    <p className="font-semibold text-center sm:text-left">Free, no-obligation quote — competitive rates, fast response.</p>
    <div className="flex gap-3 shrink-0">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        onClick={() => trackEvent('click_call', { source: 'top_banner' })}
        className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I found you on your website and need help with...')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('click_whatsapp', { source: 'top_banner' })}
        className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  </div>
);

export default QuickCTABanner;
