import React, { useState } from 'react';
import { Terminal, Copy, Check, ExternalLink, Github, Sparkles } from 'lucide-react';

interface GitHubDeploymentGuideProps {
  onToast: (msg: string) => void;
}

export const GitHubDeploymentGuide: React.FC<GitHubDeploymentGuideProps> = ({ onToast }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const steps = [
    {
      title: '1. Clone or Download Project',
      command: 'git clone https://github.com/your-username/new-year-2027.git\ncd new-year-2027',
      desc: 'Create or clone your repository to your local computer.',
    },
    {
      title: '2. Install All Dependencies',
      command: 'npm install',
      desc: 'Installs React 19, Vite, Tailwind CSS, Lucide icons, and canvas-confetti.',
    },
    {
      title: '3. Test Locally in Development',
      command: 'npm run dev',
      desc: 'Starts local preview server at http://localhost:3000.',
    },
    {
      title: '4. Build Production Bundle',
      command: 'npm run build',
      desc: 'Compiles optimized, minified production assets into the "dist" folder with relative path support (base: "./").',
    },
    {
      title: '5. Deploy to GitHub Pages (Automated)',
      command: 'npm run deploy',
      desc: 'Runs predeploy build and publishes the "dist" folder directly to your gh-pages branch in one command!',
    },
  ];

  const handleCopy = async (cmd: string, index: number) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopiedIndex(index);
      onToast(`Command copied: "${cmd.split('\n')[0]}"`);
      setTimeout(() => setCopiedIndex(null), 2500);
    } catch {
      onToast('Failed to copy command');
    }
  };

  return (
    <section id="deployment-guide" className="w-full max-w-4xl mx-auto px-4 py-16 scroll-mt-20">
      <div className="gold-card rounded-3xl p-6 sm:p-10 border-amber-400/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              GitHub Pages Deployment Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Host & share this website 100% free with custom personalized URL support
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          This project is pre-configured with <code className="text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded">base: &apos;./&apos;</code> in <code className="text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded">vite.config.ts</code> and includes the <code className="text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded">gh-pages</code> deployment package. Follow these 5 exact steps:
        </p>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-[#050817] rounded-xl p-4 border border-slate-800 hover:border-amber-400/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs sm:text-sm font-semibold text-amber-300">
                  {step.title}
                </span>
                <span className="text-[11px] text-slate-400">Step {idx + 1} of 5</span>
              </div>
              <p className="text-xs text-slate-400 mb-2.5">{step.desc}</p>
              
              <div className="relative group bg-slate-950 rounded-lg p-3 font-mono text-xs text-amber-200/90 border border-slate-800/80 flex items-center justify-between overflow-x-auto">
                <pre className="whitespace-pre">{step.command}</pre>
                <button
                  onClick={() => handleCopy(step.command, idx)}
                  className="ml-3 p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Pages Setting note */}
        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs text-slate-300 leading-relaxed">
          <strong className="text-amber-300 block mb-1">
            💡 One-Time GitHub Repository Setting:
          </strong>
          Go to your GitHub repository &rarr; <strong>Settings</strong> &rarr; <strong>Pages</strong>. Under <strong>Build and deployment</strong>, set Source to <strong>Deploy from a branch</strong>, select the <strong className="text-amber-200">gh-pages</strong> branch, and click <strong>Save</strong>. Your website will be live in 60 seconds at <code className="text-amber-300">https://yourusername.github.io/new-year-2027/</code>!
        </div>
      </div>
    </section>
  );
};
