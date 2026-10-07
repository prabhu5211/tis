import React, { useState } from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ADMISSION_STEPS } from '../../data/tisData';
import { FileText, Compass, PenTool, CheckCircle2, Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface AdmissionProcessProps {
  onOpenInquiry: () => void;
}

export const AdmissionProcess: React.FC<AdmissionProcessProps> = ({ onOpenInquiry }) => {
  const [gradeCategory, setGradeCategory] = useState<'junior' | 'middle' | 'senior'>('junior');

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-amber-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-amber-500" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-amber-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-amber-500" />;
      default: return <FileText className="w-6 h-6 text-amber-500" />;
    }
  };

  const feeEstimates = {
    junior: { grade: 'Grades IV - V', fee: '₹3,50,000 / Year', includes: 'Full Boarding, Organic Meals, Laundry, Textbooks & Basic Sports' },
    middle: { grade: 'Grades VI - VIII', fee: '₹4,20,000 / Year', includes: 'Boarding, STEM Lab Access, Equestrian Training & Field Trips' },
    senior: { grade: 'Grades IX - XII', fee: '₹4,90,000 / Year', includes: 'Boarding, CBSE Board Prep, JEE/NEET Integrated Coaching & Career Mentorship' },
  };

  return (
    <section id="admissions" className="py-24 bg-slate-50 dark:bg-[#070b12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Admissions 2025-26
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Simple 4-Step <span className="gradient-text-gold">Admission Journey</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              We welcome applications from motivated boys and girls across India and abroad. Here is how you can secure admission for your child.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Step Process Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ADMISSION_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} direction="up" delay={0.1 * idx}>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg relative group hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-heading">
                    {step.subtitle}
                  </span>
                  <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/10">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Fee Structure Estimator Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Transparent Fee Calculator
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Estimate Annual Boarding Fee Structure
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Select your child's targeted grade level below to preview indicative annual tuition, boarding, and facility charges.
              </p>

              {/* Grade Selector Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(['junior', 'middle', 'senior'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGradeCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                      gradeCategory === cat
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {feeEstimates[cat].grade}
                  </button>
                ))}
              </div>
            </div>

            {/* Fee Output Card */}
            <div className="lg:col-span-5 bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-700 space-y-4 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Indicative Annual Fee
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">
                {feeEstimates[gradeCategory].fee}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Includes:</strong> {feeEstimates[gradeCategory].includes}
              </p>
              <Button
                variant="primary"
                size="md"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={onOpenInquiry}
              >
                Apply For Admission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
