import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/shopData';
import { GalleryPhoto } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'shop', label: 'Shop Bays & Equipment' },
    { id: 'repairs', label: 'Mechanical & Engine Work' },
    { id: 'exterior', label: 'Exterior & Location' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em]">
            Facility & Workmanship
          </p>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
            Inside Our Lyons Facility
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Equipped with modern hydraulic lift bays, electronic diagnostic scanners, precision tire mounting machines, and specialized mechanical tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#E63946] text-white shadow-md'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative h-64 sm:h-72 rounded-sm overflow-hidden bg-zinc-950 border border-white/10 cursor-pointer shadow-lg hover:border-[#E63946]/60 transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest bg-black/80 text-[#E63946] border border-white/10 backdrop-blur-md">
                  {photo.category}
                </span>
              </div>

              {/* Zoom Icon on Hover */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-7 h-7 rounded-sm bg-[#E63946] text-white flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <h4 className="font-bold text-white text-sm uppercase tracking-tight group-hover:text-[#E63946] transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-white/60 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-sm bg-white/10 text-white hover:bg-[#E63946] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-sm bg-black/80 text-white hover:bg-[#E63946] transition-colors border border-white/10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-sm bg-black/80 text-white hover:bg-[#E63946] transition-colors border border-white/10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="max-w-4xl w-full bg-[#0A0A0A] rounded-sm overflow-hidden border border-white/15 shadow-2xl">
              <div className="relative aspect-video max-h-[70vh] bg-black flex items-center justify-center">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 bg-[#0A0A0A] border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white">{activePhoto.title}</h3>
                  <span className="text-[10px] font-black text-[#E63946] uppercase tracking-widest bg-[#E63946]/10 border border-[#E63946]/30 px-2.5 py-1 rounded-sm">
                    {activePhoto.category}
                  </span>
                </div>
                <p className="text-xs text-white/50">{activePhoto.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
