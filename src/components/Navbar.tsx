"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, CalendarCheck, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfbf7]/90 backdrop-blur-md shadow-sm border-b border-emerald-900/10 py-3 sm:py-3.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-secondary font-heading leading-tight flex items-center gap-1.5">
              Dt. Neelam
              <span className="inline-flex items-center justify-center text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full border border-emerald-200">
                M.Sc
              </span>
            </span>
            <span className="text-[10px] sm:text-xs text-foreground/75 tracking-wider uppercase font-semibold">
              Medical Physiology &bull; Diabetes Expert
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-foreground/80">
          <a
            href="#sound-familiar"
            className="hover:text-primary transition-colors py-1"
          >
            Sound Familiar?
          </a>
          <a
            href="#why-it-happens"
            className="hover:text-primary transition-colors py-1"
          >
            Why It Happens
          </a>
          <a
            href="#the-method"
            className="hover:text-primary transition-colors py-1"
          >
            The 3-Step Method
          </a>
          <a
            href="#meet-coach"
            className="hover:text-primary transition-colors py-1"
          >
            Meet Dt. Neelam
          </a>
          <a
            href="#faq"
            className="hover:text-primary transition-colors py-1"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenBooking}
            type="button"
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-secondary hover:bg-emerald-800 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
            <span>Book Free Consultation</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
