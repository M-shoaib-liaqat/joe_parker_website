import React from 'react';
import { Sparkles } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer';

/**
 * Highlighted "free safety check" offer card. Renders nothing while
 * OFFER_CONFIG.enabled is false — built and ready, held back until the
 * client confirms the offer with the business owner.
 */
const PromoOfferBlock: React.FC = () => {
  if (!OFFER_CONFIG.enabled) return null;

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 my-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
      <div className="bg-amber-400 text-brand-deep p-3 rounded-full shrink-0">
        <Sparkles size={28} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-deep">{OFFER_CONFIG.headline}</h3>
        <p className="text-gray-700 mt-1">{OFFER_CONFIG.subtext}</p>
      </div>
    </div>
  );
};

export default PromoOfferBlock;
