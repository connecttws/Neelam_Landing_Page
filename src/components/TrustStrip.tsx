"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function TrustStrip() {
  const points = [
    "10+ Years of Experience",
    "Master’s in Medical Physiology",
    "17+ Diploma & Certificate Programs",
    "Personalised Plan (No Starving)",
    "Reverse HbA1c 7.5+ Safely",
    "Online Consultation From Home",
    "Works Alongside Your Doctor's Treatment",
    "Keep Eating Your Favourite Roti",
  ];

  // Repeat for continuous marquee
  const repeatedPoints = [...points, ...points, ...points];

  return (
    <div className="bg-secondary text-white py-4 sm:py-5 overflow-hidden relative flex border-y border-emerald-800/40 select-none">
      {/* Fading Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 32,
        }}
      >
        {repeatedPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 bg-white/6 border border-white/10 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full mx-2 sm:mx-3 hover:bg-white/12 transition-colors cursor-default"
          >
            <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[3]" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-wide text-white/95">
              {point}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
