import React, { useState } from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ACADEMIC_PROGRAMS } from '../../data/tisData';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

interface AcademicProgramsProps {
  onOpenInquiry: () => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(ACADEMIC_PROGRAMS[0].id);

  const selectedProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeTab) || ACADEMIC_PROGRAMS[0];

  return (
    <section id="academics" className="py-24 bg-slate-50 dark:bg-[#070b12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<BookOpen className="w-3.5 h-3.5" />}>
              Curriculum & Pathways
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Academic Pathways Designed for <span className="gradient-text-gold">Future Innovators</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              From foundational primary literacy to advanced AI & Competitive Coaching (JEE / NEET / SAT), explore how TIS empowers every stage of a student's journey.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Navigation Controls */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 backdrop-blur-md max-w-3xl mx-auto mb-12 border border-slate-300/50 dark:border-slate-800">
            {ACADEMIC_PROGRAMS.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === program.id
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {program.title.split(' (')[0]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Program Interactive Detail View */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="gold">{selectedProgram.badge}</Badge>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {selectedProgram.grades}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                {selectedProgram.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {selectedProgram.description}
              </p>

              {/* Key Highlights Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Program Highlights & Modules:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProgram.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={onOpenInquiry}
                >
                  Inquire For {selectedProgram.title.split(' (')[0]}
                </Button>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 h-80">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
