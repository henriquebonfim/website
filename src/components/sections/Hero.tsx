import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { TerminalWindow } from '../TerminalWindow';
import { Typewriter } from '../Typewriter';
import { AlienLogo } from '../AlienLogo';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(sy, [-200, 200], [8, -8]);
  const rotY = useTransform(sx, [-200, 200], [-8, 8]);
  const tx = useTransform(sx, [-200, 200], [-12, 12]);
  const ty = useTransform(sy, [-200, 200], [-12, 12]);

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
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow mb-6"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-term-green mr-2 align-middle animate-pulse" />
              online · transmitting from earth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              Henrique
              <br />
              <span className="text-gradient">Bonfim</span>
              <span
                className="inline-block w-3 h-[0.85em] align-baseline ml-2 bg-primary-glow animate-blink"
                aria-hidden
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-6 max-w-xl font-mono text-sm md:text-base text-muted-foreground"
            >
              Senior Software Engineer · Platform & AI · Building reliable systems with
              terminal-native craft and planetary scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors glow-ring"
              >
                <span>$ ls ./projects</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-sm hover:border-primary/60 hover:bg-secondary/50 transition-colors"
              >
                <span>./contact.sh</span>
              </a>
              <div className="ml-1 flex items-center gap-1">
                {[
                  { Icon: Github, href: 'https://github.com/henriquebonfim', label: 'GitHub' },
                  {
                    Icon: Linkedin,
                    href: 'https://linkedin.com/in/henriquebonfim',
                    label: 'LinkedIn',
                  },
                  { Icon: Mail, href: 'mailto:hello@henriquebonfim.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/60 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 perspective-[1200px]"
          >
            <motion.div
              style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <motion.div style={{ x: tx, y: ty }} className="absolute -top-8 -right-4 z-10">
                <AlienLogo size={84} />
              </motion.div>
              <TerminalWindow title="hbonfim@earth: ~">
                <Typewriter
                  startDelay={900}
                  lines={[
                    '$ whoami',
                    'henrique_bonfim',
                    '',
                    '$ cat ./role.txt',
                    'Senior Software Engineer',
                    'Platform · Observability · AI',
                    '',
                    '$ uptime',
                    'earth · 12y in tech · still curious',
                  ]}
                />
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
            scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
