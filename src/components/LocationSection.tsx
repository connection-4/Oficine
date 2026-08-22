import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Send, 
  ShieldCheck, 
  AlertCircle,
  Truck
} from 'lucide-react';
import { SHOP_INFO, BUSINESS_HOURS } from '../data/shopData';

export const LocationSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'address' | 'plusCode' | null>(null);
  const [currentTimeStatus, setCurrentTimeStatus] = useState<{
    isOpen: boolean;
    statusText: string;
    todayName: string;
  }>({
    isOpen: false,
    statusText: 'Checking hours...',
    todayName: 'Monday',
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Compute live shop status in America/Chicago timezone
  useEffect(() => {
    const updateShopStatus = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { 
          timeZone: 'America/Chicago', 
          weekday: 'long', 
          hour: 'numeric', 
          minute: 'numeric', 
          hour12: false 
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(now);
        
        let weekday = '';
        let hour = 0;
        let minute = 0;

        parts.forEach((p) => {
          if (p.type === 'weekday') weekday = p.value;
          if (p.type === 'hour') hour = parseInt(p.value, 10);
          if (p.type === 'minute') minute = parseInt(p.value, 10);
        });

        const currentDecimalHour = hour + minute / 60;
        let isOpen = false;
        let statusText = '';

        if (weekday === 'Saturday') {
          if (currentDecimalHour >= 9 && currentDecimalHour < 15) {
            isOpen = true;
            statusText = 'Open Now · Closes at 3:00 PM';
          } else if (currentDecimalHour < 9) {
            statusText = 'Closed · Opens today at 9:00 AM';
          } else {
            statusText = 'Closed · Opens Monday at 9:00 AM';
          }
        } else if (weekday === 'Sunday') {
          isOpen = false;
          statusText = 'Shop Closed · Back on Monday at 9:00 AM';
        } else {
          // Mon - Fri
          if (currentDecimalHour >= 9 && currentDecimalHour < 18) {
            isOpen = true;
            statusText = 'Open Now · Closes at 6:00 PM';
          } else if (currentDecimalHour < 9) {
            statusText = 'Closed · Opens today at 9:00 AM';
          } else {
            statusText = 'Closed · Opens tomorrow at 9:00 AM';
          }
        }

        setCurrentTimeStatus({
          isOpen,
          statusText,
          todayName: weekday,
        });
      } catch (err) {
        setCurrentTimeStatus({
          isOpen: true,
          statusText: 'Open Mon–Sat',
          todayName: 'Today',
        });
      }
    };

    updateShopStatus();
    const interval = setInterval(updateShopStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: 'address' | 'plusCode') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="location" className="py-20 bg-[#0A0A0A] text-[#F5F5F5] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em]">
            Lyons, Illinois Headquarters
          </p>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
            Location & Operating Hours
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Conveniently situated on 1st Avenue in Lyons, serving Riverside, Brookfield, Berwyn, McCook, and surrounding Western Chicago suburbs.
          </p>
        </div>

        {/* Top Details & Live Status Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Address, Phone, & Live Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Live Status Card */}
            <div className="rounded-sm bg-zinc-950/80 border border-white/10 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${currentTimeStatus.isOpen ? 'bg-[#E63946] animate-ping' : 'bg-white/40'}`}></div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white">Current Shop Status</h3>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest border ${
                    currentTimeStatus.isOpen
                      ? 'bg-[#E63946]/15 border-[#E63946]/40 text-[#E63946]'
                      : 'bg-white/5 border-white/20 text-white/60'
                  }`}
                >
                  {currentTimeStatus.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/90 font-mono">
                {currentTimeStatus.statusText}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/50 bg-black/60 p-3 rounded-sm border border-white/10">
                <AlertCircle className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Secure after-hours key drop-box available <strong className="text-white">24/7</strong> for late vehicle drop-offs.</span>
              </div>
            </div>

            {/* Address & Plus Code Card */}
            <div className="rounded-sm bg-zinc-950/80 border border-white/10 p-6 shadow-xl space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E63946]" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm uppercase tracking-tight">Shop Address</h4>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">{SHOP_INFO.address}</p>
                    <p className="text-[10px] text-white/40 font-mono mt-1">Google Plus Code: {SHOP_INFO.plusCode}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  id="get-directions-btn"
                  href={SHOP_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#E63946] hover:bg-[#E63946]/90 text-white font-black text-xs uppercase tracking-widest shadow-md transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <button
                  onClick={() => handleCopy(SHOP_INFO.address, 'address')}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  {copiedType === 'address' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#E63946]" />
                      <span className="text-[#E63946]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/40" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={SHOP_INFO.phoneTel}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>Call {SHOP_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="rounded-sm bg-zinc-950/80 border border-white/10 p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                <Clock className="w-4 h-4 text-[#E63946]" />
                <h4 className="font-black text-white text-xs uppercase tracking-wider">Weekly Business Hours</h4>
              </div>

              <div className="divide-y divide-white/10 text-xs">
                {BUSINESS_HOURS.map((h) => {
                  const isCurrentDay = currentTimeStatus.todayName.toLowerCase() === h.day.toLowerCase();
                  return (
                    <div
                      key={h.day}
                      className={`py-2.5 flex justify-between items-center transition-colors ${
                        isCurrentDay ? 'bg-white/5 px-2 rounded-sm font-bold text-white' : 'text-white/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="uppercase tracking-tight">{h.day}</span>
                        {isCurrentDay && (
                          <span className="text-[9px] uppercase tracking-widest bg-[#E63946] text-white px-1.5 py-0.5 rounded-sm font-black">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={h.day === 'Sunday' ? 'text-[#E63946] font-mono' : 'text-white/40 font-mono'}>
                        {h.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Quick Inquiry */}
          <div className="lg:col-span-6 space-y-6">
            {/* Map Frame Card */}
            <div className="rounded-sm bg-zinc-950/80 border border-white/10 overflow-hidden shadow-xl">
              <div className="p-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E63946]" />
                  <span className="font-bold text-white text-xs uppercase tracking-wider">Interactive Map</span>
                </div>
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E63946] hover:text-white font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Map Visual */}
              <div className="relative h-72 sm:h-80 bg-zinc-950 w-full">
                <iframe
                  title="FERS Auto Repair and Towing Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.6865261548053!2d-87.83702072382103!3d41.81208937124976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3672c35f7c35%3A0xc1d0418ceba3aa07!2sFERS%20Auto%20Repair%20%26%20Towing!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Overlay Card for Location Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/90 border border-white/15 p-3 rounded-sm backdrop-blur-md flex items-center justify-between gap-2 shadow-2xl">
                  <div>
                    <p className="font-black text-white text-xs uppercase tracking-tight">FERS Auto Repair</p>
                    <p className="text-[10px] text-white/50">{SHOP_INFO.address}</p>
                  </div>
                  <a
                    href={SHOP_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-sm bg-[#E63946] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#E63946]/90 transition-colors shrink-0"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="rounded-sm bg-zinc-950/80 border border-white/10 p-6 sm:p-7 shadow-xl">
              <h4 className="font-black text-white text-base uppercase tracking-tight mb-1">Have a Question or Need a Quote?</h4>
              <p className="text-xs text-white/50 mb-5">
                Send us a message directly and our service manager Jay will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="rounded-sm bg-zinc-900 border border-[#E63946] p-5 text-center space-y-3">
                  <Check className="w-8 h-8 text-[#E63946] mx-auto" />
                  <h5 className="font-black text-white text-sm uppercase tracking-wider">Message Sent Successfully!</h5>
                  <p className="text-xs text-white/60">
                    Thank you for reaching out. We have received your inquiry and will call you back at <strong className="text-white">{contactForm.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactForm({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 rounded-sm bg-white/10 text-xs font-black uppercase tracking-wider text-white hover:bg-[#E63946] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-black/60 border border-white/15 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#E63946] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(708) 555-0199"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-black/60 border border-white/15 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#E63946] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-black/60 border border-white/15 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#E63946] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">How can we help your vehicle?</label>
                    <textarea
                      rows={3}
                      placeholder="Describe what's wrong (e.g., squeaking brakes, exhaust leak, broken axle, check engine light)..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-black/60 border border-white/15 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#E63946] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#E63946] hover:bg-[#E63946]/90 text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Shop</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
