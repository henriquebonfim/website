import { ASSETS } from '@/shared/constants';
import { cn } from '@/shared/lib/utils';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface SectionAlienCaptionProps {
  label: string;
  prefix?: string;
  className?: string;
  alienSize?: number;
}

type AlienPhase = 'hidden' | 'emerging' | 'flying';

export const SectionAlienCaption = ({
  label,
  prefix = '//',
  className,
  alienSize = 48,
}: SectionAlienCaptionProps) => {
  const reduce = useReducedMotion() ?? false;
  const [phase, setPhase] = useState<AlienPhase>(reduce ? 'flying' : 'hidden');
  const loopStartRef = useRef<number | null>(null);
  const flightX = useMotionValue(0);
  const flightY = useMotionValue(0);
  const flightRotate = useMotionValue(0);
  const flightScale = useMotionValue(1);

  const resetFlight = useCallback(() => {
    loopStartRef.current = null;
    flightX.set(0);
    flightY.set(0);
    flightRotate.set(0);
    flightScale.set(1);
  }, [flightX, flightY, flightRotate, flightScale]);

  const handleViewportEnter = () => {
    if (reduce) {
      return;
    }

    resetFlight();
    setPhase('emerging');
  };

  const handleViewportLeave = () => {
    if (reduce) {
      return;
    }

    resetFlight();
    setPhase('hidden');
  };

  useEffect(() => {
    if (phase !== 'flying') {
      resetFlight();
    }
  }, [phase, resetFlight]);

  useAnimationFrame((time) => {
    if (reduce || phase !== 'flying') {
      return;
    }

    if (loopStartRef.current === null) {
      loopStartRef.current = time;
    }

    const elapsed = (time - loopStartRef.current) / 1000;
    const orbitPhase = elapsed * 1.05;
    const ramp = Math.min(1, elapsed / 0.55);
    const smoothRamp = ramp * ramp * (3 - 2 * ramp);

    flightX.set(Math.sin(orbitPhase * 2) * 8 * smoothRamp);
    flightY.set(Math.sin(orbitPhase) * 14 * smoothRamp);
    flightRotate.set(Math.sin(orbitPhase) * 8 * smoothRamp);
    flightScale.set(1 + Math.sin(orbitPhase * 2) * 0.02 * smoothRamp);
  });

  const visiblePhase = reduce ? 'flying' : phase;

  const alienMotion =
    visiblePhase === 'hidden'
      ? { animate: { opacity: 0, x: -300, y: 0, scale: 0.55 }, transition: { duration: 0.15 } }
      : visiblePhase === 'emerging'
        ? {
            animate: { opacity: 1, x: -20, y: -20, scale: 1 },
            transition: { duration: 0.5, ease: [0.36, 0, 0.22, 0] as const },
          }
        : {
            animate: { opacity: 1, x: -20, y: -20, scale: 1 },
            transition: { duration: 0.25, ease: [0.36, 1, 0.22, 1] as const },
          };

  return (
    <motion.div
      initial={false}
      whileInView={{}}
      viewport={{ once: false, amount: 0.7 }}
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      className={cn('relative inline-flex items-center overflow-visible', className)}
    >
      <span className="relative inline-flex items-center">
        <motion.span
          aria-hidden
          initial={false}
          onAnimationComplete={() => {
            if (reduce) return;

            setPhase((currentPhase) => (currentPhase === 'emerging' ? 'flying' : currentPhase));
          }}
          animate={reduce ? { opacity: 1, x: 0, y: 0, scale: 1 } : alienMotion.animate}
          transition={reduce ? { duration: 0 } : alienMotion.transition}
          className="absolute left-0 top-1/2 z-0 -translate-y-1/2 pointer-events-none"
        >
          <motion.div
            style={{ x: flightX, y: flightY, rotate: flightRotate, scale: flightScale }}
            className="inline-flex items-center justify-center"
          >
            <div
              className="inline-flex items-center justify-center"
              style={{ width: alienSize, height: alienSize }}
            >
              <img
                src={ASSETS.alienLogo}
                alt="Henrique Bonfim alien logo"
                width={alienSize}
                height={alienSize}
                className={cn(
                  'h-full w-full object-contain drop-shadow-[0_0_20px_hsl(var(--primary-glow)/0.5)] -scale-x-110 -rotate-13'
                )}
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.span>

        <p className="relative z-10 flex items-center gap-2 pl-9 font-mono text-xs uppercase tracking-[0.2em] comment-highlight">
          <span>{prefix}</span>
          <span className="whitespace-nowrap">{label}</span>
        </p>
      </span>
    </motion.div>
  );
};
