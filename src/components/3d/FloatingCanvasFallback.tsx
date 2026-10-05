import React from 'react';
import { Code2, Layers, Cpu, Sparkles } from 'lucide-react';

export const FloatingCanvasFallback: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Glow rings */}
      <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 animate-pulse-subtle" />
      <div className="absolute w-96 h-96 rounded-full border border-indigo-500/15 animate-spin [animation-duration:40s]" />
      
      {/* Central Glass Hexagon / Node */}
      <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-600/20 to-purple-600/10 backdrop-blur-xl border border-cyan-400/30 shadow-glow-cyan flex flex-col items-center justify-center p-6 text-center animate-float-slow">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-3 text-cyan-300">
          <Code2 className="w-8 h-8" />
        </div>
        <div className="font-bold text-white text-base sm:text-lg">Frontend Core</div>
        <div className="text-xs text-slate-300 mt-1 font-mono">React • TypeScript • Three.js</div>
      </div>

      {/* Floating Badges */}
      <div className="absolute top-12 left-10 p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-lg flex items-center gap-2.5 animate-float-slow [animation-delay:1s]">
        <Layers className="w-5 h-5 text-indigo-400" />
        <span className="text-xs font-medium text-slate-200">Component Design</span>
      </div>

      <div className="absolute bottom-16 right-8 p-3 rounded-2xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-md shadow-lg flex items-center gap-2.5 animate-float-slow [animation-delay:2s]">
        <Cpu className="w-5 h-5 text-purple-400" />
        <span className="text-xs font-medium text-slate-200">Modern Architecture</span>
      </div>

      <div className="absolute bottom-8 left-16 p-2.5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float-slow [animation-delay:3s]">
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <span className="text-xs font-medium text-slate-200">Fluid Micro-interactions</span>
      </div>
    </div>
  );
};

export default FloatingCanvasFallback;
