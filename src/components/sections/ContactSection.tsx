import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.personal.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s <span className="text-gradient">Connect &amp; Talk</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Interested in hiring me for Software Engineer or Frontend Developer opportunities? Send a message directly or connect via LinkedIn and GitHub.
          </p>
        </div>

        {/* Contact Info & Channels */}
        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-6 sm:p-8" glowColor="cyan">
            <h3 className="text-xl font-bold text-white mb-2">
              Get in Touch Directly
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              I am actively reviewing full-time, contract, remote and onsite frontend and software engineering positions.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3 overflow-hidden">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.personal.contactEmail}`}
                  aria-label={`Send email to ${PORTFOLIO_CONFIG.personal.contactEmail}`}
                  className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 transition-colors shrink-0"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Contact Email
                  </div>
                  <a
                    href={`mailto:${PORTFOLIO_CONFIG.personal.contactEmail}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors truncate block underline-offset-2 hover:underline"
                    title="Click to open email client"
                  >
                    {PORTFOLIO_CONFIG.personal.contactEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shrink-0 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <a
                href={PORTFOLIO_CONFIG.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-medium">LinkedIn Profile</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  Connect →
                </span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs sm:text-sm font-medium">GitHub Repositories</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  Explore →
                </span>
              </a>
            </div>

            {/* Environment Variables Info Box */}
            <div className="mt-8 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-[11px] font-mono text-slate-400 leading-relaxed">
              <span className="text-cyan-300 font-semibold block mb-1">
                💡 Production Security Note:
              </span>
              Configure <code className="text-slate-200">VITE_FORMSPREE_ENDPOINT</code> and set Formspree notifications to <code className="text-slate-200">nukultalwar@gmail.com</code>. No private API credentials are exposed in client code.
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
