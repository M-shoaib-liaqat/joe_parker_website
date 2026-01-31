
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star, Shield, ArrowRight, Phone, Clock, MapPin, Award, Image as ImageIcon } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS, GALLERY_IMAGES, getIcon } from '../constants';

const Hero = () => (
  <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-brand-deep">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
        className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow brightness-110"
        alt="High-End Architectural Electrical Lighting"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/80 to-transparent"></div>
    </div>
    <div className="container mx-auto px-4  relative z-10">
      <div className="max-w-3xl space-y-8">
        {/* <div className="inline-flex items-center gap-2 bg-brand-electric/20 border border-brand-electric/30 px-4 py-8 rounded-full text-brand-electric font-bold text-sm animate-bounce-in">
          <Award size={18} />
          NICEIC APPROVED & 10+ YEARS EXPERIENCE
        </div> */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
          Architectural Electrical <span className="text-brand-electric">Specialists</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-xl">
          Enhancing homes and businesses across Essex & London with high-clarity lighting design and expert electrical engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-5 rounded-lg text-xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl hover:shadow-orange-400"
          >
            <Phone />
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <Link
            to="/gallery"
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/30 px-8 py-5 rounded-lg text-xl font-bold flex items-center justify-center gap-3 transition-all"
          >
            <ImageIcon /> Enhanced Gallery
          </Link>
        </div>
        <div className="flex flex-wrap gap-8 pt-8">
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="text-brand-success" size={28} />
            <div style={{'marginbottom': '4px'}}>
              <p className="font-bold leading-none">Fully Insured</p>
              <p className="text-sm text-gray-400">Public Liability Covered</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="text-brand-success" size={28} />
            <div>
              <p className="font-bold leading-none">Precision Quality</p>
              <p className="text-sm text-gray-400">NICEIC Standards Met</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EmergencyBanner = () => (
  <div className="bg-brand-orange py-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none skew-x-12 translate-x-1/2"></div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div className="flex items-center gap-4 text-white">
        <Clock size={48} className="animate-pulse" />
        <div>
          <h3 className="text-2xl font-bold">Electrical Emergency? Available 24/7</h3>
          <p className="text-white/80 font-semibold">Average Response Time: Under 60 Minutes</p>
        </div>
      </div>
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="bg-white text-brand-orange px-8 py-4 rounded-full text-2xl font-black shadow-xl hover:scale-105 hover:bg-brand-light transition-all"
      >
        {BUSINESS_INFO.phone}
      </a>
    </div>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="py-24 bg-brand-light">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-brand-deep uppercase tracking-tight">Our Professional Services</h2>
        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
        <p className="text-gray-600 text-lg">
          Expertly delivered NICEIC approved electrical solutions for every sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div key={s.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all group border border-gray-100 hover:-translate-y-2">
            <div className="bg-brand-light text-brand-electric w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-electric group-hover:text-white transition-all duration-500 shadow-inner">
              {getIcon(s.icon)}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-electric transition-colors">{s.title}</h3>
            <p className="text-gray-600 mb-6 line-clamp-2">
              {s.description}
            </p>
            <Link
              to={`/service/${s.slug}`}
              className="text-brand-deep font-bold flex items-center gap-2 group-hover:gap-3 transition-all underline decoration-brand-orange/30 decoration-4 underline-offset-4"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GalleryHighlights = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-brand-deep mb-4">Our "Enhanced" Projects</h2>
          <div className="w-20 h-1 bg-brand-orange mb-4"></div>
          <p className="text-gray-600 text-lg">
            A showcase of high-end lighting design, industrial board upgrades, and clean domestic installs.
          </p>
        </div>
        <Link to="/gallery" className="bg-brand-deep text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-electric transition-colors shadow-lg shadow-brand-deep/20">
          View Work Gallery <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_IMAGES.slice(0, 4).map((img, i) => (
          <div key={i} className="group relative h-[400px] overflow-hidden rounded-3xl shadow-xl border border-gray-100">
            <img 
              src={img.url} 
              className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 transition-all duration-700" 
              alt={img.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
              <h4 className="text-white font-bold text-xl mb-4">{img.title}</h4>
              <Link to="/gallery" className="text-white text-sm flex items-center gap-2 font-bold group/btn">
                View Detail <Maximize2 size={14} className="group-hover/btn:scale-125 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-brand-light relative overflow-hidden">
    <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-electric/5 rounded-full blur-3xl"></div>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10">
          <h2 className="text-4xl font-bold text-brand-deep">The Parker Difference</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Since 2014, Joe Parker has built a team that focuses on clarity and safety. We don't just fix faults; we enhance the environment of your home or business through intelligent electrical solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-brand-success/10 text-brand-success p-3 rounded-xl h-fit">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">NICEIC Approved</h4>
                <p className="text-sm text-gray-500">Industry standard certification for every project.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-brand-electric/10 text-brand-electric p-3 rounded-xl h-fit">
                <Star size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Elite Rating</h4>
                <p className="text-sm text-gray-500">Consistent 5-star feedback from Essex locals.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-brand-electric/10 rounded-3xl -rotate-2 -z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1200"
            className="rounded-3xl shadow-2xl w-full object-cover h-[500px] brightness-105"
            alt="Lead Electrician Joe Parker"
          />
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-brand-deep text-white relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold tracking-tight uppercase">Verified Client Satisfaction</h2>
        <div className="flex justify-center gap-1 text-brand-orange">
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map(r => (
          <div key={r.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-electric/10 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform"></div>
            <div className="text-brand-orange mb-4">
              <div className="flex">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-lg italic mb-6 leading-relaxed relative z-10 font-light">"{r.text}"</p>
            <div className="relative z-10 pt-4 border-t border-white/10">
              <p className="font-bold text-brand-electric">— {r.name}, {r.location}</p>
              <p className="text-sm text-white/50">{r.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <EmergencyBanner />
      <ServicesSection />
      <GalleryHighlights />
      <WhyChooseUs />
      <Testimonials />
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-5xl font-bold text-brand-deep tracking-tighter">Ready for an Enhancement?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Join hundreds of satisfied clients in Essex and London. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="bg-brand-deep text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-brand-electric transition-all shadow-xl shadow-brand-deep/20 hover:scale-105">
               Start Your Quote
             </Link>
             <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-brand-deep border-2 border-brand-deep px-12 py-5 rounded-2xl font-bold text-xl hover:bg-brand-light transition-all hover:scale-105">
               Call {BUSINESS_INFO.phone}
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal icon for gallery link
const Maximize2 = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>
  </svg>
);

export default HomePage;
