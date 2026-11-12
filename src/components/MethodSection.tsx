"use client";

import { motion } from "framer-motion";
import { 
  FileSearch, 
  Sparkles, 
  TrendingDown, 
  CalendarCheck, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface MethodSectionProps {
  onOpenBooking: () => void;
}

const steps = [
  {
    stepNumber: "01",
    name: "Understand",
    headline: "We study your reports, routine and eating habits.",
    details:
      "We deep-dive into your recent blood work, medical history, stress triggers, work routine, and current eating habits to identify what truly spikes your glucose.",
    icon: FileSearch,
    badge: "Step 1 &bull; Diagnosis",
  },
  {
    stepNumber: "02",
    name: "Personalise",
    headline: "You get a plan built around your own food, with no starving.",
    details:
      "No generic salads or skipping rotis. You receive a structured, enjoyable nutrition plan tailored to your household meals, culture, and exact body metabolism.",
    icon: Sparkles,
    badge: "Step 2 &bull; Action",
  },
  {
    stepNumber: "03",
    name: "Track and Adjust",
    headline: "Weekly follow-ups until your sugar moves toward the normal range.",
    details:
      "You are never left alone. Weekly WhatsApp check-ins and direct adjustments ensure steady progress until your HbA1c reaches normal numbers.",
    icon: TrendingDown,
    badge: "Step 3 &bull; Reversal",
  },
];

export default function MethodSection({ onOpenBooking }: MethodSectionProps) {
  return (
    <section id="the-method" className="py-14 sm:py-20 md:py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-700/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-300 bg-white/10 px-4 py-1 rounded-full border border-white/15 mb-3">
            Our Proven 3-Step Framework
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            THE METHOD <span className="text-emerald-400">(3 Steps)</span>
          </h2>

          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto my-4"></div>

          <p className="text-base sm:text-lg text-emerald-100/85 leading-relaxed max-w-2xl mx-auto">
            A structured, clinical physiology approach designed to bring your HbA1c back to normal without disruptions, starvation, or giving up your staple foods.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400/80 font-heading">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 text-emerald-300 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300/90 block mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                    {step.name}
                  </h3>

                  <p className="text-base font-semibold text-emerald-200 mb-4 leading-snug">
                    {step.headline}
                  </p>

                  <p className="text-sm text-white/75 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Bottom Milestone */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-emerald-300">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Clinically Guided Every Step</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Call to Action */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={onOpenBooking}
            type="button"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-emerald-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/50 active:translate-y-0 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs sm:text-sm text-emerald-200/70">
            No obligation &bull; Understand your exact physiology triggers in 20 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
