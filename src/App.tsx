import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FireworksCanvas } from './components/FireworksCanvas';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { WishCreator } from './components/WishCreator';
import { PersonalizedGreetingCard } from './components/PersonalizedGreetingCard';
import { AdvanceWishesSection } from './components/AdvanceWishesSection';
import { Disclaimer } from './components/Disclaimer';
import { AboutModal } from './components/AboutModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import {
  LeaderboardAd,
  MobileBannerAd,
  MediumRectangleAd,
} from './components/AdBanner';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { WISH_TEMPLATES } from './data/wishTemplates';
import { getQueryParam, sanitizeName } from './utils/sanitize';
import { soundEffects } from './utils/audio';

export default function App() {
  const [recipientName, setRecipientName] = useState<string>('');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(WISH_TEMPLATES[0].id);
  const [customWishText, setCustomWishText] = useState<string>('');
  const [hasActiveGreeting, setHasActiveGreeting] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Legal & Branding Modals
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(false);

  // Initialize from URL query parameter ?name=... on first render
  useEffect(() => {
    const urlName = getQueryParam('name');
    if (urlName) {
      const sanitized = sanitizeName(urlName);
      if (sanitized) {
        setRecipientName(sanitized);
        setHasActiveGreeting(true);
        // Trigger celebratory confetti on incoming personalized link
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#F59E0B', '#FDE68A', '#FCD34D', '#10B981'],
          });
        }, 600);
      }
    }
  }, []);

  const handleWishCreated = (name: string, templateId: string) => {
    setRecipientName(name);
    setSelectedTemplateId(templateId);
    setHasActiveGreeting(true);

    // Smoothly scroll down to the personalized greeting card
    setTimeout(() => {
      const cardEl = document.getElementById('personalized-card');
      cardEl?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleReset = () => {
    setHasActiveGreeting(false);
    setRecipientName('');
    const creatorEl = document.getElementById('create-wish');
    creatorEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTemplate = (tmplId: string) => {
    setSelectedTemplateId(tmplId);
  };

  const activeTemplate =
    WISH_TEMPLATES.find((t) => t.id === selectedTemplateId) || WISH_TEMPLATES[0];

  const scrollToCreator = () => {
    const el = document.getElementById('create-wish');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCard = () => {
    const el = document.getElementById('personalized-card');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Interactive Background Fireworks & Starfield Canvas */}
      <FireworksCanvas />

      {/* Main App Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header with Navigation and Modal Triggers */}
        <Header
          onCelebrate={() => soundEffects.playCelebrationChime()}
          onOpenAbout={() => setAboutOpen(true)}
          onOpenDisclaimer={() => setDisclaimerOpen(true)}
        />

        {/* ======================================================== */}
        {/* 1. FRONT / HEADER ADS ("Frant Haider py lgay")          */}
        {/* ======================================================== */}
        {/* Desktop Header Ad (728 × 90 Leaderboard) */}
        <div className="hidden md:flex justify-center pt-3 pb-1">
          <LeaderboardAd />
        </div>
        {/* Mobile Header Ad (320 × 50 Large Mobile Banner) */}
        <div className="flex md:hidden justify-center pt-2 pb-1">
          <MobileBannerAd />
        </div>

        {/* Hero Section */}
        <HeroSection
          personalizedRecipient={recipientName || null}
          onScrollToCreator={scrollToCreator}
          onScrollToCard={scrollToCard}
        />

        {/* Live Countdown Section */}
        <div id="countdown" className="scroll-mt-20">
          <CountdownTimer />
        </div>

        {/* Personalized Wish Greeting Card (Shown if active or from URL) */}
        {hasActiveGreeting && recipientName && (
          <>
            <PersonalizedGreetingCard
              name={recipientName}
              wishText={customWishText || activeTemplate.message}
              wishTextUrdu={activeTemplate.messageUrdu}
              onReset={handleReset}
              onToast={(msg) => setToastMessage(msg)}
            />

            {/* Middle Ad: 300 × 250 Medium Rectangle below Greeting Card */}
            <div className="flex justify-center py-3">
              <MediumRectangleAd />
            </div>
          </>
        )}

        {/* ======================================================== */}
        {/* 2. MIDDLE ADS ("Drmyan")                                 */}
        {/* ======================================================== */}
        {/* Interactive Wish Creator */}
        <WishCreator
          onWishCreated={handleWishCreated}
          initialName={recipientName}
        />

        {/* Mobile Large Banner (320 × 50) directly below Wish Creator */}
        <div className="flex justify-center py-4 px-2">
          <MobileBannerAd />
        </div>

        {/* Advance New Year Wishes Showcase Section */}
        <div id="advance-wishes" className="scroll-mt-20">
          <AdvanceWishesSection onSelectTemplate={handleSelectTemplate} />
        </div>

        {/* Dedicated Disclaimer & Legal Terms Component */}
        <Disclaimer onOpenPrivacyModal={() => setDisclaimerOpen(true)} />

        {/* ======================================================== */}
        {/* 3. END / BOTTOM ADS ("and py bhi lgana user ko ads show") */}
        {/* ======================================================== */}
        {/* Desktop End Ad (728 × 90 Leaderboard) */}
        <div className="hidden md:flex justify-center py-5">
          <LeaderboardAd />
        </div>
        {/* Mobile / Tablet End Ad (300 × 250 Medium Rectangle) */}
        <div className="flex md:hidden justify-center py-4">
          <MediumRectangleAd />
        </div>

        {/* Footer with Compliance and Brand Links */}
        <Footer
          onOpenAbout={() => setAboutOpen(true)}
          onOpenDisclaimer={() => setDisclaimerOpen(true)}
        />
      </div>

      {/* Modal Components for Legal Compliance and Professional Branding */}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <DisclaimerModal isOpen={disclaimerOpen} onClose={() => setDisclaimerOpen(false)} />

      {/* Floating Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
