import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import { Code2, Cpu, Terminal, Sparkles, Check, Layers, GitBranch, Globe } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_CONFIG.skillsCategories.map((c) => c.title)];

  const categoryIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
    Terminal: <Terminal className="w-5 h-5 text-purple-400" />,
  };

  const levelBadge = (level: string) => {
    switch (level) {
      case 'Core':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            Core Skill
          </span>
        );
      case 'Advanced':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
            Proficient
          </span>
        );
      case 'Familiar':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-700/60 text-slate-300 border border-slate-600">
            Foundation
          </span>
        );
      default:
        return null;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? PORTFOLIO_CONFIG.skillsCategories
      : PORTFOLIO_CONFIG.skillsCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Real, practical frontend tools and programming foundations applied across projects. Demonstrated through clean architecture and verifiable code.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500/25 to-indigo-600/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <GlassCard
              key={catIdx}
              className="p-6 sm:p-7 flex flex-col justify-between"
              glowColor={catIdx === 0 ? 'cyan' : catIdx === 1 ? 'indigo' : 'purple'}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10">
                    {categoryIcons[category.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/15 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        {levelBadge(skill.level)}
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        {skill.experienceFocus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Pill */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in code</span>
                <span className="text-cyan-400 font-semibold">{category.skills.length} competencies</span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
