import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianBrentwoodPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Brentwood",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-brentwood",
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
          "name": "Brentwood"
        },
        "description": "Professional electrician in Brentwood, Essex. NICEIC approved services including full home rewires, EICR certificates, and EV chargers."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide emergency electrician services in Brentwood?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our rapid response emergency electricians serve the entire Brentwood area 24/7."
            }
          },
          {
            "@type": "Question",
            "name": "Are your electricians working in Brentwood fully insured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our work in Brentwood is covered by comprehensive public liability insurance and our NICEIC approved contractor guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "Can you install EV chargers at properties in Brentwood?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We are certified EV charger installers and regularly fit dedicated charging points at homes and businesses across Brentwood."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrician Brentwood | NICEIC Approved | Parker Electrical"
        description="Looking for an expert electrician in Brentwood? We provide fast, fully insured, NICEIC approved electrical services for residential and commercial clients."
        keywords="electrician brentwood, electrical contractors brentwood, house rewire brentwood, emergency electrician brentwood"
        canonical="/electrician-brentwood"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrician Brentwood</h1>
                <p className="text-xl text-brand-orange font-semibold">Premium, NICEIC Approved Electricians in Brentwood</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                When searching for a highly competent <strong>electrician in Brentwood</strong>, you need a contractor who prioritizes safety, cleanliness, and precise workmanship. Parker Electrical Solutions brings years of dedicated experience to homes and businesses across Brentwood, Shenfield, and Hutton. We handle everything from high-end residential lighting designs to robust commercial infrastructure installations.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">The Brentwood Electrical Experts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Certified to the highest 18th Edition standards.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Local Knowledge:</strong> Covering all CM13, CM14, and CM15 postcodes.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Fully Guaranteed:</strong> Enjoy a 10-year guarantee on our workmanship.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Electrical Services in Brentwood</h2>
              <p className="mb-6">
                Whether you are renovating a period property or opening a new retail store on the High Street, our comprehensive services include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">24 Hour Emergency Call-outs</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Complete House Rewires</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Consumer Unit Upgrades</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">EICR Landlord Checks</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charging Stations</RouterLink></li>
                <li><RouterLink to="/electrical-contractors-essex" className="text-brand-electric hover:underline">Commercial Electrical Contractors</RouterLink></li>
                <li><RouterLink to="/electrical-services-essex" className="text-brand-electric hover:underline">Full Essex Electrical Services</RouterLink></li>
                <li>Smart Home Integrations</li>
                <li>Garden & Security Lighting</li>
                <li>Commercial PAT Testing</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide emergency electrician services in Brentwood?</h3>
                    <p className="text-gray-700">Yes, our rapid response emergency electricians serve the entire Brentwood area 24/7.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are your electricians working in Brentwood fully insured?</h3>
                    <p className="text-gray-700">Yes, all our work in Brentwood is covered by comprehensive public liability insurance and our NICEIC approved contractor guarantee.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Can you install EV chargers at properties in Brentwood?</h3>
                    <p className="text-gray-700">Absolutely. We are certified EV charger installers and regularly fit dedicated charging points at homes and businesses across Brentwood.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Discuss Your Electrical Project</h3>
                <p className="mb-8 text-white/80">Get a free, detailed quotation for your property in Brentwood.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Contact Us
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Guarantee on Work</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Trusted Localy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricianBrentwoodPage;
