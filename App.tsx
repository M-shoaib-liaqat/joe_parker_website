
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, ShieldCheck, Star, ChevronRight, MessageCircle, Image as ImageIcon } from 'lucide-react';
import HomePage from './pages/HomePage';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AreasPage from './pages/AreasPage';
import GalleryPage from './pages/GalleryPage';
import Chatbot from './components/Chatbot';
import { BUSINESS_INFO, SERVICES } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Areas', path: '/areas' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-deep p-2 rounded">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-tight ${scrolled ? 'text-brand-deep' : 'text-brand-deep'}`}>
              PARKER
            </span>
            <span className="text-xs font-semibold tracking-widest text-brand-electric">
              ELECTRICAL SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-semibold text-brand-dark hover:text-brand-electric transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
          >
            <Phone size={18} />
            {BUSINESS_INFO.phone}
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden p-2 text-brand-deep" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-bold text-brand-dark border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-brand-deep text-white p-4 rounded-lg font-bold flex items-center justify-center gap-3 mt-4"
          >
            <Phone /> {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-brand-electric w-8 h-8" />
            <span className="font-bold text-xl tracking-tighter">PARKER ELECTRICAL</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Professional NICEIC-approved electrical contractors serving Essex and London since {BUSINESS_INFO.established}. Family-run business committed to safety and quality.
          </p>
          <div className="flex gap-4">
             <div className="bg-white/10 p-2 rounded text-xs font-bold border border-white/20">NICEIC APPROVED</div>
             <div className="bg-white/10 p-2 rounded text-xs font-bold border border-white/20">FULLY INSURED</div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-brand-electric pb-2 inline-block">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.map(s => (
              <li key={s.id}>
                <Link to={`/service/${s.slug}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-brand-electric" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-brand-electric pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/gallery" className="text-gray-400 hover:text-white flex items-center gap-2"><ChevronRight size={14} /> Work Gallery</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white flex items-center gap-2"><ChevronRight size={14} /> About Us</Link></li>
            <li><Link to="/areas" className="text-gray-400 hover:text-white flex items-center gap-2"><ChevronRight size={14} /> Areas We Serve</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white flex items-center gap-2"><ChevronRight size={14} /> Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-brand-electric pb-2 inline-block">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="text-brand-electric shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold">Call Us</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 hover:text-white">{BUSINESS_INFO.phone}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-brand-electric shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold">Email Us</p>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-400 hover:text-white">{BUSINESS_INFO.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-brand-electric shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold">Business Hours</p>
                <p className="text-gray-400">Mon - Fri: 08:00 - 17:00</p>
                <p className="text-brand-orange font-semibold">24/7 Emergency Support</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Parker Electrical Solutions. All rights reserved. NICEIC Registered. Fully Insured.</p>
      </div>
    </footer>
  );
};

const FloatingCTA = () => (
  <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 lg:hidden">
    <a
      href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
      className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-grow pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;
