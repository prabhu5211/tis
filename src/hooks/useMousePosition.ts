import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  isHovered: boolean;
  isTouchDevice: boolean;
  isClicking: boolean;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: -100,
    y: -100,
    isHovered: false,
    isTouchDevice: false,
    isClicking: false,
  });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (isTouch) {
      setMousePosition((prev) => ({ ...prev, isTouchDevice: true }));
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target && (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.classList.contains('interactive-hover')
        )
      );

      setMousePosition((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isHovered: isInteractive,
      }));
    };

    const handleMouseDown = () => {
      setMousePosition((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setMousePosition((prev) => ({ ...prev, isClicking: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return mousePosition;
}
