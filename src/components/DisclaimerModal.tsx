import React, { useEffect, useState } from 'react';
import { X, ShieldAlert, FileText, Scale, Eye, Cookie, Info } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'disclaimer' | 'advertising' | 'privacy'>('disclaimer');

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
      aria-labelledby="disclaimer-modal-title"
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
          aria-label="Close Disclaimer dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-amber-400/20">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
              Legal Compliance & Governance
            </span>
            <h2 id="disclaimer-modal-title" className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Disclaimer & Privacy Notice
            </h2>
          </div>
        </div>

        {/* Tabs for quick structured reading */}
        <div className="flex items-center gap-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Disclaimer
          </button>
          <button
            onClick={() => setActiveTab('advertising')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'advertising'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Ad Policy
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Privacy Notice
          </button>
        </div>

        {/* Tab 1: General Disclaimer */}
        {activeTab === 'disclaimer' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
            <div className="p-4 rounded-xl bg-[#060a1c] border border-slate-800">
              <h3 className="text-sm font-semibold text-amber-300 mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                1. General Celebration & Entertainment Purpose
              </h3>
              <p>
                All greetings, countdown counters, quotes, and visual effects on this website are published solely for personal celebration, goodwill, entertainment, and social sharing between users. While we strive to present accurate calculations and positive messaging, all features are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060a1c] border border-slate-800">
              <h3 className="text-sm font-semibold text-amber-300 mb-1 flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-400" />
                2. Limitation of Liability
              </h3>
              <p>
                In no event shall the website owners, developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, network delays on celebratory days, or third-party links accessed from the platform.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060a1c] border border-slate-800">
              <h3 className="text-sm font-semibold text-amber-300 mb-1 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                3. Third-Party Trademarks
              </h3>
              <p>
                All company names, brand logos, and service marks mentioned (such as WhatsApp, Facebook, Telegram, and X / Twitter) are the property of their respective trademark holders. Reference to them is purely functional to enable user-initiated sharing and implies no endorsement or corporate affiliation.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Advertising Policy */}
        {activeTab === 'advertising' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
            <div className="p-4 rounded-xl bg-[#060a1c] border border-slate-800">
              <h3 className="text-sm font-semibold text-amber-300 mb-1 flex items-center gap-2">
                <Cookie className="w-4 h-4 text-amber-400" />
                Third-Party Advertising Disclosure
              </h3>
              <p className="mb-2">
                This website is made available free of charge through the inclusion of third-party advertisements and network banners.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>Third-party ad networks (such as ad exchanges and CPM platforms) may use cookies, web beacons, or unique device identifiers to deliver relevant advertisements.</li>
                <li>We do not control, monitor, or endorse the claims, software, services, or goods advertised in third-party banners.</li>
                <li>Users interact with sponsored advertisements and external landing pages at their sole discretion and risk.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Privacy Notice */}
        {activeTab === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
            <div className="p-4 rounded-xl bg-[#060a1c] border border-slate-800">
              <h3 className="text-sm font-semibold text-amber-300 mb-1 flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-400" />
                User-Generated Name Privacy
              </h3>
              <p className="mb-2">
                We believe in zero data harvesting. When you create personalized wishes:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>Your name is processed entirely on the client side (in your web browser) or encoded directly within your shareable URL parameter (e.g. <code className="text-amber-200">?name=Ali</code>).</li>
                <li>We do not store your name, recipient details, phone numbers, or IP logs in any database.</li>
                <li>You maintain full control over who you choose to send your personalized link to.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Last Updated: 2026 / 2027 Season &middot; Compliance Verified
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-950 gold-button cursor-pointer"
          >
            I Agree & Close
          </button>
        </div>
      </div>
    </div>
  );
};
