import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'emerald' | 'outline' | 'glass';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  icon,
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-amber-400/15 text-amber-600 dark:text-amber-400 border border-amber-500/30',
    navy: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20',
    emerald: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30',
    outline: 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300',
    glass: 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 shadow-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors duration-300 ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
