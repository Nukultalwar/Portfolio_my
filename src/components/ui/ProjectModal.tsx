import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900/95 border border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-10 text-slate-100 flex flex-col gap-5 custom-scrollbar">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase"
                style={{
                  backgroundColor: `${project.accentColor}20`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}40`,
                }}
              >
                {project.category}
              </span>
              {project.statusText && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {project.statusText}
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-cyan-300/90 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Two columns on desktop to eliminate vertical scroll */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Left Column: Overview, Architecture, Tech Stack */}
          <div className="md:col-span-6 flex flex-col gap-4">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {project.longDescription}
              </p>
            </div>

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-1">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Architecture &amp; State Management
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Technologies &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Engineering Features */}
          <div className="md:col-span-6 flex flex-col gap-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Key Engineering Features
            </h3>
            <ul className="flex flex-col gap-2">
              {project.keyFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/50 border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all border border-slate-700 hover:border-slate-500 shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-glow-cyan"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          ) : (
            <span
              title="Live deployment can be configured in portfolio data"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/40 text-slate-400 text-xs font-mono border border-slate-800 cursor-not-allowed"
            >
              Live Demo: Configurable on Deployment
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
