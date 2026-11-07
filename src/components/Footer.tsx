import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-amber-400/15 bg-[#02050e] py-12 px-4">
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
          <a href="#deployment-guide" className="hover:text-amber-300 transition-colors">
            GitHub Deployment
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 flex flex-col sm:flex-row items-center gap-1">
          <span>&copy; 2027 Advance Celebration.</span>
          <span>Crafted for joy and happiness.</span>
        </div>
      </div>
    </footer>
  );
};
