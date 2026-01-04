import { AUDIO_URL, LOCALES, SECTION_ITEMS, THEMES } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import type { LocaleType } from '#/shared/types';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from 'react';

/**
 * Custom hook that manages header visibility based on scroll direction
 * @returns {boolean} Whether the header should be visible
 */
const useHeaderVisibility = (): boolean => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
};

/**
 * Language switcher component
 */
const LanguageSwitcher: FC = () => {
  const { locale, setLocale } = useRootContext();
  const { i18n } = useLingui();

  return (
    <nav
      id={SECTION_ITEMS.LANGUAGE}
      className="flex flex-wrap gap-3 md:mr-3"
      aria-label={i18n._(msg`Language Switcher`)}
    >
      {Object.entries(LOCALES).map(([key, value]) => {
        const isActive = locale === key;
        return (
          <button
            id="language-switcher"
            key={key}
            onClick={() => setLocale(key as LocaleType)}
            className={`focus:ring-primary transition-all duration-300 hover:scale-110 focus:ring-1 focus:ring-offset-1 focus:outline-none active:scale-90 ${isActive ? 'ring-primary ring-1' : ''} `}
            aria-label={i18n._(msg`Switch language to ${value}`)}
            title={value}
            type="button"
            role="switch"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
          >
            <img
              loading="lazy"
              src={`/assets/i18n/${key}.png`}
              alt={i18n._(msg`flag of ${value}`)}
              width={44}
              height={44}
              aria-hidden="true"
              className={`-my-1.5 min-h-11 min-w-11 object-cover transition-all duration-300 md:h-11 md:w-11 ${isActive ? 'grayscale-0' : 'grayscale-100'} hover:grayscale-0`}
            />
          </button>
        );
      })}
    </nav>
  );
};

/**
 * Theme toggle button component
 */
const ThemeToggle: FC = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const { theme, setTheme } = useRootContext();
  const [isAnimating, setIsAnimating] = useState(false);
  const { i18n } = useLingui();

  const audio = useMemo(() => {
    const audio = new Audio(AUDIO_URL);
    audio.preload = 'auto';
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.load();
    return audio;
  }, []);

  const playAudio = useCallback((): void => {
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.warn('Audio playback failed:', error);
      });
    }
  }, [audio]);

  const handleThemeToggle = useCallback((): void => {
    const wrapper = wrapperRef.current;
    if (!wrapper || isAnimating) return;

    setIsAnimating(true);
    wrapper.classList.remove('alien-disappear', 'alien-reappear');
    // Force reflow to restart animation
    void wrapper.offsetWidth;
    wrapper.classList.add('alien-disappear');

    const onDisappearEnd = (): void => {
      wrapper.classList.remove('alien-disappear');
      wrapper.classList.add('alien-reappear');
      wrapper.removeEventListener('animationend', onDisappearEnd);
      setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
      const onReappearEnd = (): void => {
        wrapper.classList.remove('alien-reappear');
        wrapper.removeEventListener('animationend', onReappearEnd);
        setIsAnimating(false);
        playAudio();
      };

      wrapper.addEventListener('animationend', onReappearEnd, { once: true });
    };

    wrapper.addEventListener('animationend', onDisappearEnd, { once: true });
  }, [isAnimating, setTheme, theme, playAudio]);

  return (
    <button
      onClick={handleThemeToggle}
      className="focus:ring-primary rounded-md transition-all focus:ring-1 focus:outline-none"
      aria-label={i18n._(
        msg`Switch to ${theme === THEMES.dark ? 'light' : 'dark'} theme`,
      )}
      title={i18n._(
        msg`Click to change theme to ${theme === THEMES.dark ? 'light' : 'dark'} mode`,
      )}
      disabled={isAnimating}
      type="button"
      aria-busy={isAnimating ? 'true' : 'false'}
      aria-live="polite"
      aria-atomic="true"
    >
      <figure
        ref={wrapperRef}
        className="inline-block"
        role="figure"
        aria-label={i18n._(msg`Theme Toggle Icon`)}
      >
        <img
          src="/assets/layout/logo.webp"
          alt={i18n._(msg`Website logo`)}
          width={36}
          height={36}
          className="alien-float h-7 w-7 scale-125 transition-all duration-300 hover:scale-150"
          loading="eager"
          aria-hidden="true"
        />
      </figure>
    </button>
  );
};

/**
 * Header component with theme toggle, language switcher, and auto-hide on scroll.
 * @returns {JSX.Element} The header UI.
 */
export const Header: FC = () => {
  const isHeaderVisible = useHeaderVisibility();

  return (
    <header
      className={`bg-neutral/10 border-base-100 fixed top-0 z-10 flex w-screen flex-row items-center justify-between p-1 backdrop-blur-xs transition-transform duration-300 md:p-3 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} `}
      aria-label="Website Header"
      role="navigation"
    >
      <ThemeToggle />
      <LanguageSwitcher />
    </header>
  );
};
