import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Wrench, 
  CircleDot, 
  Truck, 
  ShieldAlert, 
  Cpu, 
  Droplets, 
  ThermometerSnowflake, 
  Cog, 
  Check, 
  Clock, 
  Search, 
  ArrowRight,
  Sparkles,
  Info,
  Zap,
  Settings
} from 'lucide-react';
import { SERVICES_LIST } from '../data/shopData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-[#E63946]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#E63946]" />;
      case 'CircleDot': return <CircleDot className="w-5 h-5 text-[#E63946]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#E63946]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#E63946]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#E63946]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#E63946]" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-5 h-5 text-[#E63946]" />;
      case 'Cog': return <Cog className="w-5 h-5 text-[#E63946]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#E63946]" />;
      case 'Settings': return <Settings className="w-5 h-5 text-[#E63946]" />;
      default: return <Wrench className="w-5 h-5 text-[#E63946]" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'mechanical', label: 'Mechanical & Suspension' },
    { id: 'tires', label: 'Tires & Wheels' },
    { id: 'diagnostics', label: 'Engine Diagnostics' },
    { id: 'maintenance', label: 'Routine Maintenance' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((s) => {
      const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
      const matchesQuery = 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-[#0A0A0A] text-[#F5F5F5] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em]">
            Comprehensive Auto Care
          </p>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
            Professional Auto Repair
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            From emergency axle breakdowns and custom exhaust repairs to brand new tire installations and computer engine diagnostics, our technicians keep your vehicle operating at peak performance.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === cat.id
                    ? 'bg-[#E63946] text-white shadow-md'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#E63946] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/40 hover:text-white uppercase font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-sm border border-white/10">
            <Info className="w-10 h-10 text-white/40 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1 uppercase tracking-tight">No services found</h3>
            <p className="text-xs text-white/50 mb-4">Try searching for different keywords or reset the filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-sm bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#E63946] hover:text-white transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const itemNum = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="group flex flex-col justify-between rounded-sm bg-zinc-950/80 border border-white/10 hover:border-[#E63946]/60 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                >
                  <div className="space-y-4">
                    {/* Number & Popular Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/40 font-mono font-bold">{itemNum}</span>
                        <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                          {getServiceIcon(service.iconName)}
                        </div>
                      </div>
                      {service.isPopular && (
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest bg-[#E63946]/20 text-[#E63946] border border-[#E63946]/40">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#E63946] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-white/50 mt-1.5 line-clamp-2 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="pt-2 space-y-1.5 border-t border-white/10">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/70">
                          <Check className="w-3.5 h-3.5 text-[#E63946] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Turnaround & CTA */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#E63946]" />
                      <span>{service.estimatedTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onSelectService(service.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-widest bg-white hover:bg-[#E63946] text-black hover:text-white transition-all shadow-sm"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Interactive Service Detail Modal */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-lg rounded-sm bg-[#0A0A0A] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center">
                    {getServiceIcon(activeModalService.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">{activeModalService.title}</h3>
                    <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-widest">
                      {activeModalService.category} Service
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="p-1.5 rounded-sm bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-white/70">
                <p className="leading-relaxed">{activeModalService.fullDesc}</p>

                <div className="rounded-sm bg-zinc-950 p-4 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">What's Included:</h4>
                  <ul className="space-y-1.5">
                    {activeModalService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-white/50 bg-white/5 p-3 rounded-sm border border-white/10">
                  <span>Typical Turnaround:</span>
                  <span className="font-bold text-white font-mono">{activeModalService.estimatedTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = activeModalService.id;
                    setActiveModalService(null);
                    onSelectService(id);
                  }}
                  className="px-5 py-2.5 rounded-sm bg-[#E63946] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest shadow-lg transition-colors"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
