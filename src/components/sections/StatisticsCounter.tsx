import React from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { SCHOOL_STATS } from '../../data/tisData';
import { GraduationCap, Trees, Users, Trophy } from 'lucide-react';

export const StatisticsCounter: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-amber-500" />;
      case 'Trees': return <Trees className="w-8 h-8 text-emerald-500" />;
      case 'Users': return <Users className="w-8 h-8 text-blue-500" />;
      case 'Trophy': return <Trophy className="w-8 h-8 text-amber-400" />;
      default: return <GraduationCap className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SCHOOL_STATS.map((stat, idx) => (
            <ScrollReveal key={stat.id} direction="up" delay={0.1 * idx}>
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1">
                <div className="p-4 rounded-2xl bg-slate-800/80 w-fit mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(stat.iconName)}
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl sm:text-6xl font-extrabold text-white font-heading tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-3xl font-extrabold text-amber-400 font-heading">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-200 mt-2 font-heading">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
