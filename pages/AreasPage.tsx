
import React from 'react';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const AreasPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-brand-deep py-32 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold">Areas We Serve</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Providing expert NICEIC-approved electrical services across the entirety of Essex and London.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-deep">Local Presence, Professional Quality</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Parker Electrical Solutions is proud to be a truly local business. We serve the following major areas and their surroundings with rapid-response emergency services and scheduled electrical works.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BUSINESS_INFO.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-brand-light rounded-xl border border-gray-100 hover:border-brand-electric transition-colors">
                    <MapPin className="text-brand-electric" />
                    <span className="font-bold">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-orange text-white p-8 rounded-3xl space-y-4">
                <h3 className="text-2xl font-bold">Not sure if we cover you?</h3>
                <p>We frequently travel beyond these towns for commercial projects and larger residential works. Give us a call to confirm coverage.</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 text-xl font-black bg-white text-brand-orange px-6 py-3 rounded-full">
                  <Phone size={24} /> {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-8 bg-brand-light rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-brand-deep">Why Choose a Local Electrician?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0"><Clock className="text-brand-electric" /></div>
                    <div>
                      <h4 className="font-bold">Faster Response Times</h4>
                      <p className="text-gray-600 text-sm">Being local allows us to reach emergency call-outs in Brentwood and surrounding areas in under 60 minutes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0"><MapPin className="text-brand-electric" /></div>
                    <div>
                      <h4 className="font-bold">Local Knowledge</h4>
                      <p className="text-gray-600 text-sm">We are familiar with the common property types and electrical architectures found throughout Essex towns.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0"><ChevronRight className="text-brand-electric" /></div>
                    <div>
                      <h4 className="font-bold">Community Trust</h4>
                      <p className="text-gray-600 text-sm">Our reputation is built on word-of-mouth recommendations within the local Essex communities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                {/* Mock Map */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                   <img src="https://picsum.photos/800/600?grayscale" className="w-full h-full object-cover opacity-50" alt="Map area" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-brand-deep/20">
                     <MapPin size={64} className="text-brand-orange animate-bounce" />
                     <p className="text-white font-bold text-2xl mt-4 drop-shadow-lg">Serving All of Essex & London</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasPage;
