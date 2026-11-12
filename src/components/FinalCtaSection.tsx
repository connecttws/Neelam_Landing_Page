"use client";

import { motion } from "framer-motion";
import { 
  CalendarCheck, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Flame
} from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export default function FinalCtaSection({ onOpenBooking }: FinalCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fdfbf7] via-emerald-50/40 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 blur-3xl pointer-events-none -z-10 rounded-full"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-secondary via-[#053d2e] to-teal-950 text-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-14 shadow-2xl border-4 border-white overflow-hidden text-center"
        >
          {/* Subtle Grid Accent in Card */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

          {/* Scarcity Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 text-red-200 px-4 py-1.5 text-xs sm:text-sm font-bold border border-red-500/30 mb-6 shadow-xs animate-pulse">
            <Flame className="w-4 h-4 text-red-400 fill-red-400" />
            <span>Only 10 free consultation slots this week</span>
          </div>

          {/* Urgent Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight max-w-3xl mx-auto">
            Your HbA1c Won’t Fix Itself.{" "}
            <span className="text-emerald-300 block sm:inline">Start Today.</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-emerald-100/85 max-w-2xl mx-auto leading-relaxed">
            Every week you wait is another week your organs stay exposed to high blood sugar. Get a tailored, science-backed roadmap built for your everyday food and lifestyle.
          </p>

          {/* 3 Quick Confidence Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-200 font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>100% Free Initial Session</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>No Starvation or Extreme Diets</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Conducted Online via WhatsApp/Call</span>
            </div>
          </div>

          {/* Big High-Converting CTA */}
          <div className="mt-9 sm:mt-11">
            <button
              onClick={onOpenBooking}
              type="button"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-primary hover:bg-emerald-400 px-9 sm:px-12 py-4 sm:py-5 text-lg sm:text-2xl font-extrabold text-white shadow-2xl shadow-primary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-primary/60 active:translate-y-0 cursor-pointer"
            >
              <CalendarCheck className="w-6 h-6 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 ml-1 text-emerald-200 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <p className="mt-4 text-xs text-emerald-200/60 font-medium">
            Slots are allocated on a first-come, first-served basis. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
