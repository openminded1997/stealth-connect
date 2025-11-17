import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export const DecryptText = ({ 
  text, 
  className = '', 
  speed = 30
}: DecryptTextProps) => {
  const [displayText, setDisplayText] = useState(text.split('').map(() => ''));
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (!hasIntersected) return;

    let frame = 0;
    const maxFrames = text.length * speed;

    const interval = setInterval(() => {
      setDisplayText(prev => {
        return text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          
          const progress = (frame - index * speed) / speed;
          
          if (progress >= 1) {
            return char;
          }
          
          if (progress <= 0) {
            return '';
          }
          
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        });
      });

      frame++;

      if (frame >= maxFrames) {
        setDisplayText(text.split(''));
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [hasIntersected, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText.join('')}
    </span>
  );
};
