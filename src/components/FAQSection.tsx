"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, CalendarCheck } from "lucide-react";

interface FAQSectionProps {
  onOpenBooking: () => void;
}

const faqs = [
  {
    question: "Will I have to give up my favourite foods?",
    answer:
      "No. Your plan is built around what you already eat. We don't believe in cutting out rotis, family dinners, or cultural staples. Instead, we adjust combinations, timings, and metabolic balance so your body processes them cleanly.",
  },
  {
    question: "I’m on medication. Can I still do this?",
    answer:
      "Yes. The plan works alongside your doctor’s treatment, never in place of it. As your metabolic physiology improves and your HbA1c steadily drops, your doctor can safely review and reduce your dosage over time.",
  },
  {
    question: "I’ve tried diets before and they failed.",
    answer:
      "That’s why the first consultation is free. Understand the reason first, then decide. Generic crash diets fail because they ignore your stress, sleep, and personal metabolism. We pinpoint the real root cause before formulating your plan.",
  },
  {
    question: "I don’t have time.",
    answer:
      "Everything is online, with guidance on WhatsApp. There are no inconvenient clinic visits or long commutes. Your consultations, regular progress tracking, and weekly adjustments happen right from the comfort of your home.",
  },
];

export default function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary font-heading">
            Frequently Asked Questions
          </h2>

          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto my-4"></div>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Everything you need to know about reversing your HbA1c with clinical physiology guidance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-black/10 rounded-2xl overflow-hidden bg-[#fdfbf7] transition-colors"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  type="button"
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-gray-200/80 text-gray-700"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-foreground/80 text-sm sm:text-base leading-relaxed pt-2 border-t border-black/5 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Under FAQ Consultation Trigger */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            type="button"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-emerald-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/40 active:translate-y-0 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
            <span>Book Your Free Consultation</span>
          </button>
          <p className="text-xs text-foreground/60">
            Have a different question? Discuss it directly with Dt. Neelam during your call.
          </p>
        </div>
      </div>
    </section>
  );
}
