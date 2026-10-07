import React, { useState } from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { BOARDING_FEATURES } from '../../data/tisData';
import { Building2, Utensils, ShieldCheck, HeartPulse, HeartHandshake, Clock, Sun, Moon } from 'lucide-react';

export const BoardingLife: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(BOARDING_FEATURES[0].id);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-500" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-amber-500" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-amber-500" />;
      default: return <Building2 className="w-5 h-5 text-amber-500" />;
    }
  };

  const schedule = [
    { time: '06:00 AM', event: 'Morning Fitness, Yoga & Nature Walk', icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { time: '07:30 AM', event: 'Organic Breakfast & House Assembly', icon: <Utensils className="w-4 h-4 text-emerald-500" /> },
    { time: '08:30 AM', event: 'Academic Classes & STEM Lab Sessions', icon: <Clock className="w-4 h-4 text-blue-500" /> },
    { time: '04:00 PM', event: 'Sports Coaching, Equestrian & Clubs', icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { time: '06:30 PM', event: 'Evening Prep, Study Hour & Mentorship', icon: <Clock className="w-4 h-4 text-indigo-500" /> },
    { time: '08:30 PM', event: 'Multi-Cuisine Dinner & House Socializing', icon: <Utensils className="w-4 h-4 text-emerald-500" /> },
    { time: '09:30 PM', event: 'Light Reading & Night Lights Out', icon: <Moon className="w-4 h-4 text-slate-400" /> }
  ];

  return (
    <section id="boarding" className="py-24 bg-white dark:bg-[#0b101a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<Building2 className="w-3.5 h-3.5" />}>
              Residential Care
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Warm <span className="gradient-text-gold">Home Away From Home</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Our modern residential wing provides comfortable AC dormitories, nutritious organic dining, 24/7 medical surveillance, and round-the-clock pastoral mentorship.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BOARDING_FEATURES.map((feature, idx) => (
            <ScrollReveal key={feature.id} direction="up" delay={0.1 * idx}>
              <div
                onClick={() => setActiveFeature(feature.id)}
                className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer border ${
                  activeFeature === feature.id
                    ? 'bg-amber-500/10 dark:bg-amber-500/10 border-amber-500/60 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'glass-card border-slate-200/80 dark:border-slate-800 hover:border-amber-500/40'
                }`}
              >
                <div className="rounded-2xl overflow-hidden h-48 mb-6 relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  {feature.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold">{feature.badge}</Badge>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getIconComponent(feature.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Daily Schedule Timeline Component */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <Badge variant="gold">Daily Life Rhythm</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                A Day in the Life of a TIS Boarder
              </h3>
              <p className="text-xs text-slate-400">
                Structured routine instilling discipline, healthy habits, and balanced extracurricular growth.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {schedule.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/40 transition-colors"
                >
                  <div className="w-24 text-xs font-bold text-amber-400 shrink-0 flex items-center gap-1.5">
                    {item.icon}
                    <span>{item.time}</span>
                  </div>
                  <div className="h-4 w-px bg-slate-700 shrink-0" />
                  <p className="text-sm font-medium text-slate-200">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
