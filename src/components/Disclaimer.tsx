import React, { useState } from 'react';
import { 
  ShieldAlert, 
  FileText, 
  Lock, 
  Scale, 
  Cookie, 
  Info, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

interface DisclaimerProps {
  onOpenPrivacyModal?: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onOpenPrivacyModal }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('terms');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const sections = [
    {
      id: 'terms',
      title: '1. Legal Terms of Service & Celebratory Purpose',
      icon: Scale,
      summary: 'Entertainment & goodwill celebration terms governing website access.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong className="text-amber-300">Advance Happy New Year 2027</strong>. This application is provided solely for personal goodwill, seasonal greetings, cultural celebration, and amusement. By visiting or using this website to generate customized greetings or countdown timers, you agree to these Legal Terms.
          </p>
          <p>
            All greeting messages, calculations, and visual animations are delivered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make reasonable efforts to maintain uptime and proper display formatting, but we provide no warranties regarding continuous uninterrupted service or delivery over external networks.
          </p>
        </div>
      ),
    },
    {
      id: 'privacy',
      title: '2. Privacy Policy & Client-Side Data Handling',
      icon: Lock,
      summary: 'Zero remote database storage. 100% private client-side execution.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            We take your digital privacy with the utmost seriousness. When you enter a recipient name or your own name into the wish generator:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
            <li>
              <strong className="text-slate-200">No Database Recording:</strong> Your entered name is never uploaded or saved to any central database or server log.
            </li>
            <li>
              <strong className="text-slate-200">Local Browser Processing:</strong> The greeting card and URL parameters (e.g. <code className="text-amber-200">?name=Ali</code>) execute directly within the visitor&apos;s own web browser.
            </li>
            <li>
              <strong className="text-slate-200">No Contact Harvesting:</strong> We do not access, scan, or store your contact lists, phone numbers, or WhatsApp address books.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'agreement',
      title: '3. User Agreement & Content Standards',
      icon: FileText,
      summary: 'Acceptable use standards and respect for cultural greetings.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Visitors agree to utilize the greeting personalization tool exclusively for lawful, respectful, and joyful celebratory purposes. Users shall not input or distribute names or content that:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
            <li>Is defamatory, abusive, harassing, obscene, or hateful.</li>
            <li>Attempts script injection or unauthorized manipulation of URL parameters.</li>
            <li>Violates the intellectual property or personal rights of any individual.</li>
          </ul>
          <p>
            Our software includes automated client-side input sanitization that strips HTML and script tags to safeguard all recipients.
          </p>
        </div>
      ),
    },
    {
      id: 'ads',
      title: '4. Third-Party Advertising & Cookies Policy',
      icon: Cookie,
      summary: 'Disclosure regarding sponsored network banners supporting our free service.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            To keep this celebration website entirely free for everyone worldwide without mandatory accounts or subscriptions, we display advertisements provided by third-party ad networks.
          </p>
          <p>
            These third-party advertising partners may place or read cookies, pixels, or device identifiers on your device to display relevant and non-intrusive advertisements. We do not control or endorse the products, services, or claims displayed within third-party advertising creatives. Visitors interact with third-party advertisers at their own discretion.
          </p>
        </div>
      ),
    },
    {
      id: 'trademarks',
      title: '5. Trademarks & Limitation of Liability',
      icon: Info,
      summary: 'Third-party brand acknowledgments and liability boundaries.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            WhatsApp, Facebook, Telegram, and X (formerly Twitter) are trademarks or registered trademarks of their respective owners. Mention of these platforms is strictly for functional compatibility (e.g. sharing direct click-to-chat links) and does not signify affiliation, endorsement, or sponsorship by those entities.
          </p>
          <p>
            To the maximum extent permitted by applicable law, the creators and operators of this site disclaim any liability for indirect, incidental, or consequential damages arising from site access or reliance on shared links.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="disclaimer" className="w-full max-w-4xl mx-auto px-4 py-16 scroll-mt-20">
      <div className="gold-card rounded-3xl p-6 sm:p-10 border border-amber-400/35 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-amber-400/20">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
              Legal Compliance & Trust Center
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Disclaimer & Legal Policies
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Please review the legal terms, user agreements, and privacy policies governing the <strong>Advance Happy New Year 2027</strong> platform. Click on any section below to review the full details:
        </p>

        {/* Accordion Sections */}
        <div className="space-y-3">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isExpanded = expandedSection === sec.id;
            return (
              <div
                key={sec.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#060a1c] border-amber-400/50 shadow-lg shadow-amber-500/5'
                    : 'bg-[#050817]/70 border-slate-800/90 hover:border-amber-400/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isExpanded ? 'bg-amber-500/25 text-amber-300' : 'bg-slate-800/80 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white">
                        {sec.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {sec.summary}
                      </p>
                    </div>
                  </div>
                  <div className="text-amber-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 animate-fadeIn">
                    {sec.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compliance Footer Note */}
        <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>GDPR & Privacy Compliant &middot; Valid for 2026 / 2027 Celebration</span>
          </div>
          {onOpenPrivacyModal && (
            <button
              onClick={onOpenPrivacyModal}
              className="text-amber-300 hover:text-white underline underline-offset-2 cursor-pointer font-medium"
            >
              Open Quick Modal View
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
