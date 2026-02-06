
import React from 'react';
import { Award, Shield, Users, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-brand-deep py-32 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">About Parker Electrical</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A family-run electrical contracting business serving Essex and London with excellence since {BUSINESS_INFO.established}.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-deep">Our Commitment to Quality</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by lead electrician Joe Parker, Parker Electrical Solutions was established with a simple mission: to provide high-quality, safe, and reliable electrical services to our local community. Over the last decade, we have expanded from a small domestic setup into a full-service electrical contractor for both residential and commercial clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">10+ Years</h4>
                  <p className="text-gray-500">Industry experience across all sectors.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">100%</h4>
                  <p className="text-gray-500">NICEIC compliance and safety record.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">24/7</h4>
                  <p className="text-gray-500">Support for all local emergencies.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">Family-Run</h4>
                  <p className="text-gray-500">Personal service you can trust.</p>
                </div>
              </div>
            </div>
            <img
              src="/assets/logo/logo.png"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-contain bg-white p-8"
              alt="Joe Parker Electrical logo"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-deep">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Shield /></div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-500">Honest advice and transparent pricing on every job.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Award /></div>
              <h3 className="text-xl font-bold">Safety</h3>
              <p className="text-gray-500">Rigorous testing to ensure your home is fully compliant.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Users /></div>
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-500">We treat your property with the respect it deserves.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Clock /></div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500">Showing up on time and delivering as promised.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
