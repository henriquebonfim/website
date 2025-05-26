import { THEMES } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import { SwitchLanguage } from '#/widgets/switch-language';
import { useRef, useState, type FC } from 'react';

export const Header: FC = () => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const { theme, setTheme } = useRootContext();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeToggle = () => {
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
      wrapper.addEventListener('animationend', onReappearEnd);
    };
    wrapper.addEventListener('animationend', onDisappearEnd);
  };

  return (
    <header className="fixed top-0 z-10 flex w-full flex-row items-center justify-between backdrop-blur-sm">
      <button
        onClick={handleThemeToggle}
        className="cursor-pointer"
        aria-label="Dark mode toggle"
        title="Click to change theme"
        disabled={isAnimating}
        type="button"
      >
        <span ref={wrapperRef} className="inline-block">
          <img
            src="/assets/layout/logo.webp"
            alt="Website logo"
            width={36}
            height={36}
            className="alien-float h-7 w-7 scale-125 rotate-y-180 transition-all duration-300 hover:scale-150"
            loading="eager"
          />
        </span>
      </button>
      <SwitchLanguage />
    </header>
  );
};
