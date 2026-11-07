import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-bounce-subtle">
      <div className="bg-[#0b1227] border border-amber-400/80 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-amber-500/30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5 text-amber-400" />
        </div>
        <p className="text-xs sm:text-sm font-medium text-slate-100 flex-1">
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5 rounded cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
