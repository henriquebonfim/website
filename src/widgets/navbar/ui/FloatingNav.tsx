import { cn } from '@/shared/lib/utils';
import { HeadLogo } from '@/shared/ui';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Briefcase, Code2, Mail, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const items = [
  { id: 'about', label: msg`About`, icon: User },
  { id: 'experience', label: msg`Work`, icon: Briefcase },
  { id: 'projects', label: msg`Projects`, icon: Code2 },
  { id: 'certifications', label: msg`Certs`, icon: Award },
  { id: 'contact', label: msg`Contact`, icon: Mail },
];

export const FloatingNav = () => {
  const { i18n } = useLingui();
  const [active, setActive] = useState<'home' | (typeof items)[number]['id']>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.slice(1);
      if (items.some((i) => i.id === hash)) return hash;
    }
    return 'home';
  });
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActive('home');
        return;
      }

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the top of the section is near the upper third of the screen
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.2) {
            setActive(item.id);
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    window.history.pushState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reduce ? undefined : { delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 -translate-x-1/2 top-4 z-50"
      aria-label="Primary"
    >
      <div className="flex items-center content-center gap-1 rounded-full border border-border bg-card/70 m-auto backdrop-blur-xl shadow-(--shadow-window) p-1 sm:px-1">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={i18n._(msg`Home`)}
          aria-pressed={active === 'home'}
          title={i18n._(msg`Home`)}
          className={cn(
            'group relative flex h-10 w-10 items-center justify-center overflow-visible rounded-full transition-all',
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

          {/* Mobile Overlapping Logo */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 sm:hidden">
            <HeadLogo size={56} chase />
          </span>
          {/* Desktop Overlapping Logo */}
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 hidden sm:block">
            <HeadLogo size={72} chase />
          </span>
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <ul className="flex items-center gap-0.5">
          {items.map((i) => (
            <li key={i.id}>
              <button
                onClick={() => scrollTo(i.id)}
                title={i18n._(i.label)}
                className={cn(
                  'relative flex items-center justify-center transition-colors',
                  'h-10 w-10 sm:h-auto sm:w-auto sm:px-3 sm:py-1.5',
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
                <i.icon className="relative z-10 h-4 w-4 sm:hidden" />
                <span className={cn('relative z-10 hidden sm:inline font-mono text-xs')}>
                  {i18n._(i.label)}
                </span>
                <span className="sr-only">{i18n._(i.label)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
