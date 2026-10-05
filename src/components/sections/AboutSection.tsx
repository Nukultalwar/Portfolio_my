import React from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import { Layout, Code, Smartphone, Database, CheckCircle2, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-6 h-6 text-cyan-400" />,
    Code: <Code className="w-6 h-6 text-indigo-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-purple-400" />,
    Database: <Database className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Nukul Talwar</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Frontend-focused Software Engineer passionate about translating concepts into elegant, robust, and accessible digital reality.
          </p>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 flex flex-col">
            <GlassCard className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>Passionate About Clean, Interactive Web Experiences</span>
                </h3>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {PORTFOLIO_CONFIG.about.summary}
                </p>

                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Whether developing dynamic audio-streaming platforms like my Podcast Website, architecting interactive dashboards, or exploring 3D graphics in Three.js, I treat engineering as a craft. I balance design aesthetics with clean state management, modular component breakdown, and cross-browser consistency.
                </p>
              </div>

              {/* Developer Mindset Checklist */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Component-driven architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Semantics &amp; accessibility first</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Clean Git branching workflows</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Performance profiling &amp; speed</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: 4 Core Focus Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {PORTFOLIO_CONFIG.about.highlights.map((item, idx) => (
              <GlassCard
                key={idx}
                className="p-5 flex items-start gap-4"
                glowColor={idx % 2 === 0 ? 'cyan' : 'purple'}
              >
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 shrink-0 mt-0.5">
                  {iconMap[item.icon] || <Code className="w-6 h-6 text-cyan-400" />}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
