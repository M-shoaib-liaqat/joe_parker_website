import React from 'react';
import { Phone, CheckCircle2, FileCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import { Link as RouterLink } from 'react-router-dom';

const EICRCertificateEssexPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "EICR Certificates in Essex",
        "serviceType": "Electrical Installation Condition Report (EICR)",
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
        "description": "NICEIC approved EICR certificates for landlords, homeowners, and businesses across Essex."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an EICR certificate cost in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of an EICR certificate depends on the property size. Prices generally start from £150 for a small flat and increase based on the number of circuits. Contact us for a free, exact quote."
            }
          },
          {
            "@type": "Question",
            "name": "Are EICR certificates legally required for landlords in Essex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under UK law, private landlords must have the electrical installations in their rental properties inspected and tested by a qualified person every 5 years."
            }
          },
          {
            "@type": "Question",
            "name": "How long does an EICR test take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An EICR inspection usually takes between 3 to 4 hours depending on the size of the property and the complexity of the electrical system."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my property fails the EICR test?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If faults are found, your report will be marked as 'Unsatisfactory'. We will provide a detailed breakdown of the necessary remedial work and a quote to fix the issues and issue a 'Satisfactory' certificate."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="EICR Certificate Essex | Landlord Safety Checks | Parker Electrical"
        description="Need an EICR certificate in Essex? Our NICEIC-approved electricians provide fast, reliable Electrical Installation Condition Reports for landlords and homeowners."
        keywords="eicr certificate essex, electrical safety certificate essex, landlord electrical certificate essex, eicr test essex"
        canonical="/eicr-certificate-essex"
        structuredData={structuredData}
      />
      
      <div className="bg-brand-light py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-deep text-white p-10 text-center relative">
              <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4">EICR Certificates in Essex</h1>
                <p className="text-xl text-brand-orange font-semibold">Fast, Compliant Landlord Safety Checks by NICEIC Electricians</p>
              </div>
            </div>

            <div className="p-10 text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                Ensuring your property's electrical infrastructure is safe and legally compliant is a critical responsibility. Whether you are a private landlord renting out a property, a business owner safeguarding your employees, or a homeowner preparing to sell, getting a professional <strong>Electrical Installation Condition Report (EICR) in Essex</strong> is essential. At Parker Electrical Solutions, our NICEIC-approved electricians deliver thorough, efficient, and fully certified EICR testing across the county.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">What is an EICR and Why Do You Need It?</h2>
              <p className="mb-6">
                An EICR is an in-depth inspection of your property's internal wiring, fuse board (consumer unit), and electrical accessories. The purpose is to identify any deterioration, damage, or hidden hazards that could result in electric shocks or fires. Under the current UK legislation, all private landlords are legally required to have an EICR conducted at least every 5 years or at the change of a tenancy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <FileCheck className="text-brand-electric w-10 h-10 mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-brand-deep">For Landlords</h3>
                  <p className="text-sm">Stay legally compliant with the latest Private Rented Sector regulations. Protect your tenants and avoid heavy fines with our detailed reports.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <FileCheck className="text-brand-electric w-10 h-10 mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-brand-deep">For Homeowners</h3>
                  <p className="text-sm">Identify hidden electrical faults before buying or selling a home, or simply gain peace of mind that your family's home is safe.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-brand-deep mt-10 mb-6">Our EICR Process in Essex</h2>
              <p className="mb-6">
                When you book an EICR test with Parker Electrical Solutions, you are guaranteed a transparent and professional service. Our process involves:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Visual Inspection:</strong> Checking the consumer unit, sockets, switches, and light fittings for visible damage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Dead Testing:</strong> Testing the continuity, insulation resistance, and polarity of the circuits while the power is off.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0 mt-1" />
                  <span><strong>Live Testing:</strong> Checking that the system responds correctly under fault conditions, ensuring that RCDs trip within the required time limits.</span>
                </li>
              </ul>
              
              <p className="mb-10">
                We cover all major areas, so whether you need an <RouterLink to="/electrician-chelmsford" className="text-brand-electric font-bold underline">electrician in Chelmsford</RouterLink>, Basildon, Harlow, or East London, we are ready to assist. If your property requires remedial work to achieve a 'Satisfactory' rating, we provide a clear, competitive quote to fix the issues promptly.
              </p>

              {/* FAQ Section */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 mb-10">
                <h2 className="text-3xl font-bold text-brand-deep mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How much does an EICR certificate cost in Essex?</h3>
                    <p className="text-gray-700">The cost of an EICR certificate depends on the property size. Prices generally start from £150 for a small flat and increase based on the number of circuits. Contact us for a free, exact quote.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">Are EICR certificates legally required for landlords in Essex?</h3>
                    <p className="text-gray-700">Yes, under UK law, private landlords must have the electrical installations in their rental properties inspected and tested by a qualified person every 5 years.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">How long does an EICR test take?</h3>
                    <p className="text-gray-700">An EICR inspection usually takes between 3 to 4 hours depending on the size of the property and the complexity of the electrical system.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-brand-deep mb-3">What happens if my property fails the EICR test?</h3>
                    <p className="text-gray-700">If faults are found, your report will be marked as 'Unsatisfactory'. We will provide a detailed breakdown of the necessary remedial work and a quote to fix the issues and issue a 'Satisfactory' certificate.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-deep text-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Book Your EICR Test Today</h3>
                <p className="mb-8 text-white/80">Contact our NICEIC approved team for a fast, free quote on your electrical safety checks.</p>
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
                  <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Trusted Local Electricians</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EICRCertificateEssexPage;
