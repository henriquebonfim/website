import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export const AnimatedCursor = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y, reduce]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-primary-glow mix-blend-difference"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-primary-glow/60 mix-blend-difference"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hover ? 56 : 32, height: hover ? 56 : 32, opacity: hover ? 0.9 : 0.6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </>
  );
};
