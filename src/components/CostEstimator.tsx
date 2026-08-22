import React, { useState } from 'react';
import { Calculator, Car, Truck, Clock, ShieldCheck, CheckCircle2, ChevronRight, Wrench } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

interface CostEstimatorProps {
  onOpenBooking: (serviceId?: string) => void;
}

interface EstimateOption {
  id: string;
  name: string;
  category: string;
  timeRange: string;
  serviceId: string;
  notes: string;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenBooking }) => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'truck'>('sedan');
  const [selectedService, setSelectedService] = useState<string>('diagnostics');

  const estimateOptions: Record<string, EstimateOption> = {
    diagnostics: {
      id: 'diagnostics',
      name: 'Computer Diagnostics',
      category: 'Diagnostics',
      timeRange: '30 – 45 mins',
      serviceId: 'engine-diagnostics',
      notes: 'State-of-the-art scanning for Check Engine lights, misfires, and electrical issues'
    },
    ac_repair: {
      id: 'ac_repair',
      name: 'A/C & Heating Repair',
      category: 'Maintenance',
      timeRange: '1 – 2.5 hrs',
      serviceId: 'ac-heating',
      notes: 'Includes leak detection, recharge, compressor checks, and cabin filter replacement'
    },
    electrical: {
      id: 'electrical',
      name: 'Battery & Electrical',
      category: 'Electrical',
      timeRange: '30 – 60 mins',
      serviceId: 'electrical-battery',
      notes: 'Battery replacement, alternator testing, and wiring harness repairs'
    },
    brakes: {
      id: 'brakes',
      name: 'Brake Pads & Rotors',
      category: 'Braking System',
      timeRange: '1.5 – 2 hrs',
      serviceId: 'brake-services',
      notes: 'Ceramic quiet pads, resurfaced or new vented rotors, and hydraulic flushing'
    },
    transmission: {
      id: 'transmission',
      name: 'Transmission Service',
      category: 'Mechanical',
      timeRange: '2 – 4 hrs',
      serviceId: 'transmission-clutch',
      notes: 'Fluid flushes, filter replacement, shift solenoid fixes, and clutch repairs'
    },
    oil: {
      id: 'oil',
      name: 'General Maintenance',
      category: 'Maintenance',
      timeRange: '30 mins',
      serviceId: 'oil-maintenance',
      notes: 'Full synthetic oil changes, multi-point inspections, and fluid top-offs'
    }
  };

  const currentEstimate = estimateOptions[selectedService] || estimateOptions.diagnostics;

  return (
    <section id="estimator" className="py-20 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em]">
              Service Capabilities
            </p>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
              Explore Our Service Offerings
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              At FERS Auto Repair, we provide comprehensive automotive care. Browse our core services to see typical turnaround times and directly request an appointment for your specific vehicle.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Expert Diagnostics & Honest Assessments</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>OEM-grade parts backed by local shop warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Comprehensive repairs for all makes and models</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={SHOP_INFO.phoneTel}
                className="text-xs text-white/40 hover:text-[#E63946] transition-colors"
              >
                Don't see your service listed? Call {SHOP_INFO.phoneDisplay} to inquire.
              </a>
            </div>
          </div>

          {/* Right Side Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-zinc-950/90 border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Step 1: Vehicle Type */}
              <div>
                <label className="block text-[10px] font-bold uppercase text-white/40 tracking-widest mb-2.5">
                  1. Select Vehicle Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'sedan', label: 'Sedan / Coupe', icon: Car },
                    { id: 'suv', label: 'SUV / Crossover', icon: Car },
                    { id: 'truck', label: 'Truck / Van', icon: Truck },
                  ].map((v) => {
                    const Icon = v.icon;
                    const isSelected = vehicleType === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVehicleType(v.id as any)}
                        className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-sm border text-center transition-all ${
                          isSelected
                            ? 'bg-[#E63946] border-[#E63946] text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5 mb-1.5" />
                        <span className="text-xs font-bold uppercase tracking-wider">{v.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase text-white/40 tracking-widest mb-2.5">
                  2. Select Area of Concern
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.values(estimateOptions).map((opt) => {
                    const isSelected = selectedService === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedService(opt.id)}
                        className={`p-2.5 rounded-sm border text-left text-xs uppercase tracking-wider transition-all ${
                          isSelected
                            ? 'bg-[#E63946] text-white border-[#E63946] font-bold shadow-sm'
                            : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span className="line-clamp-1 font-semibold">{opt.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Instant Calculation Summary Result */}
              <div className="rounded-sm bg-black/60 border border-white/10 p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Service Selected</span>
                    <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter text-white uppercase mt-1">
                      {currentEstimate.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Typical Duration</span>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[#E63946] justify-end font-mono mt-1">
                      <Clock className="w-4 h-4 text-[#E63946]" />
                      <span>{currentEstimate.timeRange}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-white/50 leading-relaxed">
                  <span className="font-bold text-white">Coverage includes:</span> {currentEstimate.notes}. 
                  <br />Our master technicians will provide a precise diagnostic and full repair breakdown in person.
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch">
                  <button
                    onClick={() => onOpenBooking(currentEstimate.serviceId)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-white hover:bg-[#E63946] text-black hover:text-white font-black text-xs uppercase tracking-widest transition-all shadow-md"
                  >
                    <span>Schedule Appointment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={SHOP_INFO.phoneTel}
                    className="inline-flex items-center justify-center py-3 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest border border-white/15 transition-colors"
                  >
                    Call Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

