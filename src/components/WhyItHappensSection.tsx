"use client";

import { motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  Moon, 
  Brain, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Stethoscope
} from "lucide-react";

const pillars = [
  {
    icon: UtensilsCrossed,
    title: "1. Food Reaction",
    desc: "How your gut and metabolism react to specific carbohydrates and your everyday roti.",
    accent: "bg-emerald-50 text-emerald-800 border-emerald-100",
  },
  {
    icon: Moon,
    title: "2. Sleep & Rest",
    desc: "Disrupted sleep spikes cortisol and morning fasting blood sugar, even if you ate zero sweets.",
    accent: "bg-indigo-50 text-indigo-800 border-indigo-100",
  },
  {
    icon: Brain,
    title: "3. Stress Levels",
    desc: "Mental and physical stress triggers your liver to dump glucose directly into the bloodstream.",
    accent: "bg-amber-50 text-amber-800 border-amber-100",
  },
  {
    icon: Clock,
    title: "4. Daily Routine",
    desc: "Meal timings, work shifts, and movement patterns determine how efficiently insulin works.",
    accent: "bg-teal-50 text-teal-800 border-teal-100",
  },
];

export default function WhyItHappensSection() {
  return (
    <section id="why-it-happens" className="py-14 sm:py-20 md:py-24 bg-[#fdfbf7] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Science of Blood Sugar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary font-heading">
            WHY IT HAPPENS
          </h2>

          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto my-4"></div>

          {/* Core Insight Callout */}
          <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-emerald-900/10 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl font-extrabold text-secondary font-heading leading-snug">
              &ldquo;Two people with the same HbA1c can need completely different plans.&rdquo;
            </p>
          </div>

          <p className="mt-6 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Your sugar depends on how your body reacts to <strong className="text-secondary font-semibold">food, sleep, stress and routine</strong>. Dt Neelam studies all of this first, then builds your plan.
          </p>
        </div>

        {/* 4 Reaction Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pillar.accent} border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-bold uppercase tracking-wider text-primary">
                  Evaluated In First Session
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison: Generic Diet Chart vs. Dt Neelam Physiology Plan */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-black/5">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-secondary font-heading">
              Why Generic Charts Fail &amp; Personalized Plans Win
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">
              The difference between temporary starvation and lasting HbA1c reversal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Generic Chart */}
            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/80">
              <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                <XCircle className="w-5 h-5 shrink-0" />
                <span className="text-base uppercase tracking-wide">Generic Diet Charts</span>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&times;</span>
                  <span>Forces you to stop eating roti, rice, and favourite meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&times;</span>
                  <span>Extreme calorie restriction and constant hunger pangs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&times;</span>
                  <span>Ignores sleep, high cortisol stress, and daily working hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&times;</span>
                  <span>Fails by week two; sugar spikes higher than before</span>
                </li>
              </ul>
            </div>

            {/* Dt Neelam's Plan */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-300">
              <div className="flex items-center gap-2 mb-4 text-emerald-800 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-base uppercase tracking-wide">Dt Neelam's Physiology Plan</span>
              </div>
              <ul className="space-y-3 text-sm text-foreground/90 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">&check;</span>
                  <span>Built around your existing home food—no starving or giving up roti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">&check;</span>
                  <span>Aligns with your body's glucose response, sleep, and activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">&check;</span>
                  <span>Works safely alongside your doctor&rsquo;s current medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">&check;</span>
                  <span>Weekly tracking and adjustments until HbA1c steadily normalizes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
