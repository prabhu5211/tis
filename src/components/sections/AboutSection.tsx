import React from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Compass, BookOpen, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-amber-500" />,
      title: "Academic Rigor",
      description: "Combining CBSE syllabus with international IB & Cambridge methodologies for multi-dimensional learning."
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      title: "Gurukul Value System",
      description: "Rooted in timeless Indian morals, respect for elders, self-discipline, and environmental consciousness."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-500" />,
      title: "Pastoral Excellence",
      description: "Dedicated resident mentors providing round-the-clock emotional, social, and psychological care."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      title: "Global Citizenship",
      description: "Fostering international student exchanges, Model UN conferences, and global university preparation."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0b101a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
              The TIS Experience
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Where Character Meets <span className="gradient-text-gold">World-Class Education</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Nestled against the picturesque Shivalik ranges in Dehradun, Tula's International School is envisioned as a sanctuary of learning where young minds are nurtured into confident, compassionate global leaders.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid Showcase: Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Visual Composition */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
                    alt="Tulas Campus Building"
                    className="w-full h-[420px] object-cover tis-photo-warm"
                  />
                </div>
                {/* Floating Stat Overlay */}
                <div className="absolute -bottom-8 -right-4 sm:right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-800 max-w-xs">
                  <span className="text-4xl font-extrabold text-amber-400 font-heading">100+</span>
                  <p className="text-sm font-semibold text-slate-200 mt-1">Acres of Pollution-Free Eco Campus in Dehradun</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Core Pillars Grid */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
                Built Upon Four Pillars of Holistic Excellence
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                At TIS, we believe education extends far beyond textbooks. Our holistic curriculum blends academic rigor with athletic mastery, ethical leadership, and technological fluency.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <ScrollReveal key={pillar.title} direction="up" delay={0.1 * idx}>
                  <div className="p-5 rounded-2xl glass-card hover:border-amber-500/50 transition-all duration-300 group">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit mb-3 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
