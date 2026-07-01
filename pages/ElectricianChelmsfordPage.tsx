import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianChelmsfordPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Chelmsford",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-chelmsford",
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
          "name": "Chelmsford"
        },
        "description": "NICEIC approved electrician in Chelmsford, Essex. We provide domestic house rewires, commercial EICR testing, and emergency fault finding."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide emergency electrician services in Chelmsford?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a 24/7 emergency electrical call-out service across Chelmsford. We typically aim to reach local emergencies in under 60 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Are your electricians working in Chelmsford NICEIC approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. All of our electricians covering the Chelmsford area are fully NICEIC approved, meaning our work complies with the strict 18th Edition wiring regulations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer free quotes for electrical work in Chelmsford?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide free, no-obligation quotes for all domestic and commercial electrical projects in Chelmsford."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrician Chelmsford | NICEIC Approved | Parker Electrical"
        description="Looking for a reliable electrician in Chelmsford? Parker Electrical Solutions provides NICEIC approved domestic and commercial electrical services in Chelmsford, Essex."
        keywords="electrician chelmsford, electrical contractors chelmsford, emergency electrician chelmsford, house rewire chelmsford"
        canonical="/electrician-chelmsford"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrician Chelmsford</h1>
                <p className="text-xl text-brand-orange font-semibold">NICEIC Approved Electrical Services in Chelmsford, Essex</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                Finding an electrician you can trust with your home or business in Chelmsford doesn't have to be difficult. Parker Electrical Solutions is proud to offer our comprehensive range of highly-rated electrical services to the residents and businesses of Chelmsford and the surrounding villages. Whether you're in the city centre, Springfield, Great Baddow, or Chelmer Village, our expert <strong>electricians in Chelmsford</strong> are ready to assist.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Trusted Chelmsford Electrical Contractors</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> We meet the highest national safety standards.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Local Coverage:</strong> Serving the entirety of Chelmsford and CM postcodes.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Fully Insured:</strong> Peace of mind with comprehensive public liability insurance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our Services in Chelmsford</h2>
              <p className="mb-6">
                We cater to both domestic households and commercial enterprises. No job is too small or too large. Our services include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">24/7 Emergency Repairs</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Full House Rewires</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">EICR Landlord Certificates</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Consumer Unit Upgrades</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charger Installations</RouterLink></li>
                <li>Commercial Office Fit-outs</li>
                <li>Lighting Design & Installation</li>
                <li>Fault Finding & Diagnostics</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide emergency electrician services in Chelmsford?</h3>
                    <p className="text-gray-700">Yes, we offer a 24/7 emergency electrical call-out service across Chelmsford. We typically aim to reach local emergencies in under 60 minutes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are your electricians working in Chelmsford NICEIC approved?</h3>
                    <p className="text-gray-700">Absolutely. All of our electricians covering the Chelmsford area are fully NICEIC approved, meaning our work complies with the strict 18th Edition wiring regulations.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you offer free quotes for electrical work in Chelmsford?</h3>
                    <p className="text-gray-700">Yes, we provide free, no-obligation quotes for all domestic and commercial electrical projects in Chelmsford.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Need an Electrician in Chelmsford?</h3>
                <p className="mb-8 text-white/80">Contact our expert team today for a free, transparent quote.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Message Us
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Fully Insured</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Local Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricianChelmsfordPage;
