import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'indigo' | 'emerald' | 'none';
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  onClick,
  hoverEffect = true,
}) => {
  const glowMap = {
    cyan: 'hover:border-cyan-500/40 hover:shadow-glow-cyan',
    purple: 'hover:border-purple-500/40 hover:shadow-glow-purple',
    indigo: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.35)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.35)]',
    none: '',
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl bg-slate-900/60 backdrop-blur-xl
        border border-white/[0.08]
        transition-all duration-300 ease-out
        ${hoverEffect ? `glass-panel-hover ${glowMap[glowColor]}` : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </div>
  );
};

export default GlassCard;
