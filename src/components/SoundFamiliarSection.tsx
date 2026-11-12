"use client";

import { motion } from "framer-motion";
import { 
  Coffee, 
  Pill, 
  CalendarX, 
  HeartCrack, 
  CalendarCheck, 
  AlertCircle,
  ArrowRight
} from "lucide-react";

interface SoundFamiliarSectionProps {
  onOpenBooking: () => void;
}

const painPoints = [
  {
    icon: Coffee,
    badge: "The Frustration",
    title: "Sacrificing Everything With Zero Results",
    description: "You gave up sweets and cut the sugar in your tea, but the number won’t budge.",
    accent: "from-amber-500/10 to-transparent",
    border: "border-amber-200/80",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    icon: Pill,
    badge: "The Dosage Spiral",
    title: "More Pills, Same High HbA1c",
    description: "Your medicines keep increasing, but your report stays the same.",
    accent: "from-blue-500/10 to-transparent",
    border: "border-blue-200/80",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    icon: CalendarX,
    badge: "The Unsustainable Diet",
    title: "Crash Diets That Never Last",
    description: "You start a diet chart, and by week two it’s over.",
    accent: "from-emerald-500/10 to-transparent",
    border: "border-emerald-200/80",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: HeartCrack,
    badge: "The Silent Fear",
    title: "Long-Term Organ Health Anxiety",
    description: "You’re quietly worried about what this means for your kidneys, eyes and heart.",
    accent: "from-red-500/10 to-transparent",
    border: "border-red-200/80",
    badgeColor: "bg-red-100 text-red-800",
  },
];

export default function SoundFamiliarSection({ onOpenBooking }: SoundFamiliarSectionProps) {
  return (
    <section id="sound-familiar" className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100/90 text-red-700 font-bold text-xs uppercase tracking-wider mb-4 border border-red-200">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Daily Reality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary font-heading">
            Sound familiar?
          </h2>

          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto my-4"></div>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            If you have been struggling with persistent blood sugar, you are not alone. And more importantly, <strong className="text-secondary font-semibold">it is not your lack of willpower.</strong>
          </p>
        </div>

        {/* 4 Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {painPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${item.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Decorative Subtle Gradient Wash */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${item.accent} rounded-full blur-2xl -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:text-primary transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 font-heading leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5 flex items-center text-xs font-semibold text-emerald-800">
                  <span>Underlying Cause: Unaddressed Metabolic Physiology</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 max-w-4xl mx-auto bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-xl border border-emerald-700/30"
        >
          <p className="text-base sm:text-xl font-semibold leading-relaxed text-emerald-100 max-w-3xl mx-auto">
            Traditional approaches treat HbA1c as just a &ldquo;number to suppress.&rdquo; But when you understand how your specific physiology reacts, the number naturally begins to drop.
          </p>
        </motion.div>

        {/* Section CTA Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            onClick={onOpenBooking}
            type="button"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-emerald-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/40 active:translate-y-0 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
