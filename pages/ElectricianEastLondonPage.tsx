import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianEastLondonPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - East London",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-east-london",
        "telephone": BUSINESS_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "125 The Briars",
          "addressLocality": "Harlow",
          "addressRegion": "Essex",
          "postalCode": "CM18 7EN",
          "addressCountry": "GB"
        },
        "areaServed": {
          "@type": "City",
          "name": "East London"
        },
        "description": "NICEIC approved electrician serving East London. Fast emergency response, residential rewires, and commercial electrical maintenance."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide emergency electrician services in East London?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 24/7 emergency electrical services across East London boroughs, including Stratford, Romford, and Ilford."
            }
          },
          {
            "@type": "Question",
            "name": "Are your electricians in East London fully qualified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our team consists of fully qualified, NICEIC approved contractors capable of handling complex domestic and commercial electrical issues safely."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer landlord EICR certificates in East London?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide thorough Electrical Installation Condition Reports (EICR) for landlords across East London to ensure legal compliance."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrician East London | 24/7 Emergency & Rewires | Parker"
        description="Looking for a reliable electrician in East London? We provide rapid emergency response, NICEIC approved rewires, and commercial electrical services."
        keywords="electrician east london, emergency electrician east london, electrical contractors east london, house rewire east london"
        canonical="/electrician-east-london"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrician East London</h1>
                <p className="text-xl text-brand-orange font-semibold">Fast, Reliable & NICEIC Approved Electrical Services</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                From modern apartments in Stratford to historic properties in Romford, Parker Electrical Solutions provides top-tier electrical services across the East London area. We bridge the gap between Essex and London, ensuring that residents and businesses receive the highest standard of safety, efficiency, and customer care from a fully qualified <strong>electrician in East London</strong>.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Why Choose Us in East London?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Fully compliant with all UK building regulations.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Rapid Response:</strong> Excellent local knowledge for fast emergency arrivals.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Honest Pricing:</strong> Clear, upfront quotes before any work begins.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our East London Services</h2>
              <p className="mb-6">
                Our electricians are equipped to manage a wide array of electrical tasks, minimizing disruption to your daily life or business operations. Services include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">Emergency Fault Finding</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Domestic Rewires & Upgrades</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">Landlord Safety Checks (EICR)</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Fuse Board Replacements</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charging Solutions</RouterLink></li>
                <li>Retail & Commercial Lighting</li>
                <li>Smart Home Automation</li>
                <li>Data Cabling & Networking</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide emergency electrician services in East London?</h3>
                    <p className="text-gray-700">Yes, we provide 24/7 emergency electrical services across East London boroughs, including Stratford, Romford, and Ilford.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are your electricians in East London fully qualified?</h3>
                    <p className="text-gray-700">Yes, our team consists of fully qualified, NICEIC approved contractors capable of handling complex domestic and commercial electrical issues safely.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you offer landlord EICR certificates in East London?</h3>
                    <p className="text-gray-700">Yes, we provide thorough Electrical Installation Condition Reports (EICR) for landlords across East London to ensure legal compliance.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Require Electrical Assistance in East London?</h3>
                <p className="mb-8 text-white/80">Get a professional, competitive quote from our NICEIC approved team today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Contact Us Online
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Safety Guaranteed</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricianEastLondonPage;
