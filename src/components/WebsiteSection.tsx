"use client";

import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Sparkles, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function WebsiteSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#fdfbf7] to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-emerald-100/50 via-teal-100/30 to-amber-100/40 blur-3xl pointer-events-none -z-10 rounded-full"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-12 shadow-xl border border-emerald-900/10 overflow-hidden"
        >
          {/* Subtle Corner Grid Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-25 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>Official Knowledge &amp; Programs Hub</span>
              </div>

              {/* Main Section Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary font-heading leading-tight mb-4">
                Want to Know More About HbA1c?
              </h2>

              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed font-medium mb-3">
                Explore our official website to discover our science-based approach to diabetes care, weight management and personalised nutrition.
              </p>

              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                Learn more about our services, nutrition programs and expert guidance by D.t Neelam.
              </p>
            </div>

            {/* Right Card / CTA Box */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#fdfbf7] to-emerald-50/60 border border-emerald-900/10 shadow-sm text-center">
              {/* Logo Preview */}
              <div className="bg-white px-4 py-2 rounded-xl shadow-xs border border-emerald-950/10 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="EFITBITE"
                  width={150}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
              </div>

              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-widest mb-4">
                Official Website &bull; efitbite.in
              </span>

              {/* External CTA Link */}
              <a
                href="http://efitbite.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-secondary hover:bg-emerald-800 text-white px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <span>VISIT OUR WEBSITE</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] text-foreground/60 mt-2.5 flex items-center gap-1">
                <ExternalLink className="w-3 h-3 text-emerald-600" />
                Opens in a new tab
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
