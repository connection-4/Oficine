import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Phone, Calendar, Truck, ArrowUp } from 'lucide-react';
import { SHOP_INFO } from './data/shopData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#E63946] selection:text-white flex flex-col">
      {/* Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Quick Contact Banner */}
        <div className="bg-[#E63946] py-3 px-4 text-white shadow-lg border-y border-red-500/20">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-sm bg-black/20 animate-pulse">
                <Calendar className="w-4 h-4 text-white" />
              </span>
              <p className="text-xs sm:text-sm font-black tracking-widest uppercase">
                Quality Auto Repair & Maintenance in Lyons & Chicagoland
              </p>
            </div>
            <a
              id="banner-call-btn"
              href={SHOP_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black shadow-md transition-all shrink-0 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#E63946]" />
              <span>CALL SHOP: (708) 853-7119</span>
            </a>
          </div>
        </div>

        {/* 2. Services Section */}
        <ServicesSection onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 3. Interactive Service Inquiry */}
        <CostEstimator onOpenBooking={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 4. Why Choose Us / Trust Badges */}
        <WhyChooseUs />

        {/* 5. Google Reviews & Testimonials Section */}
        <ReviewsSection />

        {/* 6. Facility & Repairs Gallery */}
        <GallerySection />

        {/* 7. Location, Live Operating Hours & Contact Form */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
      />

      {/* Floating Action Buttons for Mobile / Quick Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-[#E63946] border border-white/10 shadow-xl flex items-center justify-center transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick Call Button */}
        <a
          id="floating-call-btn"
          href={SHOP_INFO.phoneTel}
          className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#E63946] text-white shadow-xl shadow-red-600/40 hover:bg-red-700 transition-transform active:scale-95 rounded-sm"
          aria-label="Call shop"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
      </div>
    </div>
  );
}
