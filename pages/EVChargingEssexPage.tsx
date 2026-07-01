import React from 'react';
import { Phone, CheckCircle2, BatteryCharging, Leaf } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const EVChargingEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "EV Charger Installation in Essex",
        "serviceType": "Electric Vehicle Charger Installer",
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
        "description": "Professional EV charger installations for homes and businesses across Essex. Fast, smart, and safe charging solutions."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to install an EV charger at home in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost typically ranges between £800 and £1,200 including the charger unit and standard installation. Costs can vary depending on cable routing and your current electrical setup."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a new consumer unit to install an EV charger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. If your current consumer unit has spare capacity and meets current safety standards, we can connect to it. If not, we may need to install a separate mini consumer unit just for the charger."
            }
          },
          {
            "@type": "Question",
            "name": "How long does an EV charger installation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard home EV charger installation usually takes between 3 to 5 hours from start to finish, including testing and demonstrating how to use the app."
            }
          },
          {
            "@type": "Question",
            "name": "Which brands of EV chargers do you install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are experienced in installing all major leading brands including Zappi, Pod Point, Ohme, and Tesla Wall Connectors."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="EV Charger Installation Essex | Home & Commercial | Parker"
        description="Looking for professional EV charger installers in Essex? Parker Electrical Solutions provides smart, safe electric vehicle charging points for homes and businesses."
        keywords="ev charger installation essex, electric vehicle charger essex, home ev charger installer essex, commercial ev charging essex"
        canonical="/ev-charging-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">EV Charger Installation Essex</h1>
                <p className="text-xl text-brand-orange font-semibold">Smart Electric Vehicle Charging for Homes & Businesses</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                As the transition to electric vehicles accelerates, having a reliable, fast, and smart charging point at your property has never been more important. Relying on a standard 3-pin plug is slow and potentially dangerous over long periods. Parker Electrical Solutions is your trusted local expert for <strong>EV charger installations in Essex</strong>, providing end-to-end solutions for both residential homeowners and commercial fleets.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-deep">Why Install a Dedicated EV Charger?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <BatteryCharging className="text-brand-orange shrink-0" />
                      <span><strong>Faster Charging:</strong> A dedicated 7kW home charger is up to 3x faster than a standard plug.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Leaf className="text-brand-orange shrink-0" />
                      <span><strong>Smart Tariffs:</strong> Smart chargers allow you to schedule charging overnight when electricity rates are lowest.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-orange shrink-0" />
                      <span><strong>Safety First:</strong> Built-in earthing and load balancing prevents your home's electrical system from overloading.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Home & Commercial Solutions</h2>
              <p className="mb-6">
                Whether you've just purchased your first electric car or you are managing a fleet of electric vans for your business, we can help:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-xl mb-2 text-brand-deep">Domestic EV Charging</h3>
                  <p className="text-sm">We assess your home's incoming supply and neatly install a sleek, modern charger on your driveway or in your garage. We'll show you exactly how to use the app to track your energy usage.</p>
                </div>
                <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-xl mb-2 text-brand-deep">Commercial EV Charging</h3>
                  <p className="text-sm">We provide scalable solutions for office car parks, retail spaces, and industrial estates, including twin chargers and heavy-duty three-phase 22kW charging points.</p>
                </div>
              </div>
              
              <p className="mb-10">
                Our NICEIC approved installers work across Essex, ensuring that your EV charger is installed safely, legally, and beautifully. We handle all the necessary load checks and DNO (Distribution Network Operator) notifications on your behalf.
              </p>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How much does it cost to install an EV charger at home in Essex?</h3>
                    <p className="text-gray-700">The cost typically ranges between £800 and £1,200 including the charger unit and standard installation. Costs can vary depending on cable routing and your current electrical setup.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Do I need a new consumer unit to install an EV charger?</h3>
                    <p className="text-gray-700">Not necessarily. If your current consumer unit has spare capacity and meets current safety standards, we can connect to it. If not, we may need to install a separate mini consumer unit just for the charger.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How long does an EV charger installation take?</h3>
                    <p className="text-gray-700">A standard home EV charger installation usually takes between 3 to 5 hours from start to finish, including testing and demonstrating how to use the app.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Which brands of EV chargers do you install?</h3>
                    <p className="text-gray-700">We are experienced in installing all major leading brands including Zappi, Pod Point, Ohme, and Tesla Wall Connectors.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Charge at Home?</h3>
                <p className="mb-8 text-white/80">Contact Parker Electrical Solutions for expert advice and a free installation quote.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RouterLink to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
                    Get an EV Quote
                  </RouterLink>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
                    <Phone size={20} /> Call Us Today
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> DNO Notification Handled</span>
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

export default EVChargingEssexPage;
