import React from 'react';
import { Star, ShieldCheck, Calendar, Image as ImageIcon } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '../constants';

const yearsServing = new Date().getFullYear() - BUSINESS_INFO.established;
const avgRating = (REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length).toFixed(1);

/**
 * Sitewide trust strip for the 6 money pages. Uses the real on-site testimonial
 * average (already genuine customer quotes in constants.tsx) rather than a Google
 * rating — the business's GBP currently has 0 reviews, so no Google star count is
 * shown here. Swap the TODO block below for real Google review data once the
 * profile has reviews.
 */
const TrustSection: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
    <div className="bg-brand-light rounded-2xl p-5 text-center border border-gray-100">
      <div className="flex justify-center gap-0.5 text-brand-orange mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill={i < Math.round(Number(avgRating)) ? 'currentColor' : 'none'} />
        ))}
      </div>
      <p className="font-bold text-brand-deep text-sm">{avgRating}/5 Customer Feedback</p>
      {/* TODO: replace with live Google rating + review count once the GBP has reviews */}
    </div>
    <div className="bg-brand-light rounded-2xl p-5 text-center border border-gray-100">
      <Calendar className="mx-auto text-brand-electric mb-2" size={22} />
      <p className="font-bold text-brand-deep text-sm">{yearsServing}+ Years Serving Essex</p>
    </div>
    <div className="bg-brand-light rounded-2xl p-5 text-center border border-gray-100">
      <ShieldCheck className="mx-auto text-brand-electric mb-2" size={22} />
      <p className="font-bold text-brand-deep text-sm">NICEIC Approved &amp; Fully Insured</p>
    </div>
    <div className="bg-brand-light rounded-2xl p-5 text-center border border-gray-100">
      <ImageIcon className="mx-auto text-brand-electric mb-2" size={22} />
      <p className="font-bold text-brand-deep text-sm">Real Job Photos in Our Gallery</p>
    </div>
  </div>
);

export default TrustSection;
