
import React, { useState, useEffect } from 'react';
import { Camera, Phone, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES, BUSINESS_INFO, GalleryImage } from '../constants';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Domestic' | 'Commercial' | 'Lighting'>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    // Find the actual index in the GALLERY_IMAGES array if we are filtered
    const actualImage = filteredImages[index];
    const originalIndex = GALLERY_IMAGES.findIndex(img => img.url === actualImage.url);
    setSelectedImageIndex(originalIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (dir: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;
    let nextIndex = dir === 'next' ? selectedImageIndex + 1 : selectedImageIndex - 1;
    if (nextIndex >= GALLERY_IMAGES.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_IMAGES.length - 1;
    setSelectedImageIndex(nextIndex);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedImageIndex]);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-brand-deep pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="bg-brand-electric/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-brand-electric/30 backdrop-blur-sm">
            <Camera size={40} className="text-brand-electric" />
          </div>
          <h1 className="text-5xl font-bold">Our Work Gallery</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Inspect our "enhanced" high-resolution portfolio of architectural lighting and technical installations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-brand-light border-b border-gray-200 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {(['All', 'Domestic', 'Commercial', 'Lighting'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all shadow-sm border ${filter === cat 
                  ? 'bg-brand-deep text-white border-brand-deep scale-105 shadow-brand-deep/20' 
                  : 'bg-white text-brand-dark border-gray-100 hover:border-brand-electric hover:bg-brand-electric/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-zoom-in border border-gray-100"
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={encodeURI(img.url)} 
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-brand-light text-brand-electric text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-deep group-hover:text-brand-electric transition-colors">{img.title}</h3>
                  {img.description && <p className="text-gray-500 text-sm mt-2 line-clamp-1">{img.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-medium">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <X size={40} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-3 rounded-full hover:bg-white/10"
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-3 rounded-full hover:bg-white/10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <img 
                src={encodeURI(GALLERY_IMAGES[selectedImageIndex].url)} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
                alt={GALLERY_IMAGES[selectedImageIndex].title}
              />
            </div>
            <div className="text-center text-white space-y-2 max-w-2xl px-4 pb-8">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">
                {GALLERY_IMAGES[selectedImageIndex].category}
              </span>
              <h2 className="text-3xl font-bold">{GALLERY_IMAGES[selectedImageIndex].title}</h2>
              <p className="text-white/60 text-lg">{GALLERY_IMAGES[selectedImageIndex].description}</p>
              <div className="pt-4 flex justify-center gap-4">
                 <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                   <Phone size={18} /> Call Joe Now
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-brand-deep text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">Impressive Results, Every Time</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready for an "enhanced" upgrade to your home's electrical systems? Get in touch for a bespoke quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-orange text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
              Get Free Quote
            </button>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white/10 hover:border-white transition-colors">
              Contact Joe Parker
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
