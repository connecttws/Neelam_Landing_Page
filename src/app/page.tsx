"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import SoundFamiliarSection from "@/components/SoundFamiliarSection";
import WhyItHappensSection from "@/components/WhyItHappensSection";
import MethodSection from "@/components/MethodSection";
import MeetCoachSection from "@/components/MeetCoachSection";
import FAQSection from "@/components/FAQSection";
import WebsiteSection from "@/components/WebsiteSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-background text-foreground flex flex-col">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero Section: Headline, Subheadline, Rotating Conic-Border Badges, VSL Video, Main CTA */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 3. Infinite Scrolling Trust Strip Ticker */}
      <TrustStrip />

      {/* 4. Sound Familiar: The 4 Empathetic Pain Points */}
      <SoundFamiliarSection onOpenBooking={handleOpenBooking} />

      {/* 5. Why It Happens: The 4 Physiology Pillars (Food, Sleep, Stress, Routine) & Comparison */}
      <WhyItHappensSection />

      {/* 6. The Method (3 Steps): 01 Understand, 02 Personalise, 03 Track & Adjust */}
      <MethodSection onOpenBooking={handleOpenBooking} />

      {/* 7. Meet D.t Neelam: Master's in Medical Physiology, 17+ Certs, 10 Yrs, Signature Quote */}
      <MeetCoachSection onOpenBooking={handleOpenBooking} />

      {/* 8. Frequently Asked Questions: Accordion format */}
      <FAQSection onOpenBooking={handleOpenBooking} />

      {/* 9. Want to Know More About HbA1c: Official Website & Program Exploration */}
      <WebsiteSection />

      {/* 10. Final Urgency CTA: "Your HbA1c Won't Fix Itself. Start Today." + 10 Slots Urgency */}
      <FinalCtaSection onOpenBooking={handleOpenBooking} />

      {/* 11. Comprehensive Professional Footer */}
      <Footer />

      {/* 12. Sticky Mobile Quick Booking Bar */}
      <StickyMobileBar onOpenBooking={handleOpenBooking} />

      {/* 13. Interactive Lead Capture Booking Modal with CRM Tracker Compatibility */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
