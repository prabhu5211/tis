import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[1000] bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 origin-left shadow-[0_0_10px_rgba(245,158,11,0.8)]"
      style={{ scaleX }}
    />
  );
};
