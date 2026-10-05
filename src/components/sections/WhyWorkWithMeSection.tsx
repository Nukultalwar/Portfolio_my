import React from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import {
  FolderGit2,
  Layers,
  Lightbulb,
  Sparkles,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const WhyWorkWithMeSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FolderGit2: <FolderGit2 className="w-6 h-6 text-cyan-400" />,
    Layers: <Layers className="w-6 h-6 text-indigo-400" />,
    Lightbulb: <Lightbulb className="w-6 h-6 text-purple-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Value &amp; Engineering Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work With <span className="text-gradient">Nukul</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            What I bring to engineering teams: practical execution, solid frontend fundamentals, problem-solving tenacity, and an active growth mindset.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PORTFOLIO_CONFIG.whyWorkWithMe.map((pillar, idx) => (
            <GlassCard
              key={pillar.title}
              className="p-7 sm:p-8 flex flex-col justify-between"
              glowColor={idx === 0 ? 'cyan' : idx === 1 ? 'indigo' : idx === 2 ? 'purple' : 'emerald'}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/10 shrink-0">
                    {iconMap[pillar.iconName] || <FolderGit2 className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                {pillar.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
