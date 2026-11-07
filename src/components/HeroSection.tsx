import React from 'react';
import { Sparkles, Heart, ArrowDown, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { isUrduOrArabic } from '../utils/sanitize';
import { soundEffects } from '../utils/audio';

interface HeroSectionProps {
  personalizedRecipient: string | null;
  onScrollToCreator: () => void;
  onScrollToCard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  personalizedRecipient,
  onScrollToCreator,
  onScrollToCard,
}) => {
  const isUrdu = personalizedRecipient ? isUrduOrArabic(personalizedRecipient) : false;

  const handleLaunchFireworks = () => {
    soundEffects.playCelebrationChime();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#F59E0B', '#FDE68A', '#FCD34D', '#E11D48', '#38BDF8'],
    });
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 text-center px-4 overflow-hidden">
      {/* Personalized Welcome Banner if URL query parameter ?name=... is present */}
      {personalizedRecipient && (
        <div className="max-w-xl mx-auto mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm">
            <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              ★
            </span>
            <span>
              Special Greeting Opened for <strong className="text-white underline">{personalizedRecipient}</strong>!
            </span>
            <button
              onClick={onScrollToCard}
              className="ml-2 underline font-semibold text-amber-300 hover:text-white cursor-pointer"
            >
              View Card ↓
            </button>
          </div>
        </div>
      )}

      {/* Main Kicker */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-amber-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold">
          ✦ CELEBRATE THE FUTURE ✦
        </span>
      </div>

      {/* Heading: ADVANCE HAPPY NEW YEAR */}
      <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white uppercase text-balance max-w-4xl mx-auto">
        Advance Happy New Year
      </h1>

      {/* The Iconic Glowing 2027 */}
      <div className="relative my-4 sm:my-6 inline-block select-none">
        {/* Glow halo behind the numbers */}
        <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full scale-110 pointer-events-none" />

        <div className="font-cinzel text-7xl sm:text-9xl md:text-[11rem] font-black gold-shimmer-text tracking-tighter gold-glow relative z-10 transition-transform duration-500 hover:scale-[1.02]">
          2027
        </div>

        {/* Floating celebration tag */}
        <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <span className="px-4 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30">
            Season of Golden Beginnings
          </span>
        </div>
      </div>

      {/* Subtitle Message */}
      <p className="mt-6 md:mt-8 text-base sm:text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed text-balance">
        Welcome the New Year with happiness, love and beautiful memories!
      </p>

      {/* Urdu Subtitle for bilingual resonance */}
      <p className="mt-2 text-base sm:text-xl text-amber-200/90 font-urdu max-w-xl mx-auto">
        نیا سال آپ اور آپ کے تمام چاہنے والوں کے لیے بے شمار خوشیاں اور رحمتیں لائے۔
      </p>

      {/* Interactive Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
        <button
          onClick={onScrollToCreator}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl font-cinzel font-bold text-base text-slate-950 gold-button flex items-center justify-center gap-2 cursor-pointer transition-transform"
        >
          <Sparkles className="w-5 h-5 text-slate-950" />
          <span>Create Personalized Wishes</span>
        </button>

        <button
          onClick={handleLaunchFireworks}
          className="w-full sm:w-auto px-6 py-4 rounded-2xl font-medium text-sm sm:text-base text-amber-200 bg-[#090f24] border border-amber-400/30 hover:border-amber-400/60 hover:bg-[#0d1633] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Heart className="w-4 h-4 text-amber-400" />
          <span>Launch Fireworks & Confetti</span>
        </button>
      </div>

      {/* Touch screen hint for fireworks */}
      <div className="mt-8 text-xs text-slate-400 flex items-center justify-center gap-2">
        <span>✨ Tip: Tap or click anywhere on screen to ignite instant fireworks!</span>
      </div>
    </section>
  );
};
