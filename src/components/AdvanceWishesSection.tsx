import React from 'react';
import { Heart, Sparkles, Send, Clock, Users, ArrowUpRight } from 'lucide-react';
import { WISH_TEMPLATES } from '../data/wishTemplates';

interface AdvanceWishesSectionProps {
  onSelectTemplate: (templateId: string) => void;
}

export const AdvanceWishesSection: React.FC<AdvanceWishesSectionProps> = ({ onSelectTemplate }) => {
  const cards = [
    {
      badge: 'Early Bird Joy',
      title: 'Be the First to Send Blessings',
      description:
        'Don’t wait for the midnight rush when networks get congested! Express your heartfelt love, respect, and warmest prayers well before New Year’s Eve.',
      icon: Clock,
      templateId: 'classic',
      urdu: 'سب سے پہلے اپنے پیاروں کو پیشگی مبارکباد بھیجیں اور ان کے چہروں پر مسکراہٹ لائیں۔',
    },
    {
      badge: 'Family & Loved Ones',
      title: 'Cherish Special Bonds',
      description:
        'Dedicated wishes crafted with genuine care for parents, siblings, spouses, and dearest friends who make life extraordinary.',
      icon: Heart,
      templateId: 'blessings',
      urdu: 'والدین، بہن بھائیوں اور خاص دوستوں کے لیے خلوص بھری دعائیں اور نیک تمنائیں!',
    },
    {
      badge: 'Success & Colleagues',
      title: 'Inspire Growth in 2027',
      description:
        'Motivate your team, partners, clients, and mentors with a triumphant vision of flourishing prosperity in 2027.',
      icon: Users,
      templateId: 'prosperity',
      urdu: 'کاروباری ساتھیوں اور دوستوں کے لیے شاندار ترقی اور بے مثال کامیابیوں کی دعا۔',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Early Celebrations</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Send Advance New Year Wishes to Your Loved Ones
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Sharing early wishes shows you were thinking of them before anyone else. Pick an inspiring theme and send an unforgettable personalized blessing today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="gold-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/80">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {card.description}
                </p>

                <p className="text-amber-300/70 font-urdu text-sm leading-relaxed mb-6">
                  {card.urdu}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectTemplate(card.templateId);
                  const el = document.getElementById('create-wish');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-900 gold-button flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Personalize & Send</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
