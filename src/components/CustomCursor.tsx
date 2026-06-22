import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Dot — tight & immediate
  const dotSpring = { damping: 60, stiffness: 1500, mass: 0.08 };
  const dotX = useSpring(cursorX, dotSpring);
  const dotY = useSpring(cursorY, dotSpring);

  // Ring — slight lag for "follow" feel
  const ringSpring = { damping: 28, stiffness: 280, mass: 0.5 };
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchRef.current) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const interactive =
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') !== null ||
        t.closest('button') !== null ||
        getComputedStyle(t).cursor === 'pointer';
      setIsHovered(!!interactive);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Outer ring — follows with lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width:  isClicking ? 22 : isHovered ? 40 : 32,
            height: isClicking ? 22 : isHovered ? 40 : 32,
            borderColor: isHovered
              ? 'rgba(0, 255, 102, 0.9)'
              : 'rgba(255, 255, 255, 0.35)',
            backgroundColor: isHovered
              ? 'rgba(0, 255, 102, 0.06)'
              : 'transparent',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          style={{
            borderRadius: '50%',
            border: '1.5px solid',
          }}
        />
      </motion.div>

      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width:  isClicking ? 3 : isHovered ? 5 : 4,
            height: isClicking ? 3 : isHovered ? 5 : 4,
            backgroundColor: isHovered ? '#00FF66' : '#ffffff',
            opacity: isClicking ? 0.6 : 1,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 30 }}
          style={{ borderRadius: '50%' }}
        />
      </motion.div>
    </div>
  );
}
