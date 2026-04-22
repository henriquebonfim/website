import alienLogo from '@/assets/alien-logo.png';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AlienLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const AlienLogo = ({
  className,
  size = 40,
  animated = true,
  inverted = false,
}: AlienLogoProps & { inverted?: boolean }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={animated && !reduce ? { rotate: -10, scale: 0.6, opacity: 0 } : false}
      animate={
        animated && !reduce ? { rotate: [0, -8, 8, -4, 0], scale: 1, opacity: 1 } : { opacity: 1 }
      }
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!reduce ? { rotate: [0, -6, 6, 0], transition: { duration: 0.6 } } : undefined}
      className={cn('inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <img
        src={alienLogo}
        alt="Henrique Bonfim alien logo"
        width={size}
        height={size}
        className={cn(
          'h-full w-full object-contain drop-shadow-[0_0_20px_hsl(var(--primary-glow)/0.5)]',
          { '-scale-x-100': inverted }
        )}
        loading="eager"
      />
    </motion.div>
  );
};
