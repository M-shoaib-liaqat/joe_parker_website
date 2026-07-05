import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianBraintreePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Braintree",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-braintree",
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
          "name": "Braintree"
        },
        "description": "NICEIC approved electrician serving Braintree. Retail, rural property, and domestic electrical services with 24/7 emergency callouts."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you work on retail units, including around Freeport Braintree?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we carry out commercial electrical work for retail and office units in and around Braintree, including maintenance contracts and fit-outs."
            }
          },
          {
            "@type": "Question",
            "name": "Do you cover rural properties and barn conversions near Braintree?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Braintree's surrounding villages include a lot of period and rural properties, and we regularly carry out rewires and upgrades on barn conversions and farmhouses."
            }
          },
          {
            "@type": "Question",
            "name": "Are you NICEIC approved electricians in the CM7 area?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all work carried out in Braintree and the surrounding CM7 postcode is completed to NICEIC approved standards."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrical Solutions Braintree | NICEIC Approved | Parker Electrical"
        description="Looking for a reliable electrician in Braintree? Parker Electrical Solutions provides NICEIC approved domestic and commercial electrical services across CM7."
        keywords="electrical solutions braintree, electrician braintree essex, emergency electrician braintree, EICR braintree"
        canonical="/electrician-braintree"
        structuredData={structuredData}
      />

      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Solutions Braintree</h1>
                <p className="text-xl text-brand-orange font-semibold">NICEIC Approved Electricians Serving Braintree, Essex</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                As a historic market town with a busy retail scene around Freeport Braintree and plenty of rural properties in the surrounding villages, Braintree has a real mix of electrical work — and Parker Electrical Solutions covers all of it. From shop fit-outs in the town centre to barn conversion rewires out towards Halstead and Witham, our <strong>electricians in Braintree</strong> bring the same NICEIC-certified standard to every job.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Trusted Braintree Electricians</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Certified to current 18th Edition wiring regulations.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Local Coverage:</strong> Braintree town centre and the surrounding CM7 postcode.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Fully Insured:</strong> Comprehensive public liability cover on every job.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our Braintree Electrical Services</h2>
              <p className="mb-6">
                We cater to both domestic households and local businesses, including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">24/7 Emergency Electrician</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Full & Partial House Rewires</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">EICR Safety Certificates</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Fuse Box Replacements</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charger Installation</RouterLink></li>
                <li><RouterLink to="/electrical-contractors-essex" className="text-brand-electric hover:underline">Commercial Electrical Contractors</RouterLink></li>
                <li><RouterLink to="/electrical-services-essex" className="text-brand-electric hover:underline">Full Essex Electrical Services</RouterLink></li>
                <li>Retail & Outlet Village Electrics</li>
                <li>Barn & Rural Property Conversions</li>
                <li>Office Fit-Out Wiring</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you work on retail units, including around Freeport Braintree?</h3>
                    <p className="text-gray-700">Yes, we carry out commercial electrical work for retail and office units in and around Braintree, including maintenance contracts and fit-outs.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you cover rural properties and barn conversions near Braintree?</h3>
                    <p className="text-gray-700">Yes, Braintree's surrounding villages include a lot of period and rural properties, and we regularly carry out rewires and upgrades on barn conversions and farmhouses.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are you NICEIC approved electricians in the CM7 area?</h3>
                    <p className="text-gray-700">Yes, all work carried out in Braintree and the surrounding CM7 postcode is completed to NICEIC approved standards.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Need an Electrician in Braintree?</h3>
                <p className="mb-8 text-white/80">Contact our team today for a free, transparent quote.</p>
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

export default ElectricianBraintreePage;
