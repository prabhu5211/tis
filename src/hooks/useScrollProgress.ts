import { useState, useEffect } from 'react';

export function useScrollProgress(): number {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        setCompletion(Number((currentScroll / scrollHeight).toFixed(4)));
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);
    updateScrollCompletion(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
}
