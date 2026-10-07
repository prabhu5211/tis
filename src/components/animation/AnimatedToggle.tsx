import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

interface AnimatedToggleProps {
  className?: string;
}

export const AnimatedToggle: React.FC<AnimatedToggleProps> = ({ className = '' }) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative flex items-center justify-between w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
        isDark ? 'bg-slate-800 border border-slate-700' : 'bg-amber-100 border border-amber-200'
      } ${className}`}
    >
      <div className="flex justify-between w-full px-1 items-center pointer-events-none">
        <Sun className={`w-3.5 h-3.5 ${isDark ? 'text-slate-500' : 'text-amber-600'}`} />
        <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-slate-400'}`} />
      </div>

      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-amber-500 shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
          rotate: isDark ? 360 : 0
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-slate-950" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-600" />
        )}
      </motion.div>
    </button>
  );
};
