import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Car, 
  Truck, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  AlertCircle, 
  Wrench,
  ShieldCheck,
  Download
} from 'lucide-react';
import { SERVICES_LIST, SHOP_INFO } from '../data/shopData';
import { AppointmentBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState<AppointmentBooking>({
    name: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'exhaust-systems',
    vehicleYear: '2019',
    vehicleMake: '',
    vehicleModel: '',
    preferredDate: '',
    preferredTime: '09:00 AM',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  // Set default preferred date to tomorrow
  useEffect(() => {
    if (!formData.preferredDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      setFormData((prev) => ({ ...prev, preferredDate: `${yyyy}-${mm}-${dd}` }));
    }
  }, [formData.preferredDate]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.vehicleMake) return;
    const randomCode = 'FERS-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(randomCode);
    setBookingConfirmed(true);
  };

  const selectedServiceObj = SERVICES_LIST.find((s) => s.id === formData.serviceId) || SERVICES_LIST[0];

  const resetAndClose = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-sm bg-[#E63946] flex items-center justify-center text-white font-black">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-black italic uppercase tracking-tight text-white text-base">
                {bookingConfirmed ? 'Appointment Confirmed!' : 'Schedule Shop Appointment'}
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">FERS Auto Repair · Lyons, IL</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-sm bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {bookingConfirmed ? (
            /* Confirmation View */
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#E63946]/10 border border-[#E63946] text-[#E63946] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl font-black italic tracking-tight uppercase text-white">Your Service is Confirmed</h4>
                <p className="text-xs text-white/70">
                  Confirmation Code: <strong className="text-[#E63946] font-mono text-sm tracking-wider">{confirmationCode}</strong>
                </p>
                <p className="text-xs text-white/40 max-w-md mx-auto">
                  We have reserved your appointment slot. Our shop manager Jay will confirm via phone or SMS shortly.
                </p>
              </div>

              {/* Summary Card */}
              <div className="text-left rounded-sm bg-black/70 border border-white/10 p-5 space-y-3 text-xs font-mono">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase font-sans">Service:</span>
                  <span className="font-bold text-white uppercase">{selectedServiceObj.title}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase font-sans">Date & Time:</span>
                  <span className="font-bold text-[#E63946]">{formData.preferredDate} at {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase font-sans">Vehicle:</span>
                  <span className="font-bold text-white">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase font-sans">Customer:</span>
                  <span className="font-bold text-white">{formData.name} ({formData.phone})</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 pt-1 font-sans text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
                  <span>{SHOP_INFO.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={SHOP_INFO.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>Call Shop</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="flex-1 py-2.5 px-4 rounded-sm bg-[#E63946] hover:bg-[#E63946]/90 text-white font-black text-xs uppercase tracking-widest shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                  Select Primary Service *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.id} className="bg-zinc-950 text-white">
                      {s.title} ({s.estimatedTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Information */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="2019"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Make *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Toyota, Ford..."
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    placeholder="Camry, F-150..."
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-zinc-950 text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(708) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                  Describe Symptoms / Issues (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g. grinding noise when turning, exhaust rattling, check engine light flashing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-sm bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#E63946] resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-sm bg-[#E63946] hover:bg-[#E63946]/90 text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
