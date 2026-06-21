import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Super tight spring — near zero lag
  const springConfig = { damping: 50, stiffness: 1200, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        getComputedStyle(target).cursor === 'pointer';
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (touchDevice) setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-2px',
        translateY: '-2px',
      }}
    >
      <motion.svg
        width="26"
        height="30"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: isHovered ? 1.25 : 1,
          rotate: 15,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        style={{ transformOrigin: '2px 2px' }}
      >
        <defs>
          {/* 7-color rainbow gradient painted top→bottom on the arrow */}
          <linearGradient id="rainbowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"      stopColor="#FF0000" /> {/* Red */}
            <stop offset="16.6%"  stopColor="#FF7700" /> {/* Orange */}
            <stop offset="33.3%"  stopColor="#FFE600" /> {/* Yellow */}
            <stop offset="50%"    stopColor="#00C853" /> {/* Green */}
            <stop offset="66.6%"  stopColor="#2979FF" /> {/* Blue */}
            <stop offset="83.3%"  stopColor="#7C4DFF" /> {/* Indigo */}
            <stop offset="100%"   stopColor="#E040FB" /> {/* Violet */}
          </linearGradient>
          {/* Slightly darker version for the stroke */}
          <linearGradient id="rainbowStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"      stopColor="#CC0000" />
            <stop offset="16.6%"  stopColor="#CC5500" />
            <stop offset="33.3%"  stopColor="#CCB800" />
            <stop offset="50%"    stopColor="#009940" />
            <stop offset="66.6%"  stopColor="#1155CC" />
            <stop offset="83.3%"  stopColor="#5533CC" />
            <stop offset="100%"   stopColor="#BB00DD" />
          </linearGradient>
        </defs>

        {/* Arrow shape filled with 7-color rainbow gradient */}
        <path
          d="M2 2L20 10.5L11.5 12.5L7.5 24L2 2Z"
          fill="url(#rainbowGrad)"
          stroke="url(#rainbowStroke)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}
