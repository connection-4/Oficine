import React from 'react';
import { Star, Award, Truck, ShieldCheck, Clock, CheckCircle2, ThumbsUp, Wrench } from 'lucide-react';
import { WHY_CHOOSE_US, SHOP_INFO } from '../data/shopData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star': return <Star className="w-5 h-5 text-[#E63946]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#E63946]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#E63946]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#E63946]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#E63946]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#E63946]" />;
      default: return <Wrench className="w-5 h-5 text-[#E63946]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em]">
            The FERS Difference
          </p>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
            Why Drivers Across Lyons Trust FERS
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            We know finding a trustworthy mechanic can be difficult. That's why Jay and the team at FERS operate with complete transparency, reliable craftsmanship, and fair local prices.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const itemNum = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="rounded-sm bg-zinc-950/80 border border-white/10 p-7 hover:border-[#E63946]/60 transition-all duration-200 hover:-translate-y-0.5 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-white/40">{itemNum}</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#E63946] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Stat Banner */}
        <div className="mt-14 rounded-sm bg-black/80 border border-white/10 p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#E63946] font-mono">4.7 ★</div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1.5">Google Rating</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white font-mono">70+</div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1.5">Customer Reviews</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#E63946] font-mono">24/7</div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1.5">Key Drop-box</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white font-mono">100%</div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1.5">Written Estimates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
