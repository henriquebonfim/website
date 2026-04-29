import { ASSETS } from '@/shared/constants';
import { cn } from '@/shared/lib/utils';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeadLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
  /** When true, the alien chases the pointer while hovered. */
  chase?: boolean;
}

export const HeadLogo = ({
  className,
  size = 40,
  animated = false,
  chase = false,
}: HeadLogoProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const bounds = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const handleMouseEnter = () => {
    setHovering(true);
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      bounds.current = { left, top, width, height };
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    bounds.current = null;
  };

  useEffect(() => {
    if (!chase || reduce || !hovering) return;
    const maxOffset = Math.max(12, size * 0.45);
    const handler = (e: MouseEvent) => {
      const r = bounds.current;
      if (!r) return;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      // Chase: move toward pointer, capped at maxOffset
      const factor = Math.min(1, dist / 220);
      x.set((dx / dist) * maxOffset * factor);
      y.set((dy / dist) * maxOffset * factor);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [chase, reduce, hovering, size, x, y]);

  useEffect(() => {
    if (!hovering) {
      x.set(0);
      y.set(0);
    }
  }, [hovering, x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={
        animated && !reduce
          ? { y: [0, -10, 0], x: [0, 1, 0, -1, 0], rotate: [0, -2, 0, 2, 0], scale: 1, opacity: 1 }
          : { opacity: 1 }
      }
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: reduce ? undefined : 'easeInOut',
      }}
      className={cn('inline-flex items-center justify-center', className)}
      style={{ width: size, height: size, transformOrigin: '50% 80%' }}
      data-cursor="hover"
    >
      <motion.img
        src={ASSETS.headLogo}
        alt="Henrique Bonfim portrait"
        width={size}
        height={size}
        style={{ x: sx, y: sy }}
        whileHover={!reduce ? { scale: 1.08 } : undefined}
        className="h-full w-full object-contain drop-shadow-[0_0_20px_hsl(var(--primary-glow)/0.5)] will-change-transform"
        loading="eager"
      />
    </motion.div>
  );
};
