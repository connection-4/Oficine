import React from 'react';
import { Wrench, Phone, MapPin, Clock, Star, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { SHOP_INFO, SERVICES_LIST } from '../data/shopData';

interface FooterProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white/50 text-xs border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#E63946] flex items-center justify-center text-white font-black">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black italic tracking-tighter text-white font-mono">FERS</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E63946] bg-[#E63946]/10 px-2 py-0.5 rounded-sm border border-[#E63946]/30">
                  Lyons, IL
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              Providing trustworthy automotive repair, custom exhaust welding, axle & suspension overhauls, tire replacement, and reliable service across Lyons, Brookfield, Riverside, and neighboring Chicagoland communities.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/70">
              <div className="flex items-center text-[#E63946]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
                ))}
              </div>
              <span className="font-bold text-white">4.7 / 5.0</span>
              <span className="text-white/40 font-mono">(70+ Google Reviews)</span>
            </div>

            <div className="pt-2">
              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E63946] hover:text-white font-bold uppercase tracking-wider transition-colors"
              >
                <span>Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Repair Services', href: '#services' },
                { name: 'Service Inquiry', href: '#estimator' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Google Reviews', href: '#reviews' },
                { name: 'Shop Gallery', href: '#gallery' },
                { name: 'Location & Hours', href: '#location' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/50 hover:text-[#E63946] transition-colors uppercase tracking-wider text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest">Core Services</h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="text-left text-white/50 hover:text-[#E63946] transition-colors text-[11px] uppercase tracking-wide cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest">Shop Contact</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0 mt-0.5" />
                <span className="text-white/70">{SHOP_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
                <a
                  href={SHOP_INFO.phoneTel}
                  className="font-bold text-white hover:text-[#E63946] transition-colors"
                >
                  {SHOP_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#E63946] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 font-medium">Mon–Fri: 9:00 AM – 6:00 PM</p>
                  <p className="text-white/50">Sat: 9:00 AM – 3:00 PM</p>
                  <p className="text-[#E63946] font-bold mt-1 text-[11px]">Secure Drop-box for after-hours</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-sm bg-[#E63946] hover:bg-[#E63946]/90 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
              >
                Schedule Service Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black py-6 text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} FERS Auto Repair. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/40 text-[11px] font-mono">
            <span>Lyons, Illinois</span>
            <span>•</span>
            <span>Plus Code: {SHOP_INFO.plusCode}</span>
            <span>•</span>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#E63946] uppercase font-bold tracking-wider">
              Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
