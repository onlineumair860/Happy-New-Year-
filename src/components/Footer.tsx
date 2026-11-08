import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenDisclaimer }) => {
  return (
    <footer className="w-full border-t border-amber-400/15 bg-[#02050e] pt-12 pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand Lockup */}
        <div>
          <a
            href="#"
            className="font-cinzel text-lg font-bold gold-gradient-text inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Advance Happy New Year 2027</span>
          </a>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Crafting memorable celebratory moments, personalized greetings, and sharing happiness across the globe.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <a href="#countdown" className="hover:text-amber-300 transition-colors">
            Live Countdown
          </a>
          <a href="#create-wish" className="hover:text-amber-300 transition-colors">
            Create Wishes
          </a>
          <a href="#advance-wishes" className="hover:text-amber-300 transition-colors">
            Advance Greetings
          </a>
          <button
            onClick={onOpenAbout}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={onOpenDisclaimer}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Disclaimer & Privacy
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 flex flex-col sm:flex-row items-center gap-1">
          <span>&copy; 2027 Advance Celebration.</span>
          <span>All rights reserved.</span>
        </div>
      </div>

      {/* Compliance & Trust Badge Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5 text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Client-Side Privacy Guaranteed &middot; No Personal Data Harvested</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAbout}
            className="hover:text-amber-300 transition-colors cursor-pointer underline underline-offset-2"
          >
            Platform Info
          </button>
          <span>&middot;</span>
          <button
            onClick={onOpenDisclaimer}
            className="hover:text-amber-300 transition-colors cursor-pointer underline underline-offset-2"
          >
            Advertising & Legal Terms
          </button>
        </div>
      </div>
    </footer>
  );
};
