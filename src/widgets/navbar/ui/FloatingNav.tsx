import { cn } from '@/shared/lib/utils';
import { HeadLogo } from '@/shared/ui';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const items = [
  { id: 'about', label: msg`About` },
  { id: 'experience', label: msg`Work` },
  { id: 'projects', label: msg`Projects` },
  { id: 'certifications', label: msg`Certs` },
  { id: 'contact', label: msg`Contact` },
];

export const FloatingNav = () => {
  const { i18n } = useLingui();
  const [active, setActive] = useState<'home' | (typeof items)[number]['id']>('home');
  const reduce = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const syncHome = () => {
      if (window.scrollY < 120) {
        setActive('home');
      }
    };

    syncHome();
    window.addEventListener('scroll', syncHome, { passive: true });

    // Re-check for elements to handle lazy loading
    const observeElements = () => {
      items.forEach((i) => {
        const el = document.getElementById(i.id);
        if (el) obs.observe(el);
      });
    };

    observeElements();
    // Second check after a short delay for lazy components
    const timer = setTimeout(observeElements, 1000);

    return () => {
      window.removeEventListener('scroll', syncHome);
      clearTimeout(timer);
      obs.disconnect();
    };
  }, [i18n.locale]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update hash without triggering a full reload
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reduce ? undefined : { delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2"
      aria-label="Primary"
    >
      <div className="flex items-center content-center gap-1 rounded-full border border-border bg-card/70  m-auto backdrop-blur-xl shadow-(--shadow-window) sm:px-1">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={i18n._(msg`Home`)}
          aria-pressed={active === 'home'}
          className={cn(
            'group relative hidden h-10 w-10 items-center justify-center overflow-visible rounded-full transition-all sm:flex',
            active === 'home' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {active === 'home' && (
            <motion.span
              layoutId="home-glow"
              className="absolute inset-0 rounded-full bg-blue-500/12 ring-1 ring-blue-400/60 shadow-[0_0_26px_rgba(59,130,246,0.55)]"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}

          <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-blue-500/8" />

          <span className="absolute -top-5 left-1/2 hidden -translate-x-1/2 sm:block">
            <HeadLogo size={72} chase />
          </span>
        </button>
        <div className="mx-1 hidden sm:block h-5 w-px bg-border" />
        <ul className="flex items-center gap-0.5">
          {items.map((i) => (
            <li key={i.id}>
              <button
                onClick={() => scrollTo(i.id)}
                className={cn(
                  'relative rounded-full px-3 py-1.5 font-mono text-xs transition-colors',
                  active === i.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {active === i.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full bg-primary/20 ring-1 ring-primary/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{i18n._(i.label)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
