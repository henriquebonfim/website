import { HeadLogo, TerminalWindow, Typewriter } from '@/shared/ui';
import { msg } from '@lingui/core/macro';
import { Trans, useLingui } from '@lingui/react/macro';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, GitBranch, Link, Mail } from 'lucide-react';
import { useEffect } from 'react';

export const Hero = () => {
  const { i18n } = useLingui();
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(sy, [-200, 200], [8, -8]);
  const rotY = useTransform(sx, [-200, 200], [-8, 8]);
  const tx = useTransform(sx, [-200, 200], [-12, 12]);
  const ty = useTransform(sy, [-200, 200], [-12, 12]);

  const terminalLines = [
    i18n._(msg`$ whoami`),
    i18n._(msg`henrique_bonfim · Brazilian`),
    '',
    i18n._(msg`$ cat ./focus.txt`),
    i18n._(msg`Backend & Platform Engineering`),
    i18n._(msg`High-traffic systems · Reliability`),
    '',
    i18n._(msg`$ uptime`),
    i18n._(msg`12y in tech · still curious`),
    '',
    i18n._(msg`$ echo "let's build systems that just work."`),
  ];

  useEffect(() => {
    if (reduce) return;
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set(e.clientX - cx);
      my.set(e.clientY - cy);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mx, my, reduce]);

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-20 hero-scene" aria-hidden />
      <div className="absolute inset-0 -z-10 " aria-hidden />
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 m-auto">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.2em]  mb-6"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-term-green mr-2 align-middle animate-pulse" />
              <span className="comment-highlight">
                <Trans>online</Trans>
              </span>{' '}
              ·{' '}
              <span className="text-secondary-content">
                <Trans>transmitting from earth...</Trans>
              </span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight"
            >
              Henrique
              <br />
              <span className="text-gradient font-bold">Bonfim</span>
              <span
                className="inline-block w-3 h-[0.85em] align-baseline ml-2 bg-primary-glow  animate-blink"
                aria-hidden
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-6 max-w-xl font-mono text-sm md:text-base text-muted-foreground"
            >
              <Trans>
                I build backend systems that don't fall apart when traffic spikes. Focused on
                reliability, observability, and the calm that comes from well-engineered code.
              </Trans>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <div className="  flex items-center gap-1">
                {[
                  { Icon: GitBranch, href: 'https://github.com/henriquebonfim', label: 'GitHub' },
                  {
                    Icon: Link,
                    href: 'https://linkedin.com/in/henriquebonfim',
                    label: 'LinkedIn',
                  },
                  { Icon: Mail, href: 'mailto:dev.unsorted585@passinbox.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-primary/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors glow-ring"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="m-auto lg:col-span-5 perspective-distant"
          >
            <motion.div
              style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <motion.div
                style={{ x: rotX, y: rotY }}
                className="absolute bottom-32 -right-13 z-10 border border-primary/50 rounded-full   bg-card/80 backdrop-blur-md shadow-lg hidden xl:block"
              >
                <HeadLogo size={250} className="-m-10 -mt-0" />
              </motion.div>
              <TerminalWindow title="henrique@user: ~" className="w-[400px] h-[350px]">
                <Typewriter startDelay={900} lines={terminalLines} />
              </TerminalWindow>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#about"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-2"
          >
            <Trans>scroll</Trans>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
