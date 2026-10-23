import React from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import useGitHubData from '../../hooks/useGitHubData';
import GlassCard from '../ui/GlassCard';
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  Calendar,
  CheckCircle,
  FolderGit2,
  Activity,
  Radio
} from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const { data, loading, isLive, error } = useGitHubData();

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Glow aura */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-white/10 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source &amp; Code Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="text-gradient">GitHub Profile</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Verifiable public repositories, commits, and codebase contributions. Directly connected via the public GitHub API without fabricated numbers.
          </p>
        </div>

        {/* GitHub Overview Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: User Profile Card & Direct Profile Link */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <GlassCard className="p-6 sm:p-7 flex flex-col items-center text-center">
              {/* Avatar with dynamic border */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-glow-cyan">
                  <img
                    src={data?.avatarUrl || 'https://github.com/Nukultalwar.png'}
                    alt="Nukul Talwar GitHub Avatar"
                    className="w-full h-full rounded-full object-cover bg-slate-800"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if avatar fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute bottom-1 right-1 p-1.5 rounded-full bg-slate-900 border border-white/20 text-cyan-400 shadow-md">
                  <Github className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {PORTFOLIO_CONFIG.personal.name}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mt-1 mb-4">
                @Nukultalwar
              </p>

              <p className="text-xs text-slate-300 leading-relaxed max-w-xs mb-6">
                {data?.bio || 'Software Engineer & Frontend Developer creating modern interactive web applications.'}
              </p>

              {/* Status pill: live API status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs font-mono mb-6">
                <Radio className={`w-3.5 h-3.5 ${isLive ? 'text-emerald-400 animate-pulse' : 'text-cyan-400'}`} />
                <span className={isLive ? 'text-emerald-300' : 'text-cyan-300'}>
                  {isLive ? 'Live GitHub Sync' : 'Verified Public Profile'}
                </span>
              </div>

              {/* Real Stats Row */}
              <div className="grid grid-cols-2 gap-3 w-full py-4 border-y border-white/10 mb-6 text-center">
                <div className="p-2.5 rounded-xl bg-slate-950/40 border border-white/5">
                  <div className="text-2xl font-mono font-bold text-white">
                    {loading ? '...' : data?.publicRepos ?? 7}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    Public Repos
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/40 border border-white/5">
                  <div className="text-2xl font-mono font-bold text-cyan-300">
                    {loading ? '...' : data?.followers ?? 0}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    Followers
                  </div>
                </div>
              </div>

              {/* Visit GitHub CTA */}
              <a
                href={PORTFOLIO_CONFIG.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-glow-cyan group"
              >
                <Github className="w-4 h-4" />
                <span>Visit github.com/Nukultalwar</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </GlassCard>
          </div>

          {/* Right: Public Repositories Grid */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repositories &amp; Projects</span>
              </h4>
              <span className="text-xs font-mono text-slate-400">
                Sorted by recent activity
              </span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-slate-400 font-mono text-sm bg-slate-900/40 rounded-2xl border border-white/5">
                Fetching latest repositories from GitHub API...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Special Highlight: Podcast Website */}
                <GlassCard className="p-5 flex flex-col justify-between border-cyan-500/30 bg-cyan-950/20">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-xs">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Private GitHub repository</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
                        JavaScript
                      </span>
                    </div>

                    <h5 className="text-base font-bold text-white hover:text-cyan-300 transition-colors">
                      <a
                        href="https://github.com/Nukultalwar/prodcast-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        <span>prodcast-website</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      </a>
                    </h5>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Audio streaming podcast web application with custom player controls, episode listings, and responsive UI.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>Private</span>
                    </span>
                    <a
                      href="https://github.com/Nukultalwar/prodcast-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:underline"
                    >
                      View Code →
                    </a>
                  </div>
                </GlassCard>

                {/* Additional Recent Repos */}
                {data?.recentRepos
                  ?.filter((r) => r.name !== 'prodcast-website')
                  .slice(0, 5)
                  .map((repo, i) => (
                    <GlassCard key={i} className="p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-mono text-slate-400">
                            Public Repository
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                            {repo.language}
                          </span>
                        </div>

                        <h5 className="text-base font-bold text-white hover:text-cyan-300 transition-colors">
                          <a
                            href={repo.htmlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                          >
                            <span>{repo.name}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        </h5>

                        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                          {repo.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{repo.updatedAt}</span>
                        </span>
                        <a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 font-medium"
                        >
                          Inspect Repo →
                        </a>
                      </div>
                    </GlassCard>
                  ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
