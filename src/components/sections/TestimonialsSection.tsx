import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { TESTIMONIALS } from '../../data/tisData';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#0b101a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<MessageSquareHeart className="w-3.5 h-3.5" />}>
              Voices of TIS
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trusted by Parents, Loved by <span className="gradient-text-gold">Students & Alumni</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Hear firsthand experiences from families who chose Tula's International School for their child's transformational journey.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Slider Showcase */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-200 dark:border-slate-800 relative">
            <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 text-amber-500/15 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Avatar Image */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-amber-500/30 shadow-xl">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-xl shadow-md">
                  <Star className="w-4 h-4 fill-slate-950" />
                </div>
              </div>

              {/* Quote Content */}
              <div className="space-y-4 text-center md:text-left">
                {/* Rating Stars */}
                <div className="flex items-center justify-center md:justify-start space-x-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "{current.quote}"
                </p>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                    {current.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-500 dark:text-amber-400">
                    {current.role} • {current.relation} ({current.location})
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                  }
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
