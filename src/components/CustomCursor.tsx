import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);

    // Check if mouse is hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive') ||
        target.style.cursor === 'pointer';
        
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Disable custom cursor on touch devices for accessibility
  useEffect(() => {
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (touchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(201, 165, 77, 0.05)' : 'rgba(110, 143, 106, 0.02)',
          borderColor: isHovered ? 'rgba(201, 165, 77, 0.6)' : 'rgba(110, 143, 106, 0.35)',
        }}
      />
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? '#C9A54D' : '#6E8F6A',
          boxShadow: isHovered ? '0 0 8px rgba(201, 165, 77, 0.8)' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />
    </>
  );
}
