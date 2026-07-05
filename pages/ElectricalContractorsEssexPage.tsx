import React from 'react';
import { Phone, CheckCircle2, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ElectricalContractorsEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "Parker Electrical Solutions - Commercial Contractors",
        "url": "https://www.parkerelectricalsolutions.uk/electrical-contractors-essex",
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
        "description": "Professional commercial electrical contractors in Essex. Industrial installations, office fit-outs, and maintenance."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What commercial electrical services do you offer in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a full range of commercial electrical services including office fit-outs, industrial three-phase installations, distribution board upgrades, emergency lighting, and PAT testing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide EICR certificates for commercial properties in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our NICEIC approved commercial contractors can perform comprehensive Electrical Installation Condition Reports (EICR) for all types of commercial and industrial premises."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle large-scale industrial electrical installations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our team is highly experienced in heavy-duty industrial installations, complex cable management, and machinery electrical connections."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer ongoing commercial electrical maintenance contracts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer bespoke planned maintenance contracts that include regular inspections, emergency lighting tests, and rapid breakdown response to minimize business downtime."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Electrical Contractors Essex | Commercial Electricians | Parker"
        description="Looking for expert commercial electrical contractors in Essex? We specialize in office fit-outs, industrial installations, and business maintenance contracts."
        keywords="electrical contractors essex, commercial electrician essex, industrial electrical contractors essex, business electrician essex"
        canonical="/electrical-contractors-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Contractors Essex</h1>
                <p className="text-xl text-brand-orange font-semibold">B2B Commercial & Industrial Electrical Specialists</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 space-y-8 text-gray-700 leading-relaxed text-lg">
              <p>
                As leading <strong>electrical contractors in Essex</strong>, Parker Electrical Solutions provides robust, scalable, and safe electrical infrastructures for businesses of all sizes. From retail units and office buildings to large-scale industrial warehouses, our team of highly qualified commercial electricians is equipped to handle complex B2B projects across the county.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-deep">Comprehensive Commercial Electrical Solutions</h2>
              <p>
                We understand that commercial electrical work requires strict adherence to deadlines, minimal disruption to your daily operations, and absolute compliance with safety regulations. Our contracting services are designed to meet the rigorous demands of the modern business environment.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="text-brand-electric w-10 h-10 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Office Fit-Outs</h4>
                  <p className="text-sm text-gray-600">Complete electrical installations for new offices or refurbishments, including floor boxes, data cabling, and modern energy-efficient LED lighting systems.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="text-brand-electric w-10 h-10 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Industrial Installations</h4>
                  <p className="text-sm text-gray-600">Heavy-duty three-phase power supplies, distribution board upgrades, and specialized machinery electrical connections for factories and warehouses.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="text-brand-electric w-10 h-10 mb-4" />
                  <h4 className="font-bold text-xl mb-2">EICR & Testing</h4>
                  <p className="text-sm text-gray-600">Commercial Electrical Installation Condition Reports (EICR) and PAT testing to ensure your business remains legally compliant and safe for employees.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="text-brand-electric w-10 h-10 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Planned Maintenance</h4>
                  <p className="text-sm text-gray-600">Bespoke maintenance contracts that provide ongoing support, emergency lighting testing, and rapid breakdown response to prevent costly downtime.</p>
                </div>
              </div>

              <div className="p-6 bg-brand-light rounded-2xl border border-gray-100">
                <h3 className="font-bold text-brand-deep mb-4">Commercial Coverage Across Essex</h3>
                <div className="flex flex-wrap gap-3">
                  <RouterLink to="/electrician-east-london" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">East London</RouterLink>
                  <RouterLink to="/electrician-grays" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Grays</RouterLink>
                  <RouterLink to="/electrician-tilbury" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Tilbury</RouterLink>
                  <RouterLink to="/electrician-shoeburyness" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Shoeburyness</RouterLink>
                  <RouterLink to="/electrician-tendring" className="text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100">Tendring</RouterLink>
                  <RouterLink to="/areas" className="text-sm font-semibold text-white bg-brand-orange hover:bg-orange-600 px-4 py-2 rounded-full transition-colors">See All Areas</RouterLink>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep">Why Partner With Us?</h2>
              <p>
                Choosing the right electrical contractors in Essex is a critical business decision. As a fully NICEIC Approved Contractor, Parker Electrical Solutions operates to the highest industry standards. We provide transparent pricing, detailed project management, and a dedicated point of contact for all commercial contracts. Our engineers are fully insured and undergo continuous training to stay ahead of the latest technological advancements and safety codes.
              </p>

              {/* FAQ Section */}
              <div className="mt-16 bg-brand-light p-8 rounded-3xl border border-gray-100">
                <h2 className="text-3xl font-bold text-brand-deep mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">What commercial electrical services do you offer in Essex?</h3>
                    <p className="text-gray-700 leading-relaxed">We provide a full range of commercial electrical services including office fit-outs, industrial three-phase installations, distribution board upgrades, emergency lighting, and PAT testing.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you provide EICR certificates for commercial properties in Essex?</h3>
                    <p className="text-gray-700 leading-relaxed">Yes, our NICEIC approved commercial contractors can perform comprehensive Electrical Installation Condition Reports (EICR) for all types of commercial and industrial premises.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Can you handle large-scale industrial electrical installations?</h3>
                    <p className="text-gray-700 leading-relaxed">Absolutely. Our team is highly experienced in heavy-duty industrial installations, complex cable management, and machinery electrical connections.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do you offer ongoing commercial electrical maintenance contracts?</h3>
                    <p className="text-gray-700 leading-relaxed">Yes, we offer bespoke planned maintenance contracts that include regular inspections, emergency lighting tests, and rapid breakdown response to minimize business downtime.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center mt-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Discuss Your Commercial Project Today</h3>
                <p className="mb-8 text-white/80">Partner with Essex's premier electrical contractors. Contact our commercial team to arrange a site visit and consultation.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Request a Consultation
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Commercial Team
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

export default ElectricalContractorsEssexPage;
