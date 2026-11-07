import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Check, 
  RefreshCw, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  Facebook,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateShareUrl, isUrduOrArabic } from '../utils/sanitize';
import { soundEffects } from '../utils/audio';

interface PersonalizedGreetingCardProps {
  name: string;
  wishText: string;
  wishTextUrdu?: string;
  onReset: () => void;
  onToast: (message: string) => void;
}

export const PersonalizedGreetingCard: React.FC<PersonalizedGreetingCardProps> = ({
  name,
  wishText,
  wishTextUrdu,
  onReset,
  onToast,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedWishes, setCopiedWishes] = useState(false);

  const isUrdu = isUrduOrArabic(name);
  const personalUrl = generateShareUrl(name);

  // Formatted WhatsApp greeting text
  const whatsappText = `✨ *ADVANCE HAPPY NEW YEAR 2027!* ✨\n\n🎉 *Dear ${name},*\n\n"${wishText}"\n\n🌟 Here is your exclusive personalized 2027 celebration greeting card:\n👉 ${personalUrl}\n\n*Wishing you a glorious 2027 ahead!* 🥂🎆`;

  // WhatsApp click to chat URL
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;

  // Facebook share URL
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(personalUrl)}&quote=${encodeURIComponent(`Advance Happy New Year 2027 to ${name}! ${wishText}`)}`;

  // Telegram share URL
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(personalUrl)}&text=${encodeURIComponent(`Advance Happy New Year 2027 for ${name}! 🎉✨`)}`;

  // Twitter/X share URL
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Advance Happy New Year 2027 to ${name}! ✨🥂 Welcome 2027 with joy & blessings:`)}&url=${encodeURIComponent(personalUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(personalUrl);
      setCopiedLink(true);
      soundEffects.playCelebrationChime();
      onToast(`Personalized link for "${name}" copied to clipboard!`);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      onToast('Could not copy automatically. Please copy the URL manually.');
    }
  };

  const handleCopyWishes = async () => {
    const fullGreetingText = `Advance Happy New Year 2027!\n\nDear ${name},\n\n${wishText}\n\n${wishTextUrdu ? wishTextUrdu + '\n\n' : ''}Personal Card: ${personalUrl}`;
    try {
      await navigator.clipboard.writeText(fullGreetingText);
      setCopiedWishes(true);
      soundEffects.playCelebrationChime();
      onToast('New Year wishes copied to clipboard!');
      setTimeout(() => setCopiedWishes(false), 2500);
    } catch {
      onToast('Could not copy automatically.');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Advance Happy New Year 2027 - ${name}`,
          text: `Advance Happy New Year 2027! Dear ${name}, ${wishText}`,
          url: personalUrl,
        });
        soundEffects.playCelebrationChime();
      } catch (err) {
        // User cancelled share or unsupported
      }
    } else {
      handleCopyLink();
    }
  };

  const burstExtraConfetti = () => {
    soundEffects.playCelebrationChime();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#FDE68A', '#FCD34D', '#EC4899', '#3B82F6'],
    });
  };

  return (
    <div id="personalized-card" className="w-full max-w-3xl mx-auto px-4 py-8 scroll-mt-24">
      {/* The Luxury Greeting Card Frame */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-2xl shadow-amber-500/20">
        <div className="bg-[#050918] rounded-[22px] p-6 sm:p-10 md:p-12 relative overflow-hidden text-center">
          {/* Subtle watermark golden glow pattern */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Golden Seal Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              onClick={burstExtraConfetti}
              className="cursor-pointer group flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wider uppercase transition-transform hover:scale-105"
              title="Click to celebrate!"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span>Official 2027 Greeting Seal</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:-rotate-45 transition-transform" />
            </div>
          </div>

          {/* Heading 1: Advance Happy New Year 2027 */}
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-wide leading-tight mb-2">
            Advance Happy New Year 2027!
          </h1>

          {/* Heading 2: Dear [NAME] */}
          <div className="my-6">
            <span className="text-slate-400 text-sm md:text-base uppercase tracking-widest block mb-1">
              Specially Dedicated To
            </span>
            <div className={`font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-amber-300 tracking-wide gold-glow ${
              isUrdu ? 'font-urdu text-4xl sm:text-5xl md:text-6xl py-2' : ''
            }`}>
              Dear {name},
            </div>
            {isUrdu && (
              <div className="text-amber-200/80 font-urdu text-xl mt-1">
                محترم {name}،
              </div>
            )}
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-6 text-amber-400/50">
            <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-amber-300 text-sm">✦ 2027 ✦</span>
            <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>

          {/* The Heartfelt Message */}
          <div className="max-w-xl mx-auto space-y-4">
            <p className="text-slate-100 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              &ldquo;{wishText}&rdquo;
            </p>

            {wishTextUrdu && (
              <p className="text-amber-200 font-urdu text-lg sm:text-xl md:text-2xl leading-loose pt-2">
                &ldquo;{wishTextUrdu}&rdquo;
              </p>
            )}
          </div>

          {/* Card footer date indicator */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span>Prepared with love for 2027</span>
            <span>Welcome 2027 with Joy & Hope</span>
          </div>
        </div>
      </div>

      {/* SHARING FEATURES BUTTONS GRID */}
      <div className="mt-8 space-y-4">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Share Your Personalized Wish
          </span>
        </div>

        {/* Primary Action Buttons: WhatsApp & Facebook */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* 1. WhatsApp Share Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-semibold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Share on WhatsApp</span>
          </a>

          {/* 2. Facebook Share Button */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-semibold text-sm sm:text-base text-white bg-[#1877F2] hover:bg-[#166fe5] transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
          >
            <Facebook className="w-5 h-5 fill-current" />
            <span>Share on Facebook</span>
          </a>
        </div>

        {/* Secondary Action Buttons: Copy Wishes, Copy Link, Create Another */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* 3. Copy Wishes Button */}
          <button
            onClick={handleCopyWishes}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-900/90 border border-amber-400/30 hover:border-amber-400/60 hover:bg-slate-800 transition-all cursor-pointer"
          >
            {copiedWishes ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Wishes Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy Wishes Text</span>
              </>
            )}
          </button>

          {/* 4. Copy Personal Link Button */}
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-900/90 border border-amber-400/30 hover:border-amber-400/60 hover:bg-slate-800 transition-all cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span>Copy Personal Link</span>
              </>
            )}
          </button>

          {/* 5. Create Another Wish Button */}
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-amber-300 bg-amber-500/10 border border-amber-400/40 hover:bg-amber-500/20 hover:border-amber-400 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Create Another Wish</span>
          </button>
        </div>

        {/* Extra Quick Share Options: Telegram, Twitter/X, and Native Share */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 py-1 px-3 rounded-lg bg-slate-900/60 border border-slate-800 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>More Share Options</span>
            </button>
          )}

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 py-1 px-3 rounded-lg bg-slate-900/60 border border-slate-800 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white py-1 px-3 rounded-lg bg-slate-900/60 border border-slate-800 transition-colors"
          >
            <span>Share on X</span>
          </a>
        </div>
      </div>
    </div>
  );
};
