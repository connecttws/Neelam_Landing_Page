"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] pt-24 pb-12 sm:pt-32 sm:pb-20">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b08_1px,transparent_1px),linear-gradient(to_bottom,#064e3b08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Top emerald glow blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-emerald-100/60 via-teal-50/30 to-transparent blur-3xl opacity-80"></div>

        {/* Ambient warm amber accent blur */}
        <div className="absolute top-24 right-[-10%] w-[320px] md:w-[480px] h-[320px] md:h-[480px] bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-900 border border-emerald-300/60 mb-5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Science-Based Diabetes Reversal &amp; Metabolism Care</span>
          </motion.div>

          {/* Main Headline & Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary leading-tight sm:leading-snug font-heading">
              <span>Reverse Your </span>
              <span className="text-red-600 font-black whitespace-nowrap">
                HbA1c
              </span>
              <span className="block text-primary mt-1 sm:mt-2">Back to Normal</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-2xl font-bold text-emerald-950/85 max-w-3xl mx-auto leading-relaxed">
              Without Starving or Giving Up Roti
            </p>
          </motion.div>

          {/* VSL Video Container - Placed immediately after 'Without Starving or Giving Up Roti' */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 sm:mt-10 relative w-full max-w-3xl mx-auto aspect-video bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden group border-4 border-white/80"
          >
            {isPlaying ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="VSL Video: Reversing HbA1c with Dt Neelam"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#063b2c] via-[#04281e] to-[#021812]">
                {/* Decorative Medical Graphic Grid in Video Background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

                {/* VSL Center Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Glowing Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    type="button"
                    aria-label="Play VSL Video"
                    className="group/btn relative flex items-center justify-center w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/50 hover:scale-108 transition-all duration-300 cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400/40"></div>
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                  </button>

                  <div className="mt-5 sm:mt-6">
                    <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-1.5">
                      VSL Video Masterclass
                    </span>
                    <h3 className="text-white text-base sm:text-xl font-bold tracking-tight">
                      Why Your HbA1c Is Stuck &amp; How To Reverse It Naturally
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100/70 mt-1 max-w-md mx-auto">
                      Watch Dt. Neelam break down the exact 3-step physiology method (5 Min Watch)
                    </p>
                  </div>
                </div>

                {/* Bottom Bar inside Video Player */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Masterclass by Dt. Neelam
                  </span>
                  <span>100% Free Access</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 sm:mt-11 flex flex-col items-center justify-center gap-3.5"
          >
            <button
              onClick={onOpenBooking}
              type="button"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-emerald-600 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-extrabold text-white shadow-xl shadow-primary/35 transition-all duration-200 hover:-translate-y-1 hover:shadow-primary/50 active:translate-y-0 cursor-pointer"
            >
              <CalendarCheck className="w-6 h-6 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>Book Your Free Consultation</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-[#fdfbf7] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-foreground/75 font-semibold">
              <span className="flex items-center gap-1 text-red-600 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                Only 10 free consultation slots this week
              </span>
              <span className="hidden sm:inline text-gray-300">&bull;</span>
              <span>Online from home</span>
              <span className="hidden sm:inline text-gray-300">&bull;</span>
              <span>100% Confidential</span>
            </div>
          </motion.div>

          {/* 3 Animated Rotating Benefit Badges - Placed after Book Your Free Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-secondary w-full max-w-3xl mx-auto"
          >
            {/* Badge 1 */}
            <div className="relative flex-1 overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex items-center justify-center gap-2 bg-white/95 backdrop-blur px-3 sm:px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>10+ years of experience</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="relative flex-1 overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex items-center justify-center gap-2 bg-white/95 backdrop-blur px-3 sm:px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Personalised plan</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="relative flex-1 overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex items-center justify-center gap-2 bg-white/95 backdrop-blur px-3 sm:px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Online consultation from home</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
