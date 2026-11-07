import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { TimeLeft } from '../types';
import { soundEffects } from '../utils/audio';

const TARGET_DATE = new Date('2027-01-01T00:00:00').getTime();

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const now = Date.now();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true,
        totalSeconds: 0,
      };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isComplete: false,
      totalSeconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerCelebration = () => {
    soundEffects.playCelebrationChime();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FDE68A', '#FCD34D', '#3B82F6', '#EF4444', '#10B981'],
    });
  };

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days, urdu: 'دن' },
    { label: 'Hours', value: timeLeft.hours, urdu: 'گھنٹے' },
    { label: 'Minutes', value: timeLeft.minutes, urdu: 'منٹ' },
    { label: 'Seconds', value: timeLeft.seconds, urdu: 'سیکنڈ' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Subtitle kicker with subtle typography */}
      <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm tracking-widest uppercase text-amber-300/80 font-medium">
        <span>Target: January 1, 2027</span>
        <span aria-hidden="true">·</span>
        <span>00:00:00 Midnight</span>
        <span aria-hidden="true">·</span>
        <span>Advance Countdown</span>
      </div>

      {timeLeft.isComplete ? (
        <div className="gold-card rounded-2xl p-8 text-center border-amber-400/50">
          <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold gold-gradient-text mb-3">
            HAPPY NEW YEAR 2027!
          </h2>
          <p className="text-amber-100 text-lg">
            May this year bring limitless joy, health, prosperity, and peace!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="gold-card rounded-2xl p-4 md:p-6 text-center flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:border-amber-400/40"
            >
              {/* Subtle top golden light line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

              {/* Number display */}
              <div className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight gold-gradient-text tabular-nums gold-glow-subtle select-none">
                {String(block.value).padStart(2, '0')}
              </div>

              {/* Label */}
              <div className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wider text-slate-300">
                {block.label}
              </div>

              {/* Urdu Label */}
              <div className="text-[11px] text-amber-300/60 font-urdu mt-0.5">
                {block.urdu}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Celebrate now button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={triggerCelebration}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold text-slate-900 gold-button cursor-pointer"
          title="Trigger celebratory confetti and sound"
        >
          <Sparkles className="w-4 h-4" />
          <span>Celebrate & Pop Confetti</span>
        </button>
      </div>
    </div>
  );
};
