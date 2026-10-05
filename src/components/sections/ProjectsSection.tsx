import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import { Project } from '../../types';
import GlassCard from '../ui/GlassCard';
import ProjectModal from '../ui/ProjectModal';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Maximize2,
  FolderGit2,
  Headphones,
  Film,
  Compass,
  CloudSun,
  HelpCircle,
  CheckSquare
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Utility', 'Interactive'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_CONFIG.projects
      : PORTFOLIO_CONFIG.projects.filter((p) => p.category === activeCategory);

  // Helper for project preview visuals
  const renderProjectVisual = (project: Project) => {
    const iconStyle = { color: project.accentColor };

    const projectIcon = () => {
      switch (project.id) {
        case 'podcast-website':
          return <Headphones className="w-12 h-12" style={iconStyle} />;
        case 'netflix-clone':
          return <Film className="w-12 h-12" style={iconStyle} />;
        case 'movie-recommendation':
          return <Compass className="w-12 h-12" style={iconStyle} />;
        case 'weather-app':
          return <CloudSun className="w-12 h-12" style={iconStyle} />;
        case 'quick-quiz':
          return <HelpCircle className="w-12 h-12" style={iconStyle} />;
        case 'todo-app':
          return <CheckSquare className="w-12 h-12" style={iconStyle} />;
        default:
          return <Layers className="w-12 h-12" style={iconStyle} />;
      }
    };

    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 flex flex-col items-center justify-center p-6 group/preview">
        {/* Glow ambient circle */}
        <div
          className="absolute w-36 h-36 rounded-full blur-2xl opacity-20 transition-all duration-500 group-hover/preview:scale-125 group-hover/preview:opacity-40"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 tech-grid-bg opacity-30" />

        {/* Dynamic Project Emblem */}
        <div className="relative z-10 flex flex-col items-center gap-3 transform group-hover/preview:-translate-y-1 transition-transform duration-300">
          <div
            className="p-4 rounded-2xl backdrop-blur-md border shadow-lg transition-transform duration-300 group-hover/preview:scale-110"
            style={{
              backgroundColor: `${project.accentColor}15`,
              borderColor: `${project.accentColor}35`,
            }}
          >
            {projectIcon()}
          </div>
          <span className="font-mono text-xs font-semibold text-slate-300 tracking-wider">
            {project.title}
          </span>
        </div>

        {/* Click to expand hover overlay */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-cyan-300 font-mono text-xs font-medium">
          <Maximize2 className="w-4 h-4" />
          <span>Click to Inspect Architecture</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Real software and interactive web applications built with clean React, JavaScript, and responsive design. Explore verified code and project architectures.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500/25 to-indigo-600/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="p-5 sm:p-6 flex flex-col justify-between group"
              glowColor="cyan"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Visual Preview */}
                {renderProjectVisual(project)}

                {/* Project Header Info */}
                <div className="mt-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase"
                      style={{
                        backgroundColor: `${project.accentColor}20`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}40`,
                      }}
                    >
                      {project.category}
                    </span>

                    {project.statusText && (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
                        {project.statusText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-cyan-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>

                  <p className="text-xs font-mono text-cyan-300/80 mt-1 mb-2.5">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub & Modal/Demo */}
              <div
                className="pt-4 border-t border-white/10 flex items-center justify-between gap-2"
                onClick={(e) => e.stopPropagation()} // Prevent card click when clicking action buttons
              >
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 hover:border-slate-500 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 font-mono">Repo Configurable</span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
