import React, { useState } from 'react';
import { Palette, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type ColorGradePreset = 'crimson' | 'teal' | 'navy';

export interface ColorGradeSwitcherProps {
  activePreset: ColorGradePreset;
  onSelectPreset: (preset: ColorGradePreset) => void;
}

export const ColorGradeSwitcher: React.FC<ColorGradeSwitcherProps> = ({
  activePreset,
  onSelectPreset,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const presets = [
    {
      id: 'crimson' as ColorGradePreset,
      name: 'TIS Signature Crimson & Gold',
      subtitle: 'Official tis.edu.in Color Grading (#B90124)',
      bgPreview: 'bg-gradient-to-r from-[#b90124] to-[#c09d59]',
      filterClass: 'tis-photo-grade',
    },
    {
      id: 'teal' as ColorGradePreset,
      name: 'Gurukul Deep Teal & Cyan',
      subtitle: 'Secondary Website Theme (#007A83)',
      bgPreview: 'bg-gradient-to-r from-[#007a83] to-[#60bab1]',
      filterClass: 'tis-photo-warm',
    },
    {
      id: 'navy' as ColorGradePreset,
      name: 'Royal Shivalik Midnight',
      subtitle: 'Imperial Navy & Amber (#0B192C)',
      bgPreview: 'bg-gradient-to-r from-[#0b192c] to-[#f59e0b]',
      filterClass: 'tis-photo-cinematic',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[4000]">
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-2xl border border-amber-500/40 cursor-pointer font-bold text-xs tracking-wide"
        aria-label="Color Grading Options"
      >
        <Palette className="w-4 h-4 text-amber-400 dark:text-amber-600 animate-spin-slow" />
        <span>Photo Grading & Scheme</span>
      </motion.button>

      {/* Preset Selector Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-16 right-0 w-80 bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  Website Color Grading
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Close
              </button>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Select image color grading & accent palettes modeled from tis.edu.in:
            </p>

            <div className="space-y-2 pt-1">
              {presets.map((preset) => {
                const isSelected = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      onSelectPreset(preset.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-3 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 dark:bg-amber-500/15 shadow-md'
                        : 'border-slate-200 dark:border-slate-800 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl ${preset.bgPreview} shadow-sm shrink-0`} />
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          {preset.name}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">
                          {preset.subtitle}
                        </p>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-amber-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
