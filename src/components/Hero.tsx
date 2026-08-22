import React from 'react';
import { Star, Phone, Calendar, ShieldCheck, MapPin, Truck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center border-b border-white/10">
      {/* Background Image with Optical Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnxz00GljZVB7EzYxGCZQ2kBieNbghYl-0lFEUuepVhva55MVNJri06fr-QC5fxAGMSRpQwFADlMiLrKpYEokKIA71Cls_KjiLNQYGLFb7YxEYa8eHbnP2JPXTeitkk4mD9hkqi=w1600-h900-k-no"
          alt="FERS Auto Repair facility in Lyons, IL"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 scale-105 transform filter contrast-125"
        />
        {/* Layered Gradient for Optimal Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0A0A0A]/95 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
      </div>

      {/* Decorative Automotive Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            {/* Expert Mechanics Tag & Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block px-3 py-1 bg-[#E63946] text-white text-[10px] font-black uppercase tracking-widest rounded-sm">
                Expert Mechanics in Lyons, IL
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center text-[#E63946]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white tracking-tight">4.7 Rating</span>
                <span className="text-white/40 text-xs">(70+ Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-white uppercase leading-[0.92]">
                Reliable Auto <br />
                <span className="text-[#E63946]">Repair & Maintenance</span>
              </h1>
              <p className="text-white/60 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
                Honest repairs, reasonable prices, and free diagnostics with repair. We treat your vehicle as if it were our own, with transparent quoting and warranty-backed parts.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Honest Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Free Diagnostics*</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Same-Day Service</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                id="hero-book-cta-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-[#E63946] hover:text-white transition-all shadow-xl rounded-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="hero-call-cta-btn"
                href={SHOP_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest border border-white/15 hover:border-white/40 shadow-lg transition-all rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#E63946]" />
                <span>Call {SHOP_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Location Subtext */}
            <div className="flex items-center gap-2 text-xs text-white/40 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
              <span>{SHOP_INFO.address}</span>
            </div>
          </div>

          {/* Right Column: Emergency & Quick Action Card */}
          <div className="lg:col-span-4">
            <div className="rounded-sm bg-zinc-950/90 border border-white/10 p-6 sm:p-7 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center text-[#E63946]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-sm uppercase tracking-tight">Fast Diagnostics</h3>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Lyons & Chicagoland</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest bg-[#E63946]/20 text-[#E63946] border border-[#E63946]/40 animate-pulse">
                  Available
                </span>
              </div>

              <div className="space-y-2 text-xs text-white/70 leading-relaxed">
                <p className="font-bold text-white">Check engine light on or strange noises?</p>
                <p className="text-white/50">
                  Stop by or call us for an accurate diagnostic to get your vehicle safely back on the road.
                </p>
              </div>

              <a
                id="hero-emergency-dispatch-btn"
                href={SHOP_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-sm bg-[#E63946] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop: (708) 853-7119</span>
              </a>

              {/* Shop Hours Quick Glance */}
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-white/50">
                  <span>Shop Hours:</span>
                  <span className="font-semibold text-white/80">Mon–Fri 9AM–6PM</span>
                </div>
                <div className="flex justify-between items-center text-white/50">
                  <span>Saturday:</span>
                  <span className="font-semibold text-white/80">9AM–3PM</span>
                </div>
                <div className="flex justify-between items-center text-white/50">
                  <span>Sunday:</span>
                  <span className="font-bold text-[#E63946]">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
