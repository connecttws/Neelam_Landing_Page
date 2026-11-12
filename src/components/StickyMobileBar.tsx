"use client";

import { CalendarCheck, Flame } from "lucide-react";

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export default function StickyMobileBar({ onOpenBooking }: StickyMobileBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-emerald-900/10 p-3 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="flex items-center gap-1 text-[11px] font-bold text-red-600">
            <Flame className="w-3.5 h-3.5 fill-red-600" />
            10 Slots This Week
          </span>
          <span className="text-xs font-extrabold text-secondary">
            100% Free Consultation
          </span>
        </div>

        <button
          onClick={onOpenBooking}
          type="button"
          className="flex-1 py-3 px-4 rounded-full bg-primary hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-primary/30 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 text-emerald-200" />
          <span>Book Free Slot</span>
        </button>
      </div>
    </div>
  );
}
