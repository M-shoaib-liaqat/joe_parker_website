import React, { useEffect, useState } from 'react';
import { MapPin, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

// Generic, non-fabricated categories of recent work — not specific claimed
// jobs/addresses/dates, since we don't have a real live feed to pull from.
// Swap for a real recent-jobs data source if/when one exists.
const RECENT_WORK_TYPES = [
  'EICR certificates for landlords',
  'Consumer unit upgrades',
  '24/7 emergency call-outs',
  'EV charger installations',
  'Full & partial house rewires',
  'Commercial fit-out electrics',
];

const LocalProofStrip: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % RECENT_WORK_TYPES.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-brand-deep text-white rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 my-10">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <MapPin size={18} className="text-brand-orange shrink-0" />
        <span>Serving {BUSINESS_INFO.areas.slice(0, 3).join(', ')} &amp; nearby areas — available today</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/80">
        <Zap size={16} className="text-brand-orange shrink-0" />
        <span key={index} className="animate-in fade-in duration-500">
          Recent work: {RECENT_WORK_TYPES[index]}
        </span>
      </div>
    </div>
  );
};

export default LocalProofStrip;
