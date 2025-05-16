import { useRef } from "react";
import { SwitchLanguage } from "#/widgets/switch-language";
import "./styles.css";
import { useRootContext } from "#/shared/hooks";

export function Header() {
  const logoRef = useRef<HTMLImageElement>(null);
  const { theme, setTheme } = useRootContext();

  const handleExplode = () => {
    const logo = logoRef.current;
    if (logo) {
      logo.classList.remove("alien-disappear", "alien-reappear");

      void logo.offsetWidth;

      logo.classList.add("alien-disappear");

      const onAnimationEnd = () => {
        logo.classList.remove("alien-disappear");
        logo.classList.add("alien-reappear");
        logo.removeEventListener("animationend", onAnimationEnd);
        setTheme(theme === "dark" ? "light" : "dark");
      };

      logo.addEventListener("animationend", onAnimationEnd);
    }
  };

  return (
    <header className="fixed top-0 z-10 flex w-full flex-row items-center justify-between bg-transparent dark:bg-white backdrop-blur-sm transition-colors">
      <button
        onClick={handleExplode}
        className="cursor-crosshair"
        aria-label="Interactive logo"
        title="Click to shoot!"
      >
        <img
          ref={logoRef}
          src="/logo.webp"
          alt="Website logo"
          width={36}
          height={36}
          className={`h-9 w-9 rotate-y-180 transition-all duration-300 hover:scale-125`}
          loading="eager"
        />
      </button>

      <SwitchLanguage />
    </header>
  );
}
