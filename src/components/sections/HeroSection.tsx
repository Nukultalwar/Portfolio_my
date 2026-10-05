import React from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import HeroScene3D from '../3d/HeroScene3D';
import { ArrowRight, Github, Mail, Sparkles, Code2, Terminal, ExternalLink } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            
            {/* Open to Opportunities Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-lg mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                {PORTFOLIO_CONFIG.personal.status.text}
              </span>
              <span className="hidden sm:inline text-[10px] text-slate-400 font-mono border-l border-white/10 pl-2">
                Frontend &amp; Software Roles
              </span>
            </div>

            {/* Main Greeting & Identity */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I’m{' '}
              <span className="text-gradient">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
            </h1>

            {/* Role Title with Cybernetic Accent */}
            <div className="inline-block mb-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                {PORTFOLIO_CONFIG.personal.role}
              </h2>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              {PORTFOLIO_CONFIG.personal.tagline}
            </p>

            {/* CTAs: View Projects, GitHub, Let's Talk */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Primary: View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-glow-cyan hover:shadow-cyan-500/50 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* GitHub Button */}
              <a
                href={PORTFOLIO_CONFIG.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-white/10 hover:border-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md group"
              >
                <Github className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>

              {/* Let's Talk Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-cyan-300 font-semibold text-sm border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Let’s Talk</span>
              </button>
            </div>

            {/* Trust Highlights Grid for Recruiters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/40 border border-white/5">
                <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">React &amp; Modern JS</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/40 border border-white/5">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Interactive 3D Web</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/40 border border-white/5 col-span-2 sm:col-span-1">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Clean Architecture</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Three.js Interactive Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroScene3D />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
