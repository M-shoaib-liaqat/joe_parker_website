import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianBasildonPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Basildon",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-basildon",
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
          "name": "Basildon"
        },
        "description": "Expert NICEIC approved electrician in Basildon. Domestic rewiring, commercial fit-outs, and 24/7 emergency electrical services."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide emergency electrician services in Basildon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a 24/7 emergency electrical call-out service across Basildon and the surrounding areas. We aim to be with you in under 60 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Are your Basildon electricians NICEIC approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our electricians are fully NICEIC approved contractors, ensuring high standards and safety compliance on every job."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle commercial electrical projects in Basildon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We manage everything from small retail electrical maintenance to large-scale industrial distribution board upgrades in Basildon."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrician Basildon | Domestic & Commercial | Parker Electrical"
        description="Searching for a local electrician in Basildon? Parker Electrical Solutions offers top-rated, NICEIC approved electrical services for homes and businesses."
        keywords="electrician basildon, electrical services basildon, commercial electrician basildon, emergency electrician basildon"
        canonical="/electrician-basildon"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrician Basildon</h1>
                <p className="text-xl text-brand-orange font-semibold">Reliable, NICEIC Approved Electrical Services in Basildon, Essex</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                When you need high-quality electrical work in South Essex, Parker Electrical Solutions is here to help. We provide a full suite of domestic and commercial electrical services to the residents and businesses of Basildon. From quick fault-finding at a residential home in Laindon to complex commercial installations in the Pipps Hill Industrial Estate, our expert <strong>electricians in Basildon</strong> deliver outstanding results.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Your Local Basildon Electricians</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Fully certified to current 18th Edition standards.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Fast Response:</strong> Serving all areas in and around Basildon (SS postcodes).</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Transparent Pricing:</strong> Free, no-obligation quotes with no hidden fees.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Basildon Electrical Services</h2>
              <p className="mb-6">
                Our highly trained team handles projects of all sizes with the same level of professionalism. Our services include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">24/7 Emergency Electrician</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Domestic Rewiring</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">EICR Safety Certificates</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Fuse Box Replacements</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charging Points</RouterLink></li>
                <li>Commercial Maintenance Contracts</li>
                <li>Industrial Three-Phase Power</li>
                <li>Security Lighting & CCTV</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide emergency electrician services in Basildon?</h3>
                    <p className="text-gray-700">Yes, we offer a 24/7 emergency electrical call-out service across Basildon and the surrounding areas. We aim to be with you in under 60 minutes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are your Basildon electricians NICEIC approved?</h3>
                    <p className="text-gray-700">Yes, all our electricians are fully NICEIC approved contractors, ensuring high standards and safety compliance on every job.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you handle commercial electrical projects in Basildon?</h3>
                    <p className="text-gray-700">Absolutely. We manage everything from small retail electrical maintenance to large-scale industrial distribution board upgrades in Basildon.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Book an Electrician in Basildon</h3>
                <p className="mb-8 text-white/80">Get in touch today for expert advice and a fast, free quotation.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Request a Quote
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Fully Insured</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricianBasildonPage;
