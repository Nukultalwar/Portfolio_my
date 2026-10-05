import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import {
  Compass,
  PenTool,
  Code,
  Layers,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Workflow
} from 'lucide-react';

export const HowIBuildSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [
    <Compass className="w-5 h-5 text-cyan-400" />,
    <PenTool className="w-5 h-5 text-indigo-400" />,
    <Code className="w-5 h-5 text-purple-400" />,
    <Layers className="w-5 h-5 text-emerald-400" />,
    <CheckCircle2 className="w-5 h-5 text-amber-400" />,
    <Rocket className="w-5 h-5 text-rose-400" />,
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            A disciplined, production-minded lifecycle from initial problem discovery to continuous web deployment.
          </p>
        </div>

        {/* 6-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.howIBuild.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <GlassCard
                key={step.number}
                className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isSelected ? 'glass-panel-active border-cyan-500/50' : ''
                }`}
                glowColor={idx % 2 === 0 ? 'cyan' : 'purple'}
                onClick={() => setActiveStep(idx)}
              >
                <div>
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10">
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300/80 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Outcomes
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Linear Workflow Sequence Ribbon */}
        <div className="mt-12 hidden lg:flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-md">
          {PORTFOLIO_CONFIG.howIBuild.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl cursor-pointer transition-all ${
                  activeStep === idx
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="font-mono text-xs">{step.number}.</span>
                <span className="text-xs font-medium">{step.title}</span>
              </div>
              {idx < PORTFOLIO_CONFIG.howIBuild.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-600" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIBuildSection;
