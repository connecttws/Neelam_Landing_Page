"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  CalendarCheck, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  Activity, 
  Clock,
  Sparkles
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hba1c: "7.5 - 8.5",
    preferredTime: "Morning (9 AM - 12 PM)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Allow CRM lead tracker to capture form inputs before resetting
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      hba1c: "7.5 - 8.5",
      preferredTime: "Morning (9 AM - 12 PM)",
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-emerald-900/10 overflow-hidden transition-all duration-300 max-h-[95vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-secondary to-teal-950 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 mb-2">
            100% Free Consultation
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
            Book Your Free Consultation
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">
            Personalised Diabetes &amp; HbA1c Guidance with Dt. Neelam
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-white">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-gray-200 focus:border-primary focus:bg-white focus:outline-none rounded-xl text-sm text-foreground transition"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-gray-200 focus:border-primary focus:bg-white focus:outline-none rounded-xl text-sm text-foreground transition"
                  />
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  We will contact you via WhatsApp/Call to confirm your slot.
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-gray-200 focus:border-primary focus:bg-white focus:outline-none rounded-xl text-sm text-foreground transition"
                  />
                </div>
              </div>

              {/* Current HbA1c Range */}
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Your Current HbA1c Level *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <select
                    name="hba1c_level"
                    id="hba1c_level"
                    value={formData.hba1c}
                    onChange={(e) =>
                      setFormData({ ...formData, hba1c: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-gray-200 focus:border-primary focus:bg-white focus:outline-none rounded-xl text-sm text-foreground transition"
                  >
                    <option value="7.5 - 8.5">7.5 to 8.5 (Elevated)</option>
                    <option value="8.5 - 10.0">8.5 to 10.0 (High)</option>
                    <option value="10.0+">Above 10.0 (Very High)</option>
                    <option value="Not Sure">Not sure / Need advice</option>
                  </select>
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Preferred Consultation Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    name="preferred_time"
                    id="preferred_time"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-gray-200 focus:border-primary focus:bg-white focus:outline-none rounded-xl text-sm text-foreground transition"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-primary hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <CalendarCheck className="w-5 h-5 text-emerald-200" />
                  <span>
                    {isSubmitting ? "Locking Your Slot..." : "Confirm Free Consultation"}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-foreground/60 pt-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero spam &bull; 100% confidential &bull; Online consultation</span>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-primary mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-extrabold text-secondary font-heading">
                Consultation Request Received!
              </h4>

              <p className="text-sm sm:text-base text-foreground/80 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-secondary">{formData.name}</strong>. Dt. Neelam&rsquo;s team will reach out via WhatsApp at <strong className="text-secondary">{formData.phone}</strong> shortly to confirm your consultation schedule.
              </p>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 text-left space-y-1.5 max-w-sm mx-auto">
                <div className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>What happens next?</span>
                </div>
                <p>1. Keep your recent blood reports handy.</p>
                <p>2. We will review your diet routine and physiology triggers during the call.</p>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-secondary text-white text-xs font-bold hover:bg-emerald-800 transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
