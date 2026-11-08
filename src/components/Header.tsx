import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface HeaderProps {
  onCelebrate: () => void;
  onOpenAbout: () => void;
  onOpenDisclaimer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCelebrate,
  onOpenAbout,
  onOpenDisclaimer,
}) => {
  const [isMuted, setIsMuted] = useState(soundEffects.isMuted);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    const muted = soundEffects.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#030712]/85 border-b border-amber-400/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Zone */}
        <a
          href="#"
          className="font-cinzel text-lg sm:text-xl font-bold tracking-tight gold-gradient-text whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span>New Year 2027</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#countdown"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Countdown
          </a>
          <a
            href="#create-wish"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Personalized Wishes
          </a>
          <a
            href="#advance-wishes"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Advance Greetings
          </a>
          <a
            href="#disclaimer"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Disclaimer
          </a>
          <button
            onClick={onOpenAbout}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            About Us
          </button>
        </nav>

        {/* Zone 3: Audio control + Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            className="p-2.5 rounded-xl border border-amber-400/25 bg-slate-900/60 text-amber-300 hover:text-amber-200 hover:border-amber-400/50 transition-colors cursor-pointer"
            title={isMuted ? 'Unmute celebration chime' : 'Mute celebration chime'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Primary CTA Button */}
          <a
            href="#create-wish"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 gold-button rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create Wish</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060a18] border-b border-amber-400/20 px-6 py-4 space-y-3">
          <a
            href="#countdown"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-300 py-1"
          >
            Countdown
          </a>
          <a
            href="#create-wish"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-300 py-1"
          >
            Personalized Wishes
          </a>
          <a
            href="#advance-wishes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-300 py-1"
          >
            Advance Greetings
          </a>
          <a
            href="#disclaimer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-300 py-1"
          >
            Disclaimer & Legal Terms
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAbout();
            }}
            className="w-full text-left block text-sm font-medium text-slate-200 hover:text-amber-300 py-1 cursor-pointer"
          >
            About Us
          </button>
          <div className="pt-2">
            <a
              href="#create-wish"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 gold-button rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create My Wishes</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
