import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar, Shield, Wrench, ChevronRight } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Inquiry', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div id="top-utility-bar" className="bg-[#0A0A0A] text-white/70 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a
              id="top-address-link"
              href={SHOP_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#E63946] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none text-white/80">{SHOP_INFO.address}</span>
            </a>

            <div id="top-hours-badge" className="hidden md:flex items-center gap-1.5 text-white/50">
              <Clock className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
              <span>Mon–Fri: 9AM–6PM | Sat: 9AM–3PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/90 font-mono text-[11px] uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse"></span>
              Expert Repair
            </span>
            <a
              id="top-phone-link"
              href={SHOP_INFO.phoneTel}
              className="flex items-center gap-1.5 text-[#E63946] font-bold hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{SHOP_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        id="main-nav-container"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-[#0A0A0A] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 bg-[#E63946] flex items-center justify-center rounded-sm rotate-45 shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform duration-200">
              <div className="-rotate-45 font-black text-xl italic text-white select-none">F</div>
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-black tracking-tighter uppercase text-white font-sans">Fers Auto Repair</h1>
              <p className="text-[10px] text-[#E63946] font-bold tracking-[0.2em] uppercase">Lyons, IL</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-widest text-white/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#E63946] transition-colors py-1 relative"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call-To-Action & Emergency Call */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right hidden xl:block mr-2">
              <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Contact Shop</p>
              <a href={SHOP_INFO.phoneTel} className="text-sm font-bold text-[#E63946] tracking-tight hover:text-white transition-colors">
                {SHOP_INFO.phoneDisplay}
              </a>
            </div>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-[#E63946] hover:text-white transition-all shadow-md rounded-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-sm bg-zinc-900 text-white/80 hover:text-white hover:bg-zinc-800 focus:outline-none border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-drawer" className="lg:hidden bg-[#0A0A0A] border-t border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#E63946] hover:bg-white/5 rounded-sm transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-white/30" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                id="mobile-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-white hover:bg-[#E63946] text-black hover:text-white font-black text-xs uppercase tracking-widest transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="mobile-call-btn"
                href={SHOP_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-[#E63946] text-white font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (708) 853-7119</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
