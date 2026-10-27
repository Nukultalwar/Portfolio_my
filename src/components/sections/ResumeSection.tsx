import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import confetti from 'canvas-confetti';
import {
  FileText,
  Download,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Briefcase,
  Award,
  Sparkles
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Fire celebratory confetti for recruiters opening resume
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#c084fc']
      });
    } catch {
      // Ignore if confetti fails
    }

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-cyan-500/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recruiter Quick Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Curriculum <span className="text-gradient">Vitae &amp; Resume</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Download my updated resume or view my professional profile on LinkedIn for software engineer and frontend opportunities.
          </p>
        </div>

        {/* Central Resume Feature Box */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12 relative overflow-hidden" glowColor="cyan">
            
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {PORTFOLIO_CONFIG.personal.name} — Resume
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">
                    Software Engineer &amp; Frontend Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for Recruitment</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {PORTFOLIO_CONFIG.resumeHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col gap-1"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Download Resume & LinkedIn */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Download Resume Button */}
              <a
                href={PORTFOLIO_CONFIG.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-glow-cyan hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-0.5 active:scale-95 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* LinkedIn Button */}
              <a
                href={PORTFOLIO_CONFIG.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5 shadow-md group"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Notification alert after clicking resume */}
            {downloadSuccess && (
              <div className="mt-5 p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-center text-xs font-mono text-cyan-300 animate-in fade-in">
                ✓ Opening resume in a new tab!
              </div>
            )}

            {/* Configurable Note */}
            <div className="mt-6 text-center text-[11px] font-mono text-slate-500">
              Direct LinkedIn URL: <a href={PORTFOLIO_CONFIG.personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400/80 hover:underline">https://www.linkedin.com/in/nukul-talwar-84a574211/</a>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
