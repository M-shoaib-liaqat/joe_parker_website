import React from 'react';
import { Phone, CheckCircle2, Home, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const HouseRewireEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "House Rewiring in Essex",
        "serviceType": "Electrical Rewiring",
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
        "description": "Professional full and partial house rewiring services across Essex by NICEIC approved electricians."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a house rewire cost in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of a house rewire in Essex varies depending on the size of the property and your specific requirements. A standard 3-bedroom house rewire typically starts from £3,500. We provide free, accurate quotes after a site visit."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a full house rewire take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A full house rewire usually takes between 5 to 10 days, depending on whether the house is occupied and the complexity of the job. We work efficiently to minimize disruption."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to move out during a house rewire?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is highly recommended to vacate the property during a full rewire due to the dust, noise, and disruption to power. However, if this isn't possible, we can occasionally arrange to rewire the house in stages."
            }
          },
          {
            "@type": "Question",
            "name": "Will a house rewire damage my plastering or decorating?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rewiring is inherently invasive as cables are often buried in walls. We use professional chasing tools with dust extraction to minimize mess, but some replastering and redecorating will be necessary afterwards."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="House Rewire Essex | Full & Partial Rewiring | Parker Electrical"
        description="Looking for professional house rewiring in Essex? Our NICEIC approved electricians offer full and partial home rewires with minimal disruption. Free quotes available."
        keywords="house rewire essex, full rewire essex, partial rewire essex, rewiring cost essex, electrician essex"
        canonical="/house-rewire-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">House Rewiring Essex</h1>
                <p className="text-xl text-brand-orange font-semibold">Expert Full & Partial Home Rewires by NICEIC Electricians</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                Upgrading your home's electrical infrastructure is one of the most important investments you can make for safety and convenience. Over time, wiring degrades, and older systems simply aren't equipped to handle the demands of modern appliances and smart technology. At Parker Electrical Solutions, we specialize in high-quality <strong>house rewiring in Essex</strong>, ensuring your property is fully compliant with the latest 18th Edition wiring regulations.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Signs Your Home Needs a Rewire</h2>
              <p className="mb-6">
                Not sure if your house needs rewiring? If your property is over 25 years old and hasn't had any major electrical upgrades, it's highly likely that a rewire is due. Look out for these warning signs:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Zap className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Flickering or dimming lights</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Zap className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Frequent blown fuses or tripped breakers</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Zap className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Slight shocks from switches or outlets</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Zap className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-deep">Old-fashioned round pin sockets or rubber cables</span>
                </li>
              </ul>
              
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                  <Home className="text-brand-electric w-10 h-10 mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-brand-deep">Full House Rewires</h3>
                  <p className="text-sm">We replace all wiring, sockets, switches, and the consumer unit. Ideal for major renovations, extensions, or older properties undergoing modernization.</p>
                </div>
                <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                  <Home className="text-brand-electric w-10 h-10 mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-brand-deep">Partial Rewires</h3>
                  <p className="text-sm">Upgrading specific areas of your home, such as a new kitchen or bathroom extension, seamlessly integrating new circuits with your existing compliant system.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our Rewiring Process</h2>
              <p className="mb-6">
                We understand that rewiring can be disruptive. That's why our experienced team carefully plans every project to minimize mess and complete the work efficiently:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Detailed Consultation:</strong> We map out where you want all your new sockets, switches, data points, and light fittings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>First Fix (Preparation):</strong> We lift floorboards, chase out walls, and install the hidden cables and back boxes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Second Fix (Completion):</strong> Once plastering is done, we fit the faceplates, connect the consumer unit, and rigorously test the entire system.</span>
                </li>
              </ul>
              
              <p className="mb-10">
                Serving the whole county, including <RouterLink to="/electrician-brentwood" className="text-brand-electric font-bold underline">Brentwood</RouterLink>, Basildon, Harlow, and Chelmsford, Parker Electrical Solutions provides a fully certified, insured, and guaranteed service. Upon completion, you will receive your NICEIC building compliance certificate.
              </p>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How much does a house rewire cost in Essex?</h3>
                    <p className="text-gray-700">The cost of a house rewire in Essex varies depending on the size of the property and your specific requirements. A standard 3-bedroom house rewire typically starts from £3,500. We provide free, accurate quotes after a site visit.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How long does a full house rewire take?</h3>
                    <p className="text-gray-700">A full house rewire usually takes between 5 to 10 days, depending on whether the house is occupied and the complexity of the job. We work efficiently to minimize disruption.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do I need to move out during a house rewire?</h3>
                    <p className="text-gray-700">It is highly recommended to vacate the property during a full rewire due to the dust, noise, and disruption to power. However, if this isn't possible, we can occasionally arrange to rewire the house in stages.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Will a house rewire damage my plastering or decorating?</h3>
                    <p className="text-gray-700">Rewiring is inherently invasive as cables are often buried in walls. We use professional chasing tools with dust extraction to minimize mess, but some replastering and redecorating will be necessary afterwards.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Start Planning Your House Rewire</h3>
                <p className="mb-8 text-white/80">Get a free, detailed, no-obligation quote from Essex's trusted rewiring specialists.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Get a Free Quote
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> 10-Year Guarantee</span>
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

export default HouseRewireEssexPage;
