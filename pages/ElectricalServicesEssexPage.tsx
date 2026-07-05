import React from 'react';

import { Phone, CheckCircle2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricalServicesEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Essex Services",
        "url": "https://www.parkerelectricalsolutions.uk/electrical-services-essex",
        "telephone": BUSINESS_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "125 The Briars",
          "addressLocality": "Harlow",
          "addressRegion": "Essex",
          "postalCode": "CM18 7EN",
          "addressCountry": "GB"
        },
        "areaServed": "Essex",
        "description": "Top-rated electrical services across Essex for both domestic and commercial clients."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What electrical services do you offer in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a comprehensive range of electrical services including full house rewires, consumer unit replacements, EICR certificates, EV charger installations, and 24/7 emergency fault finding for both domestic and commercial properties."
            }
          },
          {
            "@type": "Question",
            "name": "Are your electricians in Essex NICEIC approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our electricians are fully NICEIC approved, ensuring that every job complies with the latest 18th Edition wiring regulations for maximum safety."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you respond to an electrical emergency in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a 24/7 emergency call-out service across Essex and London. We typically aim to be at your property in under 60 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide free quotes for electrical work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We provide free, no-obligation quotes for all electrical projects. Contact us to discuss your requirements and we will give you a transparent price breakdown."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrical Services Essex | Domestic & Commercial | Parker"
        description="Looking for reliable electrical services in Essex? Parker Electrical Solutions provides NICEIC-approved commercial contractors & domestic electricians."
        keywords="electrical services essex, electrician essex, commercial electrical services essex, domestic electrician essex"
        canonical="/electrical-services-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Services Essex</h1>
                <p className="text-xl text-brand-orange font-semibold">Your Local NICEIC Approved Electricians</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 space-y-8 text-gray-700 leading-relaxed text-lg">
              <p>
                When it comes to finding reliable <strong>electrical services in Essex</strong>, you need a team that combines technical expertise with outstanding customer care. At Parker Electrical Solutions, we pride ourselves on delivering top-tier electrical work for both residential homeowners and commercial businesses throughout the entire county of Essex.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-brand-deep mb-3 flex items-center gap-2">
                    <Shield className="text-brand-success" /> Domestic Services
                  </h3>
                  <p className="text-sm">
                    From full house rewires to consumer unit replacements and fault finding, our domestic electricians ensure your home is safe, compliant, and energy-efficient. We handle modern lighting installations, smart home setups, and EV charger installations with minimal disruption to your daily life.
                  </p>
                </div>
                <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-brand-deep mb-3 flex items-center gap-2">
                    <Shield className="text-brand-electric" /> Commercial Services
                  </h3>
                  <p className="text-sm">
                    Essex businesses trust us for comprehensive commercial electrical solutions. We provide office fit-outs, heavy-duty industrial installations, three-phase power upgrades, and regular maintenance contracts including EICR landlord certificates and PAT testing to keep your operations running smoothly.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-brand-light rounded-2xl border border-gray-100">
                <h3 className="font-bold text-brand-deep mb-4">Covering Essex Town-by-Town</h3>
                <div className="flex flex-wrap gap-3">
                  <RouterLink to="/electrician-harlow" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Harlow</RouterLink>
                  <RouterLink to="/electrician-chelmsford" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Chelmsford</RouterLink>
                  <RouterLink to="/electrician-basildon" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Basildon</RouterLink>
                  <RouterLink to="/electrician-brentwood" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Brentwood</RouterLink>
                  <RouterLink to="/electrician-southend" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Southend</RouterLink>
                  <RouterLink to="/electrician-colchester" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Colchester</RouterLink>
                  <RouterLink to="/electrician-rayleigh" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Rayleigh</RouterLink>
                  <RouterLink to="/electrician-braintree" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Braintree</RouterLink>
                  <RouterLink to="/areas" className="text-sm font-semibold text-white bg-brand-orange hover:bg-orange-600 px-4 py-2 rounded-full transition-colors">See All Areas</RouterLink>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep">Why Choose Our Electrical Services in Essex?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>NICEIC Approved Contractors:</strong> Our work is strictly regulated and tested to meet the highest national safety standards (18th Edition wiring regulations).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Rapid Emergency Response:</strong> Electrical faults don't wait for business hours. We offer 24/7 emergency call-outs across Essex.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Fully Insured & Guaranteed:</strong> Enjoy complete peace of mind knowing that all our electrical services are fully insured and backed by comprehensive guarantees.</span>
                </li>
              </ul>

              <p>
                Whether you're located in Chelmsford, Basildon, Brentwood, Harlow, or anywhere else in the region, our dedicated fleet of electricians is ready to assist. Don't compromise on safety or quality when it comes to your electrical systems. 
              </p>

              {/* FAQ Section */}
              <div className="mt-16 bg-brand-light p-8 rounded-3xl border border-gray-100">
                <h2 className="text-3xl font-bold text-brand-deep mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">What electrical services do you offer in Essex?</h3>
                    <p className="text-gray-700 leading-relaxed">We offer a comprehensive range of electrical services including full house rewires, consumer unit replacements, EICR certificates, EV charger installations, and 24/7 emergency fault finding for both domestic and commercial properties.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are your electricians in Essex NICEIC approved?</h3>
                    <p className="text-gray-700 leading-relaxed">Yes, all our electricians are fully NICEIC approved, ensuring that every job complies with the latest 18th Edition wiring regulations for maximum safety.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How quickly can you respond to an electrical emergency in Essex?</h3>
                    <p className="text-gray-700 leading-relaxed">We offer a 24/7 emergency call-out service across Essex and London. We typically aim to be at your property in under 60 minutes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide free quotes for electrical work?</h3>
                    <p className="text-gray-700 leading-relaxed">Yes! We provide free, no-obligation quotes for all electrical projects. Contact us to discuss your requirements and we will give you a transparent price breakdown.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center mt-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to upgrade your electrical systems?</h3>
                <p className="mb-8 text-white/80">Contact Parker Electrical Solutions today for a free, no-obligation quote.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Get Your Free Quote
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Family-run since 2014</span>
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

export default ElectricalServicesEssexPage;
