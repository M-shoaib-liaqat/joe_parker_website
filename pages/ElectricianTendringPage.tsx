import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianTendringPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Tendring",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-tendring",
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
          "@type": "AdministrativeArea",
          "name": "Tendring"
        },
        "description": "NICEIC approved electrician serving the Tendring district, including Clacton-on-Sea, Frinton-on-Sea, and Walton-on-the-Naze."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which towns in Tendring do you cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover the whole Tendring district, including Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, Harwich, and Manningtree."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle electrical safety certificates for holiday lets in Tendring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Tendring has a lot of holiday lets and static caravans, and we regularly provide EICR certificates and general electrical safety checks for this type of property."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide emergency electrician cover across the Tendring coast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer 24/7 emergency electrical call-outs across the Tendring peninsula, including the coastal towns."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrical Services Tendring | NICEIC Approved | Parker Electrical"
        description="Looking for a reliable electrician across the Tendring district? Parker Electrical Solutions provides NICEIC approved electrical services in Clacton, Frinton, and Walton."
        keywords="electrical services tendring, electrician clacton, electrician frinton, electrical maintenance tendring, EICR tendring"
        canonical="/electrician-tendring"
        structuredData={structuredData}
      />

      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Services Tendring</h1>
                <p className="text-xl text-brand-orange font-semibold">NICEIC Approved Electricians Across the Tendring Coast</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                The Tendring district covers a wide stretch of Essex coastline, from Clacton-on-Sea and Frinton-on-Sea to Walton-on-the-Naze and Harwich, and Parker Electrical Solutions serves the whole area. Coastal towns here have a particular mix of seafront homes, holiday lets, and static caravan parks, and our <strong>electricians covering Tendring</strong> are experienced with the electrical safety needs specific to seasonal and let properties, alongside standard domestic and commercial work.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Trusted Tendring Electricians</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Certified to current 18th Edition wiring regulations.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Local Coverage:</strong> Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, and the CO postcode area.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Transparent Pricing:</strong> Free, no-obligation quotes with no hidden fees.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our Tendring Electrical Services</h2>
              <p className="mb-6">
                We handle domestic, holiday-let, and commercial work across the Tendring district, including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">24/7 Emergency Electrician</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Full & Partial House Rewires</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">EICR Safety Certificates</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Fuse Box Replacements</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charger Installation</RouterLink></li>
                <li><RouterLink to="/electrical-contractors-essex" className="text-brand-electric hover:underline">Commercial Electrical Contractors</RouterLink></li>
                <li><RouterLink to="/electrical-services-essex" className="text-brand-electric hover:underline">Full Essex Electrical Services</RouterLink></li>
                <li>Holiday Home Electrical Certificates</li>
                <li>Seafront Static Caravan Wiring</li>
                <li>Multi-Occupancy Rental Compliance</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Which towns in Tendring do you cover?</h3>
                    <p className="text-gray-700">We cover the whole Tendring district, including Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, Harwich, and Manningtree.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you handle electrical safety certificates for holiday lets in Tendring?</h3>
                    <p className="text-gray-700">Yes, Tendring has a lot of holiday lets and static caravans, and we regularly provide EICR certificates and general electrical safety checks for this type of property.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide emergency electrician cover across the Tendring coast?</h3>
                    <p className="text-gray-700">Yes, we offer 24/7 emergency electrical call-outs across the Tendring peninsula, including the coastal towns.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Need an Electrician in Tendring?</h3>
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

export default ElectricianTendringPage;
