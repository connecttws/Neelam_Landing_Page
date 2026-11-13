"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white/80 py-12 sm:py-16 border-t border-emerald-800/40 pb-24 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          {/* Logo Badge in Footer */}
          <div className="inline-flex items-center justify-center bg-white px-5 py-2.5 rounded-2xl shadow-lg border border-white/20 mb-5">
            <Image
              src="/images/logo.jpeg"
              alt="EFITBITE - Where Science Meets Smart Eating"
              width={180}
              height={55}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white font-heading">
            Dt. Neelam
          </h3>

          <p className="text-sm font-semibold text-emerald-300 uppercase tracking-widest mt-1 mb-3">
            Master’s in Medical Physiology &bull; Diabetes and Weight Loss Expert
          </p>

          <p className="text-sm text-emerald-100/75 leading-relaxed max-w-xl">
            Helping busy individuals reverse HbA1c 7.5+ back to normal through clinical physiology, personalized nutrition, and zero starvation.
          </p>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs sm:text-sm font-semibold text-white/80">
            <a href="#sound-familiar" className="hover:text-emerald-300 transition-colors">
              Sound Familiar?
            </a>
            <a href="#why-it-happens" className="hover:text-emerald-300 transition-colors">
              Why It Happens
            </a>
            <a href="#the-method" className="hover:text-emerald-300 transition-colors">
              The 3-Step Method
            </a>
            <a href="#meet-coach" className="hover:text-emerald-300 transition-colors">
              Meet Dt. Neelam
            </a>
            <a href="#faq" className="hover:text-emerald-300 transition-colors">
              FAQ
            </a>
          </div>
        </div>

        {/* Medical & Nutritional Disclaimer */}
        <div className="pt-8 border-t border-emerald-800/50 max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs text-emerald-200/50 leading-relaxed">
            <strong>Medical Disclaimer:</strong> The nutritional plans and guidance provided by Dt. Neelam (EFITBITE) are based on clinical nutrition, lifestyle adjustments, and medical physiology principles. This program works alongside your physician&rsquo;s treatment, not in place of it. Never discontinue or adjust prescription diabetes medication without consulting your doctor. Results may vary depending on individual physiological responsiveness and consistency.
          </p>

          <p className="text-xs text-emerald-200/60">
            &copy; {currentYear} EFITBITE &bull; Dt. Neelam Diabetes &amp; Weight Loss Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
