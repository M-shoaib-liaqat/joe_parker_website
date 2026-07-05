import React from 'react';
import { Phone, MapPin, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricianHarlowPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Harlow HQ",
        "url": "https://www.parkerelectricalsolutions.uk/electrician-harlow",
        "telephone": BUSINESS_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "125 The Briars",
          "addressLocality": "Harlow",
          "addressRegion": "Essex",
          "postalCode": "CM18 7EN",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.7765",
          "longitude": "0.1116"
        },
        "areaServed": "Harlow",
        "description": "Local NICEIC approved electrician in Harlow. Fast response emergency electrical solutions, rewiring, and consumer units."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can your Harlow electrician arrive in an emergency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because our HQ is based right here in Harlow (The Briars, CM18), we can usually reach local emergency call-outs in under 60 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide electrical services for commercial properties in Harlow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we handle everything from domestic house rewires to large-scale commercial fit-outs and EICR testing for businesses in the Pinnacles Industrial Estate and across Harlow."
            }
          },
          {
            "@type": "Question",
            "name": "Are your electricians in Harlow NICEIC approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. All of our electricians are fully NICEIC approved contractors, fully insured, and highly experienced."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer free quotes for electrical work in Harlow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide free, no-obligation quotes for all local residents and businesses in Harlow. Contact us today to discuss your project."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrical Solutions Harlow | Local Electrician | Parker Electrical"
        description="Need a trusted local electrician in Harlow? Parker Electrical Solutions offers rapid response, NICEIC-approved electrical services for homes and businesses."
        keywords="electrical solutions harlow, electrician harlow, local electrician harlow, emergency electrician harlow"
        canonical="/electrician-harlow"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Solutions Harlow</h1>
                <p className="text-xl text-brand-orange font-semibold">Your Trusted Local Experts in CM18 & Surrounding Areas</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 space-y-8 text-gray-700 leading-relaxed text-lg">
              <p>
                Based right here in The Briars, Parker Electrical Solutions is proud to serve our local community. When you are searching for dependable <strong>electrical solutions in Harlow</strong>, you need a contractor who is not only fully qualified but also just around the corner. We provide rapid, professional, and safe electrical services for both domestic properties and local businesses in Harlow and the wider Essex area.
              </p>
              <p>
                Harlow is also home base for our wider <RouterLink to="/electrical-services-essex" className="text-brand-electric font-semibold hover:underline">electrical services across Essex</RouterLink>, including dedicated <RouterLink to="/electrical-contractors-essex" className="text-brand-electric font-semibold hover:underline">electrical contractors for commercial projects</RouterLink> throughout the county.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Why Choose a Harlow Local?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Clock className="text-brand-orange shrink-0" />
                      <span><strong>Fast Response Times:</strong> Being local means we can reach emergency call-outs in Harlow in record time, often under 60 minutes.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="text-brand-orange shrink-0" />
                      <span><strong>Community Trust:</strong> Our reputation is built on years of excellent service to our neighbors and local Harlow businesses.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="text-brand-orange shrink-0" />
                      <span><strong>NICEIC Approved:</strong> Local convenience doesn't mean compromising on quality. We meet the highest national electrical safety standards.</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md">
                   <img src="/assets/domestic/domestic2.jpeg" alt="Harlow Electrician" className="w-full h-full object-cover" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep">Our Harlow Electrical Services</h2>
              <p>
                From modernizing the lighting in a terraced house in Old Harlow to upgrading the heavy-duty distribution boards in the Pinnacles Industrial Estate, we cover it all. Our comprehensive services include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6">
                <li>24/7 Emergency Electrical Repairs</li>
                <li>Full & Partial House Rewiring</li>
                <li>Consumer Unit (Fuse Box) Upgrades</li>
                <li>EICR Landlord Safety Certificates</li>
                <li>EV Charger Installations</li>
                <li>Outdoor & Security Lighting</li>
                <li>Commercial Office Fit-outs</li>
                <li>Fault Finding & Diagnostics</li>
              </ul>

              <p className="mt-8">
                As a family-run business established in 2014, we treat every customer's property with the utmost respect. We offer transparent, upfront pricing with no hidden fees, and all of our work is backed by our comprehensive guarantee and public liability insurance.
              </p>

              {/* FAQ Section */}
              <div className="mt-16 bg-brand-light p-8 rounded-3xl border border-gray-100">
                <h2 className="text-3xl font-bold text-brand-deep mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How quickly can your Harlow electrician arrive in an emergency?</h3>
                    <p className="text-gray-700 leading-relaxed">Because our HQ is based right here in Harlow (The Briars, CM18), we can usually reach local emergency call-outs in under 60 minutes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide electrical services for commercial properties in Harlow?</h3>
                    <p className="text-gray-700 leading-relaxed">Yes, we handle everything from domestic house rewires to large-scale commercial fit-outs and EICR testing for businesses in the Pinnacles Industrial Estate and across Harlow.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are your electricians in Harlow NICEIC approved?</h3>
                    <p className="text-gray-700 leading-relaxed">Absolutely. All of our electricians are fully NICEIC approved contractors, fully insured, and highly experienced.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you offer free quotes for electrical work in Harlow?</h3>
                    <p className="text-gray-700 leading-relaxed">Yes, we provide free, no-obligation quotes for all local residents and businesses in Harlow. Contact us today to discuss your project.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center mt-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Need an Electrician in Harlow?</h3>
                <p className="mb-8 text-white/80">Contact your local experts at Parker Electrical Solutions today for a fast, free quote.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Message Us
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Established 2014</span>
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

export default ElectricianHarlowPage;
