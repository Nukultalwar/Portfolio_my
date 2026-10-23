import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  AtSign,
  FileQuestion,
  Linkedin,
  Github,
  Copy,
  Check
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validate form fields
  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the subject or role title.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message or project details.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.personal.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    // Formspree's endpoint ID is public; delivery recipients are configured in Formspree.
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!formspreeEndpoint) {
      setStatus('error');
      setErrorMessage(
        'The contact form is not configured yet. Please use the mail client option or try again later.'
      );
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _subject: formData.subject.trim(),
          _replyto: formData.email.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(
          `The email service returned an error (${response.status}). Please try again or use the mail client option.`
        );
      }

      setStatus('success');
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#818cf8', '#c084fc']
        });
      } catch {
        // Ignore
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong while sending. Please try again or use the mail client option.'
      );
    }
  };

  // Direct mailto link fallback
  const mailtoLink = `mailto:${PORTFOLIO_CONFIG.personal.contactEmail}?subject=${encodeURIComponent(
    formData.subject || 'Opportunity Inquiry for Nukul Talwar'
  )}&body=${encodeURIComponent(
    `Hi Nukul,\n\n${formData.message || ''}\n\nFrom: ${formData.name || ''} (${formData.email || ''})`
  )}`;

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Recruiter Notes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
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

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-10" glowColor="purple">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Thanks! Your message has been sent successfully.</h4>
                  <p className="text-slate-300 text-sm max-w-md leading-relaxed mb-6">
                    I have received your message details and will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name / Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        required
                        minLength={2}
                        maxLength={120}
                        aria-invalid={Boolean(errors.name)}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Sarah Jenkins or Tech Recruiters"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border ${
                          errors.name ? 'border-rose-500' : 'border-white/10 focus:border-cyan-500'
                        } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <AtSign className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        aria-invalid={Boolean(errors.email)}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. sarah.jenkins@company.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-500'
                        } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Subject / Opportunity Role
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <FileQuestion className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        maxLength={160}
                        aria-invalid={Boolean(errors.subject)}
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: undefined });
                        }}
                        placeholder="e.g. Frontend Engineer Position at Acme"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border ${
                          errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-cyan-500'
                        } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all`}
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      minLength={10}
                      maxLength={5000}
                      aria-invalid={Boolean(errors.message)}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Hi Nukul, we came across your portfolio and are impressed by your React and Three.js projects. We'd love to chat about..."
                      className={`w-full p-4 rounded-xl bg-slate-950/60 border ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-500'
                      } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center gap-3 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button & Mailto Quick Option */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-glow-cyan transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono border border-slate-700 transition-colors"
                      title="Open default email application"
                    >
                      <span>Mail Client</span>
                    </a>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
