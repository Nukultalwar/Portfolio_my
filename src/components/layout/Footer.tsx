import React from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05070a]/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Col 1: Brand & Role */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-300 text-xs">
                  NT
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {PORTFOLIO_CONFIG.personal.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {PORTFOLIO_CONFIG.personal.role}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed mt-2">
              {PORTFOLIO_CONFIG.personal.tagline}
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a
                href={PORTFOLIO_CONFIG.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 flex items-center justify-center transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_CONFIG.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 flex items-center justify-center transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.personal.contactEmail}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 flex items-center justify-center transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-2">
              <a
                href={`mailto:${PORTFOLIO_CONFIG.personal.contactEmail}`}
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                title="Send email to Nukul Talwar"
              >
                <span>{PORTFOLIO_CONFIG.personal.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About Nukul
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-cyan-300 transition-colors">
                  GitHub &amp; Code
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact &amp; Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Status & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Recruiter Status
              </h4>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 leading-relaxed">
                <div className="flex items-center gap-2 text-emerald-400 font-medium mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available Immediately
                </div>
                Ready to contribute to Software Engineering &amp; Frontend positions.
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nukul Talwar. Crafted with precision for recruiters &amp; collaborators.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Powered by React, Three.js &amp; Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
