import React, { useState } from 'react';
import { Sparkles, User, AlertCircle, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WISH_TEMPLATES } from '../data/wishTemplates';
import { sanitizeName, isUrduOrArabic } from '../utils/sanitize';
import { soundEffects } from '../utils/audio';

interface WishCreatorProps {
  onWishCreated: (name: string, templateId: string, customText?: string) => void;
  initialName?: string;
}

export const WishCreator: React.FC<WishCreatorProps> = ({ onWishCreated, initialName = '' }) => {
  const [name, setName] = useState(initialName);
  const [selectedTemplate, setSelectedTemplate] = useState(WISH_TEMPLATES[0].id);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = sanitizeName(name);

    if (!sanitized) {
      setErrorMessage('Please enter your name or recipient name to generate wishes.');
      return;
    }

    if (sanitized.length < 2) {
      setErrorMessage('Name must be at least 2 characters long.');
      return;
    }

    setErrorMessage('');

    // Trigger celebration sound and confetti
    soundEffects.playCelebrationChime();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#F59E0B', '#FDE68A', '#FCD34D', '#F43F5E', '#10B981'],
    });

    onWishCreated(sanitized, selectedTemplate);
  };

  const isUrduInput = isUrduOrArabic(name);

  return (
    <div id="create-wish" className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="gold-card rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
        {/* Decorative corner light accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
              Personalized 2027 Greetings
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Create Your Exclusive Wish
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Enter your name or your friend&apos;s name to create an exquisite Advance New Year 2027 greeting card to share instantly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input Field */}
            <div>
              <label htmlFor="name-input" className="block text-xs font-medium uppercase tracking-wider text-amber-200/90 mb-2">
                Recipient or Your Name (English / Urdu / العربية)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-amber-400/70">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="name-input"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errorMessage) setErrorMessage('');
                    setIsTyping(true);
                  }}
                  onBlur={() => setIsTyping(false)}
                  placeholder="Enter Your Name (e.g. Ali, Sarah, علی, احمد)"
                  dir={isUrduInput ? 'rtl' : 'ltr'}
                  className={`w-full pl-12 pr-4 py-3.5 sm:py-4 bg-[#060a17]/90 border rounded-2xl text-white placeholder-slate-500 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all ${
                    isUrduInput ? 'font-urdu text-xl text-right pr-4 pl-12' : 'font-outfit'
                  } ${
                    errorMessage ? 'border-red-500/80 ring-1 ring-red-500/40' : 'border-amber-400/30 hover:border-amber-400/50'
                  }`}
                  maxLength={50}
                  autoComplete="name"
                />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-1.5 mt-2 text-xs text-red-400 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            {/* Template Sentiment Selection */}
            <div>
              <span className="block text-xs font-medium uppercase tracking-wider text-amber-200/90 mb-2">
                Choose Greeting Theme
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {WISH_TEMPLATES.map((tmpl) => {
                  const isSelected = selectedTemplate === tmpl.id;
                  return (
                    <button
                      key={tmpl.id}
                      type="button"
                      onClick={() => setSelectedTemplate(tmpl.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 shadow-md shadow-amber-500/10 ring-1 ring-amber-400/30'
                          : 'bg-[#080d1e]/70 border-slate-800 hover:border-amber-400/40 hover:bg-[#0c142b]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-amber-300">
                          {tmpl.category}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {tmpl.message}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Name Suggestions */}
            <div className="pt-1">
              <span className="text-xs text-slate-400 block mb-2">
                Popular Quick Names:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Ali', 'Sarah', 'Zayn', 'Hamza', 'Ayesha', 'علی', 'فاطمہ'].map((quickName) => (
                  <button
                    key={quickName}
                    type="button"
                    onClick={() => {
                      setName(quickName);
                      setErrorMessage('');
                    }}
                    className={`text-xs px-2.5 py-1 rounded-lg border border-amber-400/20 bg-slate-900/60 text-amber-200/80 hover:text-amber-100 hover:border-amber-400/60 transition-colors ${
                      isUrduOrArabic(quickName) ? 'font-urdu' : ''
                    }`}
                  >
                    + {quickName}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-cinzel font-bold text-base sm:text-lg text-slate-950 gold-button flex items-center justify-center gap-2 cursor-pointer transition-transform"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Create My Wishes</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
