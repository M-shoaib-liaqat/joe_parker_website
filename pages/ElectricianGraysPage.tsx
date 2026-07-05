import React from 'react';
import { Phone, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianGraysPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Grays",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-grays",
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
          "name": "Grays"
        },
        "description": "NICEIC approved electrician serving Grays and Thurrock. Domestic, industrial estate, and 24/7 emergency electrical services."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you cover Grays and the wider Thurrock area?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we cover Grays town centre, Chafford Hundred, West Thurrock, and the surrounding RM postcode area."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work on industrial and warehouse electrics near Grays?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, given how many distribution and logistics sites operate along the Thames-side corridor near Grays, we regularly carry out industrial and warehouse electrical installations and maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "Can you rewire a new-build or recently converted property in Grays?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely — we handle everything from snagging and additional circuits on new developments to full rewires on older housing stock in and around Grays."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrical Solutions Grays | NICEIC Approved | Parker Electrical"
        description="Looking for a reliable electrician in Grays, Essex? Parker Electrical Solutions provides NICEIC approved domestic and industrial electrical services across Thurrock."
        keywords="electrical solutions grays, electrician grays essex, emergency electrician grays, EICR grays, electrician thurrock"
        canonical="/electrician-grays"
        structuredData={structuredData}
      />

      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Solutions Grays</h1>
                <p className="text-xl text-brand-orange font-semibold">NICEIC Approved Electricians Serving Grays & Thurrock</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                Grays sits at the heart of Thurrock, close to Lakeside and the busy Thames-side industrial corridor, and Parker Electrical Solutions is proud to serve homes and businesses right across the area. Whether it's a domestic rewire in Chafford Hundred, an additional circuit at a new-build in West Thurrock, or a full electrical upgrade at a warehouse near the docks, our <strong>electricians in Grays</strong> handle it with the same NICEIC-certified standard of work.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Trusted Grays Electricians</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Certified to current 18th Edition wiring regulations.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Local Coverage:</strong> Grays, Chafford Hundred, West Thurrock, and surrounding RM postcodes.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Transparent Pricing:</strong> Free, no-obligation quotes with no hidden fees.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our Grays Electrical Services</h2>
              <p className="mb-6">
                We handle both domestic and commercial work across Grays and Thurrock, including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 mb-10">
                <li><RouterLink to="/emergency-electrician-essex" className="text-brand-electric hover:underline">24/7 Emergency Electrician</RouterLink></li>
                <li><RouterLink to="/house-rewire-essex" className="text-brand-electric hover:underline">Full & Partial House Rewires</RouterLink></li>
                <li><RouterLink to="/eicr-certificate-essex" className="text-brand-electric hover:underline">EICR Safety Certificates</RouterLink></li>
                <li><RouterLink to="/consumer-unit-replacement-essex" className="text-brand-electric hover:underline">Fuse Box Replacements</RouterLink></li>
                <li><RouterLink to="/ev-charging-essex" className="text-brand-electric hover:underline">EV Charger Installation</RouterLink></li>
                <li><RouterLink to="/electrical-contractors-essex" className="text-brand-electric hover:underline">Commercial Electrical Contractors</RouterLink></li>
                <li><RouterLink to="/electrical-services-essex" className="text-brand-electric hover:underline">Full Essex Electrical Services</RouterLink></li>
                <li>Industrial Estate Installations</li>
                <li>Warehouse & Distribution Wiring</li>
                <li>New-Build Housing Electrics</li>
              </ul>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you cover Grays and the wider Thurrock area?</h3>
                    <p className="text-gray-700">Yes, we cover Grays town centre, Chafford Hundred, West Thurrock, and the surrounding RM postcode area.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you work on industrial and warehouse electrics near Grays?</h3>
                    <p className="text-gray-700">Yes, given how many distribution and logistics sites operate along the Thames-side corridor near Grays, we regularly carry out industrial and warehouse electrical installations and maintenance.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Can you rewire a new-build or recently converted property in Grays?</h3>
                    <p className="text-gray-700">Absolutely — we handle everything from snagging and additional circuits on new developments to full rewires on older housing stock in and around Grays.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Need an Electrician in Grays?</h3>
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

export default ElectricianGraysPage;
