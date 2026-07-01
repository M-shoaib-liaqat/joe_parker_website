import React from 'react';
import { Phone, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';

const EmergencyElectricianEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "24/7 Emergency Electrician in Essex",
        "serviceType": "Emergency Electrical Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Parker Electrical Solutions Ltd",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "125 The Briars",
            "addressLocality": "Harlow",
            "addressRegion": "Essex",
            "postalCode": "CM18 7EN",
            "addressCountry": "GB"
          }
        },
        "areaServed": "Essex",
        "description": "Rapid response 24/7 emergency electrician serving all of Essex. Fault finding, power outages, and immediate safety repairs."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can an emergency electrician reach me in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We aim to reach emergency call-outs within 60 minutes across most parts of Essex, including Harlow, Chelmsford, and Brentwood."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge a call-out fee for emergencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have a standard emergency call-out fee which covers the first hour of fault finding and diagnostic work. We will clearly state this fee over the phone before we arrive."
            }
          },
          {
            "@type": "Question",
            "name": "What counts as an electrical emergency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Electrical emergencies include total power loss, sparking outlets, burning smells from consumer units, persistent tripping, or exposed live wires. If you feel unsafe, it is an emergency."
            }
          },
          {
            "@type": "Question",
            "name": "Are you available on weekends and bank holidays?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our emergency electrical services operate 24 hours a day, 7 days a week, 365 days a year. We are always ready to help."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Emergency Electrician Essex | 24/7 Fast Response | Parker"
        description="Power outage? Sparking sockets? Parker Electrical Solutions provides a 24/7 rapid response emergency electrician service across Essex. Call us immediately."
        keywords="emergency electrician essex, 24 hour electrician essex, electrical fault finding essex, out of hours electrician essex"
        canonical="/emergency-electrician-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-red-500">
            <div className="bg-red-600 text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-red-700/50 z-0"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4"><AlertTriangle size={64} className="animate-pulse" /></div>
                <h1 className="text-4xl md:text-5xl font-black mb-4">24/7 Emergency Electrician Essex</h1>
                <p className="text-xl font-semibold">Immediate Response for Electrical Faults & Power Outages</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center mb-10">
                <h2 className="text-2xl font-bold text-red-600 mb-2">Do you have an electrical emergency right now?</h2>
                <p className="mb-6 text-gray-800">Don't wait. Call us immediately for rapid assistance.</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold text-2xl shadow-lg transition-transform hover:scale-105">
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
              
              <p className="mb-6">
                Electrical emergencies can strike at any time, leaving you in the dark, without heating, or in potential danger. If you are experiencing a severe fault, you need a highly qualified <strong>emergency electrician in Essex</strong> who can reach you quickly and resolve the issue safely. Parker Electrical Solutions provides a dedicated 24-hour emergency response service for both domestic homes and commercial businesses across the county.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Common Electrical Emergencies We Fix</h2>
              <p className="mb-6">
                Do not attempt to fix severe electrical issues yourself. Our NICEIC approved electricians are trained to handle:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Total loss of power</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Consumer unit constantly tripping</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Sparking or smoking sockets/switches</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Fishy or burning smells from fuse boards</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Flood or water damage to electrics</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Severed cables from DIY accidents</span>
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our Emergency Process</h2>
              <p className="mb-6">
                When you call our emergency hotline, we act fast. We'll ask you a few quick questions to assess the danger and dispatch an electrician immediately. Upon arrival, our first priority is making the property safe. Using advanced diagnostic tools, we isolate the fault. If we can repair it on the spot, we will. If a temporary make-safe is required (e.g., waiting for specialty parts), we will secure the system and return the next day to complete the permanent repair.
              </p>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How quickly can an emergency electrician reach me in Essex?</h3>
                    <p className="text-gray-700">We aim to reach emergency call-outs within 60 minutes across most parts of Essex, including Harlow, Chelmsford, and Brentwood.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you charge a call-out fee for emergencies?</h3>
                    <p className="text-gray-700">Yes, we have a standard emergency call-out fee which covers the first hour of fault finding and diagnostic work. We will clearly state this fee over the phone before we arrive.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">What counts as an electrical emergency?</h3>
                    <p className="text-gray-700">Electrical emergencies include total power loss, sparking outlets, burning smells from consumer units, persistent tripping, or exposed live wires. If you feel unsafe, it is an emergency.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are you available on weekends and bank holidays?</h3>
                    <p className="text-gray-700">Yes, our emergency electrical services operate 24 hours a day, 7 days a week, 365 days a year. We are always ready to help.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg border border-red-500">
                <h3 className="text-2xl font-bold mb-4">We Are Ready to Help</h3>
                <p className="mb-8 text-white/80">Call our 24/7 hotline now to speak directly with an electrician.</p>
                <div className="flex justify-center">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg text-xl">
                    <Phone size={24} /> Call {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Under 60 Mins Response</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Transparent Rates</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyElectricianEssexPage;
