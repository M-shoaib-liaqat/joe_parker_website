
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Users, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Parker Electrical Solutions | NICEIC Approved Electrician Essex",
    "description": "Learn about Parker Electrical Solutions, a family-run NICEIC approved electrical contractor serving Essex and London since 2014. Meet Joe Parker and our commitment to quality electrical services.",
    "url": "https://www.parkerelectricalsolutions.uk/about",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Parker Electrical Solutions Ltd",
      "founder": {
        "@type": "Person",
        "name": "Joe Parker",
        "jobTitle": "Lead Electrician"
      },
      "foundingDate": "2014",
      "description": "Family-run NICEIC approved electrical contractor specializing in domestic and commercial electrical services across Essex and London"
    }
  };

  return (
    <>
      <SEO
        title="About Parker Electrical Solutions | NICEIC Approved Electrician Essex"
        description="Learn about Parker Electrical Solutions, a family-run NICEIC approved electrical contractor serving Essex and London since 2014. Meet Joe Parker and our commitment to quality electrical services."
        keywords="about Parker Electrical Solutions, NICEIC approved electrician Essex, Joe Parker electrician, family run electrician Harlow, electrical contractor Essex, electrical services London"
        canonical="/about"
        structuredData={aboutStructuredData}
      />
      <div className="bg-white">
      <section className="bg-brand-deep py-32 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">About Parker Electrical</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A family-run electrical contracting business serving Essex and London with excellence since {BUSINESS_INFO.established}.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-deep">Our Commitment to Quality</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by lead electrician Joe Parker, Parker Electrical Solutions was established in 2014 with a simple mission: to provide high-quality, safe, and reliable electrical services to our local Essex and London community. As a NICEIC approved contractor, we maintain the highest industry standards for electrical safety and workmanship.

                Over the past decade, we have grown from a small domestic electrical service into a comprehensive electrical contracting business serving both residential and commercial clients. Our team combines traditional electrical expertise with modern installation techniques, ensuring every project meets current building regulations and safety standards.

                Joe Parker brings over 15 years of hands-on electrical experience to every project, having qualified as an electrician in 2008 and achieving NICEIC approval in 2012. Our family-run approach means you deal directly with experienced professionals who understand the importance of clear communication and reliable service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today we offer a full range of <Link to="/electrical-services-essex" className="text-brand-electric font-semibold hover:underline">electrical services across Essex</Link>, and work as trusted <Link to="/electrical-contractors-essex" className="text-brand-electric font-semibold hover:underline">electrical contractors for commercial clients</Link> throughout the region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">10+ Years</h4>
                  <p className="text-gray-500">Industry experience across all sectors.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">100%</h4>
                  <p className="text-gray-500">NICEIC compliance and safety record.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">24/7</h4>
                  <p className="text-gray-500">Support for all local emergencies.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-brand-electric">Family-Run</h4>
                  <p className="text-gray-500">Personal service you can trust.</p>
                </div>
              </div>
            </div>
            <img
              src="/assets/logo/logo.png"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-contain bg-white p-8"
              alt="Joe Parker Electrical logo"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-deep">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Shield /></div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-500">Honest advice and transparent pricing on every job.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Award /></div>
              <h3 className="text-xl font-bold">Safety</h3>
              <p className="text-gray-500">Rigorous testing to ensure your home is fully compliant.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Users /></div>
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-500">We treat your property with the respect it deserves.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="bg-brand-deep text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto"><Clock /></div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500">Showing up on time and delivering as promised.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to work with a trusted Essex electrician?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact Parker Electrical Solutions today for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg">
              Get Your Free Quote
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
              Call Us Now
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC Approved</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Established 2014</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-success" size={18} /> Fully Insured</span>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;
