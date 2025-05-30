import { THEMES } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import { ChangeLanguage } from '#/shared/i18n/ui';
import { useCallback, useEffect, useRef, useState, type FC } from 'react';

/**
 * Header component with theme toggle, language switcher, and auto-hide on scroll.
 * @returns {JSX.Element} The header UI.
 */
export const Header: FC = () => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const { theme, setTheme } = useRootContext();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  /**
   * Handles theme toggle with animation and accessibility support.
   */
  const handleThemeToggle = useCallback((): void => {
    const wrapper = wrapperRef.current;
    if (!wrapper || isAnimating) return;
    setIsAnimating(true);
    wrapper.classList.remove('alien-disappear', 'alien-reappear');
    // Force reflow to restart animation
    void wrapper.offsetWidth;
    wrapper.classList.add('alien-disappear');

    const onDisappearEnd = () => {
      wrapper.classList.remove('alien-disappear');
      wrapper.classList.add('alien-reappear');
      wrapper.removeEventListener('animationend', onDisappearEnd);
      setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);

      const onReappearEnd = () => {
        wrapper.classList.remove('alien-reappear');
        wrapper.removeEventListener('animationend', onReappearEnd);
        setIsAnimating(false);
      };
      wrapper.addEventListener('animationend', onReappearEnd, { once: true });
    };
    wrapper.addEventListener('animationend', onDisappearEnd, { once: true });
  }, [isAnimating, setTheme, theme]);

  useEffect(() => {
    /**
     * Handles scroll event to auto-hide/show header.
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 flex w-full flex-row items-center justify-between backdrop-blur-sm transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      aria-label="Website Header"
    >
      <button
        onClick={handleThemeToggle}
        className="cursor-pointer"
        aria-label="Dark mode toggle"
        title="Click to change theme"
        disabled={isAnimating}
        type="button"
        tabIndex={0}
      >
        <figure ref={wrapperRef} className="inline-block">
          <img
            src="/assets/layout/logo.webp"
            alt="Website logo"
            width={36}
            height={36}
            className="alien-float h-7 w-7 scale-125 rotate-y-180 transition-all duration-300 hover:scale-150"
            loading="eager"
            aria-hidden="true"
          />
        </figure>
      </button>
      <ChangeLanguage />
    </header>
  );
};
