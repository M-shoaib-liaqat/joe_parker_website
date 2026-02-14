
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Phone, ShieldCheck } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, getIcon, GALLERY_IMAGES, GalleryImage } from '../constants';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" />;
  }

  // Choose hero image. prefer explicit field on service, otherwise pick from gallery
  const getServiceImage = (serviceId: string) => {
    const svc = SERVICES.find(s => s.id === serviceId);
    if (svc && svc.heroImage) {
      return svc.heroImage;
    }

    // fallback to first gallery image matching category
    const mapCat: Record<string, string> = {
      eicr: 'Domestic',
      emergency: 'Domestic',
      domestic: 'Domestic',
      commercial: 'Commercial',
      ev: 'Commercial',
      rewiring: 'Domestic'
    };
    let cat = mapCat[serviceId] || 'Domestic';
    let imgs = GALLERY_IMAGES.filter(img => img.category === cat);
    if (serviceId === 'emergency') {
      imgs = GALLERY_IMAGES.filter(img => img.category === 'Domestic' || img.category === 'Commercial');
    }
    return imgs.length > 0 ? imgs[0].url : '/assets/logo/logo.png';
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="text-white/60 hover:text-white flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative mb-8 lg:mb-0">
               <div className="absolute inset-0 bg-brand-electric rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-20"></div>
               <img src={getServiceImage(service.id)} className="rounded-3xl shadow-2xl h-[450px] w-full object-cover" alt={service.title} />
            </div>
            <div className="space-y-6">
              <div className="bg-brand-electric w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-electric/20">
                {getIcon(service.icon)}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 max-w-xl">
                {service.longDescription}
              </p>
              <p className="text-lg text-white/80 max-w-xl">
                Proudly serving all areas of Essex as well as London with every job.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3">
                  <Phone /> Call for Service
                </a>
                <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-deep">What's Included in our {service.title}</h2>
                <p className="text-lg text-gray-600">
                  Our team of NICEIC-approved electricians provide thorough, safe, and professional {service.title.toLowerCase()} across Essex and London. We pride ourselves on transparent pricing and high-quality workmanship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-brand-light p-6 rounded-xl border border-gray-100">
                      <CheckCircle2 className="text-brand-success shrink-0" size={28} />
                      <span className="font-bold text-brand-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 bg-brand-dark text-white p-10 rounded-3xl">
                <h3 className="text-2xl font-bold">Why Choose Us for this Service?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-brand-electric mt-1 shrink-0" />
                    <p><strong>NICEIC Approved:</strong> Fully certified work that meets all current UK building regulations and safety standards.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-brand-electric mt-1 shrink-0" />
                    <p><strong>Transparent Pricing:</strong> Clear, competitive quotes with no hidden fees or surprise costs.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-brand-electric mt-1 shrink-0" />
                    <p><strong>Expert Knowledge:</strong> 10+ years of experience handling specific {service.title.toLowerCase()} projects.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Need Emergency Help?</h3>
                <p className="text-gray-600 mb-8">
                  Available 24/7 for electrical emergencies. Rapid response across all Essex areas.
                </p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block bg-brand-orange text-white text-center py-4 rounded-xl font-bold text-xl shadow-lg shadow-orange-200">
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-center mt-4 text-sm font-bold text-brand-electric">Average Response: Under 60 Mins</p>
              </div>

              <div className="p-8 border-2 border-brand-light rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Other Services</h3>
                <div className="space-y-3">
                  {SERVICES.filter(s => s.id !== service.id).map(s => (
                    <Link key={s.id} to={`/service/${s.slug}`} className="block p-3 rounded-lg hover:bg-brand-light font-semibold text-gray-600 transition-colors">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
