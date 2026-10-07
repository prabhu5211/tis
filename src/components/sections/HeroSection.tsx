import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Calendar, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../animation/ScrollReveal';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Image & Blur Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop"
          alt="Tulas International School Campus"
          className="w-full h-full object-cover object-center opacity-25 dark:opacity-20 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/95 to-slate-50 dark:from-[#070b12]/80 dark:via-[#070b12]/95 dark:to-[#070b12]" />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Main Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Accreditations Badge */}
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>#1 Modern Boarding School in Uttarakhand • Education World</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Nurturing Global Leaders in the <span className="gradient-text-gold">Foothills of Dehradun</span>
              </h1>
            </ScrollReveal>

            {/* Subtitle / Description */}
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Tula's International School seamlessly bridges modern STEM education & international IB pathways with time-honored Indian Gurukul values on a pristine 100+ acre green campus.
              </p>
            </ScrollReveal>

            {/* High-Converting CTA Buttons */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={onOpenInquiry}
                  className="w-full sm:w-auto shadow-xl shadow-amber-500/20"
                >
                  Apply For Admission 2025-26
                </Button>
              </div>
            </ScrollReveal>

            {/* Micro Trust Indicators */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>24/7 Protected Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>100% CBSE & IB Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Dehradun, Uttarakhand</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Hero Interactive Visual Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Hero Showcase Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                    alt="TIS Students in STEM Lab"
                    className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 tis-photo-grade"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Card Bottom Information */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <Badge variant="gold">Mindstone STEM Lab</Badge>
                    <h3 className="text-xl font-bold font-heading">
                      Hands-On Robotics, AI & Astronomy
                    </h3>
                    <p className="text-xs text-slate-300">
                      Students engage in real-world engineering projects, satellite modeling, and coding competitions.
                    </p>
                  </div>
                </div>

                {/* Floating Highlight Box 1: Admission Open */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Admissions Open</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Session 2025-26 • Grades 4-12</p>
                  </div>
                </motion.div>

                {/* Floating Highlight Box 2: University Placement */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">100% Placement</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Top Ivy League & IITs</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
