import React, { useEffect } from 'react';
import { X, Sparkles, Heart, ShieldCheck, Globe2, Users, Mail, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="gold-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 md:p-10 relative max-h-[88vh] overflow-y-auto text-left border border-amber-400/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-amber-400 transition-colors cursor-pointer"
          aria-label="Close About Us dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Professional Branding */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-amber-400/20">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
              Official Platform Profile
            </span>
            <h2 id="about-modal-title" className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              About Advance Happy New Year 2027
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            <strong className="text-amber-300">Advance Happy New Year 2027</strong> is a modern, community-centered digital celebration application designed to bring family, friends, and colleagues together ahead of the global New Year milestone.
          </p>

          <p>
            Our initiative solves a common challenge during New Year&apos;s Eve: sudden telecommunication bottlenecks and delayed midnight messages. By sharing heartfelt blessings in advance, senders ensure their loved ones feel cherished, respected, and prioritized without the last-minute rush.
          </p>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            <div className="p-4 rounded-2xl bg-[#060a1c] border border-amber-400/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Privacy by Design</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Zero database tracking. Name personalization runs client-side inside your browser for complete user privacy.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060a1c] border border-amber-400/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1 text-sm">
                  <Globe2 className="w-4 h-4 text-sky-400" />
                  <span>Multilingual Inclusion</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Authentic Urdu, Arabic, and English script rendering with heartfelt cultural wishes and poetry.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060a1c] border border-amber-400/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1 text-sm">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>100% Free Access</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  No paywalls, subscriptions, or forced account registrations. Create and send unlimited wishes freely.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060a1c] border border-amber-400/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1 text-sm">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Cross-Platform Sharing</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  One-tap sharing to WhatsApp, Facebook, Telegram, and mobile native apps via direct links.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Our Commitment
            </h4>
            <p className="text-xs text-slate-300">
              We are committed to maintaining a clean, fast-loading, and ad-supported free experience that respects visitor privacy while bringing joy to millions globally.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Advance Happy New Year 2027 &middot; All Rights Reserved.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-950 gold-button cursor-pointer"
          >
            Close & Continue
          </button>
        </div>
      </div>
    </div>
  );
};
