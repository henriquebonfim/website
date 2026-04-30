import { locales } from '@/shared/i18n/lingui';
import { cn } from '@/shared/lib/utils';
import { useLingui } from '@lingui/react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const languages: { code: keyof typeof locales; label: string; var: string }[] = [
  { code: 'en', label: 'EN', var: 'var(--i18n-en-logo)' },
  { code: 'pt-BR', label: 'PT', var: 'var(--i18n-pt-logo)' },
  { code: 'es', label: 'ES', var: 'var(--i18n-es-logo)' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useLingui();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion() ?? false;

  const handleLanguageChange = (code: keyof typeof locales) => {
    localStorage.setItem('locale', code);
    navigate(`/${code}`);
  };

  return (
    <div className="fixed right-2 top-10 z-50 flex flex-col gap-3 sm:right-3 sm:top-3">
      {languages.map((lang, i) => (
        <motion.button
          key={lang.code}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          onClick={() => handleLanguageChange(lang.code)}
          className={cn(
            'group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card/60 shadow-(--shadow-window)',
            i18n.locale === lang.code ? 'border-primary/60 ring-1 ring-primary/40' : 'opacity-80'
          )}
          title={lang.label}
        >
          <div
            className="h-5 w-5 rounded-sm bg-cover bg-center bg-no-repeat grayscale-[0.2] transition-all group-hover:grayscale-0"
            style={{ backgroundImage: lang.var }}
          />
          <AnimatePresence initial={true} mode="wait">
            {i18n.locale === lang.code && (
              <motion.span
                key={`orbit-${lang.code}`}
                aria-hidden
                className="absolute inset-[-0.35rem] pointer-events-none flex items-center justify-center"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-primary/15 bg-transparent"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={
                    reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: 'linear' }
                  }
                />
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={
                    reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'linear' }
                  }
                >
                  <span className="absolute left-1/3 top-1/3 h-2 w-2 -translate-x-1/3 translate-y-[-190%] rounded-full bg-primary-glow shadow-[0_0_12px_hsl(var(--primary-glow)/0.9)]" />
                </motion.span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  );
};
