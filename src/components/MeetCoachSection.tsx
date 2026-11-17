"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Clock, 
  CalendarCheck, 
  HeartHandshake,
  Quote,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface MeetCoachSectionProps {
  onOpenBooking: () => void;
}

export default function MeetCoachSection({ onOpenBooking }: MeetCoachSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="meet-coach" className="py-14 sm:py-20 md:py-24 bg-[#04281e] relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Coach Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-emerald-800/40 via-teal-900/30 to-[#031d16] border border-emerald-600/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
              {!imageError ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/dr-neelam-1411x1536.webp"
                    alt="D.t Neelam - Diabetes & Weight Loss Expert"
                    fill
                    className="object-cover object-top"
                    onError={() => setImageError(true)}
                    priority
                  />
                  {/* Bottom subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04281e]/85 via-transparent to-transparent pointer-events-none"></div>

                  {/* Name badge overlay at bottom of photo */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 bg-emerald-950/85 backdrop-blur-md border border-emerald-600/30 rounded-2xl p-3.5 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white font-heading">
                          D.t Neelam
                        </h4>
                        <p className="text-xs text-emerald-300 font-medium">
                          Master&rsquo;s in Medical Physiology
                        </p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                        10+ Yrs Exp
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-between text-center py-6 px-4">
                  {/* Top Brand Logo Badge */}
                  <div className="bg-white px-4 py-2 rounded-2xl shadow-md border border-white/20 flex items-center justify-center">
                    <Image
                      src="/images/logo.jpeg"
                      alt="EFITBITE - Where Science Meets Smart Eating"
                      width={160}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  <div className="my-auto">
                    <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Medical Physiology
                    </span>
                    <h4 className="text-3xl font-extrabold text-white mt-3 font-heading">
                      D.t Neelam
                    </h4>
                    <p className="text-emerald-200/90 text-sm mt-1 font-semibold">
                      Diabetes &amp; Weight Loss Specialist
                    </p>
                  </div>

                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-left space-y-2 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Certified Medical Physiologist</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>1,000+ Blood Sugar Plans Formulated</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Verified Authority Pill floating over card */}
              <div className="absolute top-4 left-4 z-20 bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Verified Clinical Expert</span>
              </div>
            </div>
          </motion.div>

          {/* Coach Bio & Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-500/30">
              <HeartHandshake className="w-3.5 h-3.5 text-primary" />
              <span>Meet Your Expert</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
              MEET D.t NEELAM
            </h2>

            <h3 className="text-lg sm:text-2xl font-bold text-emerald-300 tracking-wide mt-2 mb-6">
              Diabetes and Weight Loss Expert
            </h3>

            {/* 3 Core Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center sm:text-left flex flex-col justify-center">
                <div className="w-9 h-9 rounded-xl bg-primary/20 text-emerald-300 flex items-center justify-center mb-2 mx-auto sm:mx-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">🎓 Master’s</div>
                <div className="text-xs text-white/70 mt-0.5">Medical Physiology</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center sm:text-left flex flex-col justify-center">
                <div className="w-9 h-9 rounded-xl bg-primary/20 text-emerald-300 flex items-center justify-center mb-2 mx-auto sm:mx-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">📜 17+ Programs</div>
                <div className="text-xs text-white/70 mt-0.5">Diploma &amp; Certifications</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center sm:text-left flex flex-col justify-center">
                <div className="w-9 h-9 rounded-xl bg-primary/20 text-emerald-300 flex items-center justify-center mb-2 mx-auto sm:mx-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">⏳ 10 Years</div>
                <div className="text-xs text-white/70 mt-0.5">Clinical Experience</div>
              </div>
            </div>

            {/* Signature Philosophy Quote Callout */}
            <div className="relative bg-emerald-950/60 border-l-4 border-primary rounded-r-2xl p-5 sm:p-6 my-6 text-left">
              <Quote className="w-6 h-6 text-emerald-500/40 mb-1" />
              <p className="text-lg sm:text-xl font-bold italic text-emerald-100 font-heading leading-relaxed">
                &ldquo;I don’t hand out diet charts. I understand your body first, then build your plan.&rdquo;
              </p>
              <div className="mt-2 text-xs font-semibold text-emerald-400">
                &mdash; D.t Neelam, M.Sc Medical Physiology
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              With a deep background in Medical Physiology, D.t Neelam bridges the gap between medical science and daily Indian eating habits. Instead of forcing you to cut out rotis or survive on bland salads, she identifies your metabolic roadblocks and designs a sustainable pathway to normal blood sugar.
            </p>

            {/* CTA Button */}
            <div className="pt-2 border-t border-emerald-800/60">
              <button
                onClick={onOpenBooking}
                type="button"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-emerald-500 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/40 active:translate-y-0 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Book Your Free Consultation</span>
                <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-[#04281e] opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
