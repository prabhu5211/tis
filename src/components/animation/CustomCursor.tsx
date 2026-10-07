import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y, isHovered, isTouchDevice, isClicking } = useMousePosition();

  // Smooth springs to avoid layout thrashing and achieve 60 FPS
  const ringX = useSpring(x, { stiffness: 400, damping: 28 });
  const ringY = useSpring(y, { stiffness: 400, damping: 28 });

  useEffect(() => {
    if (!isTouchDevice) {
      document.body.classList.add('custom-cursor-enabled');
    } else {
      document.body.classList.remove('custom-cursor-enabled');
    }
    return () => {
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isTouchDevice]);

  if (isTouchDevice || x < 0 || y < 0) return null;

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-amber-500/80 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 54 : isClicking ? 20 : 36,
          height: isHovered ? 54 : isClicking ? 20 : 36,
          backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.25)' : 'transparent',
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.2 }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 rounded-full bg-amber-400"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.5 : isClicking ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
      />
    </>
  );
};
