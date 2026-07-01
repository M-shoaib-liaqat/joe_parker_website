import React from 'react';
import { Phone, CheckCircle2, Zap, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const ConsumerUnitReplacementEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Consumer Unit Replacements in Essex",
        "serviceType": "Fuse Box Upgrade",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Parker Electrical Solutions Ltd",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "125 The Briars",
            "addressLocality": "Harlow",
            "addressRegion": "Essex",
            "postalCode": "CM18 7EN",
            "addressCountry": "GB"
          }
        },
        "areaServed": "Essex",
        "description": "Safe, compliant consumer unit (fuse box) replacements and upgrades across Essex by NICEIC approved electricians."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a consumer unit replacement cost in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard consumer unit replacement in Essex typically costs between £450 and £700, depending on the number of circuits, the size of the board, and whether any existing faults need repairing."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to change a fuse box?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A straight swap usually takes a full working day (around 6-8 hours), as we have to fully test all the circuits in your home before and after the installation to issue a certificate."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a certificate when my consumer unit is replaced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is a legal requirement under Part P of the Building Regulations. We provide an Electrical Installation Certificate (EIC) and register the work with local building control upon completion."
            }
          },
          {
            "@type": "Question",
            "name": "What is an RCD and why do I need one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An RCD (Residual Current Device) is a life-saving device that instantly breaks an electric circuit to prevent serious harm from an ongoing electric shock. Modern consumer units must have RCD protection."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Consumer Unit Replacement Essex | Fuse Box Upgrades | Parker"
        description="Upgrade your old fuse box to a modern, safe consumer unit. Parker Electrical Solutions offers NICEIC approved consumer unit replacements in Essex."
        keywords="consumer unit replacement essex, fuse box upgrade essex, new consumer unit essex, electrician essex"
        canonical="/consumer-unit-replacement-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Consumer Unit Replacement Essex</h1>
                <p className="text-xl text-brand-orange font-semibold">Modern, Safe Fuse Box Upgrades by NICEIC Electricians</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                Your consumer unit, historically known as a fuse box, is the heart of your home's electrical system. It dictates the safety, efficiency, and capacity of the power running through your property. If your unit is outdated, it may not provide adequate protection against electric shocks or electrical fires. At Parker Electrical Solutions, we provide professional <strong>consumer unit replacements in Essex</strong>, ensuring your property complies with the latest 18th Edition wiring regulations.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Why Upgrade Your Consumer Unit?</h2>
              <p className="mb-6">
                Many older homes in Essex still rely on antiquated fuse boards that use rewireable wire fuses and lack modern safety trip switches. Upgrading to a new consumer unit offers critical benefits:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <AlertTriangle className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">RCD Protection against fatal shocks</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <AlertTriangle className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">SPDs (Surge Protection Devices)</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <AlertTriangle className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">AFDDs (Arc Fault Detection)</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <AlertTriangle className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Capacity for new appliances (e.g., EV chargers)</span>
                </li>
              </ul>
              
              <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 my-10">
                <h3 className="text-2xl font-bold text-brand-deep mb-4 flex items-center gap-2">
                  <Zap className="text-brand-electric" /> Our Replacement Process
                </h3>
                <ol className="space-y-4 list-decimal pl-5">
                  <li><strong>Initial Assessment:</strong> We inspect your current electrical setup to ensure the existing wiring is safe enough to support a new unit.</li>
                  <li><strong>Safe Disconnection:</strong> Power is safely shut off, and the old, non-compliant fuse box is carefully removed.</li>
                  <li><strong>Installation:</strong> We install a high-quality metal-clad consumer unit complete with MCBs and RCDs.</li>
                  <li><strong>Rigorous Testing:</strong> We test every single circuit in your home to ensure there are no underlying faults.</li>
                  <li><strong>Certification:</strong> We issue an Electrical Installation Certificate (EIC) and handle the building control notification.</li>
                </ol>
              </div>
              
              <p className="mb-10">
                A consumer unit replacement must legally be performed by a competent, registered electrician. Our NICEIC approved team operates across the whole of Essex, including <RouterLink to="/electrician-harlow" className="text-brand-electric font-bold underline">Harlow</RouterLink>, Epping, <RouterLink to="/electrician-basildon" className="text-brand-electric font-bold underline">Basildon</RouterLink>, and <RouterLink to="/electrician-chelmsford" className="text-brand-electric font-bold underline">Chelmsford</RouterLink>, providing guaranteed peace of mind.
              </p>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How much does a consumer unit replacement cost in Essex?</h3>
                    <p className="text-gray-700">A standard consumer unit replacement in Essex typically costs between £450 and £700, depending on the number of circuits, the size of the board, and whether any existing faults need repairing.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How long does it take to change a fuse box?</h3>
                    <p className="text-gray-700">A straight swap usually takes a full working day (around 6-8 hours), as we have to fully test all the circuits in your home before and after the installation to issue a certificate.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do I need a certificate when my consumer unit is replaced?</h3>
                    <p className="text-gray-700">Yes, it is a legal requirement under Part P of the Building Regulations. We provide an Electrical Installation Certificate (EIC) and register the work with local building control upon completion.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">What is an RCD and why do I need one?</h3>
                    <p className="text-gray-700">An RCD (Residual Current Device) is a life-saving device that instantly breaks an electric circuit to prevent serious harm from an ongoing electric shock. Modern consumer units must have RCD protection.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Upgrade Your Home's Safety Today</h3>
                <p className="mb-8 text-white/80">Get a free, transparent quote for a new consumer unit from our NICEIC approved Essex team.</p>
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
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Part P Compliant</span>
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

export default ConsumerUnitReplacementEssexPage;
