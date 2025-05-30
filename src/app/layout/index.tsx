import { AUDIO_URL, THEME_ATTRIBUTE } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import { type FC, type ReactNode, useEffect } from 'react';
import { Footer } from './ui/footer';
import { Header } from './ui/header';

/**
 * Layout component that wraps the application with a header, footer, and main content area.
 * It also manages the theme based on the context.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The Layout component
 */
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useRootContext();

  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.preload = 'auto';
    const playClick = (): void => {
      audio.currentTime = 0;
      void audio.play();
    };
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    // Play click sound when theme changes
    playClick();
  }, [theme]);

  return (
    <>
      <Header />
      <main
        className="h-full w-full px-1 py-16 md:px-3"
        aria-label="Website Main Content"
      >
        <section className="grid w-full gap-3 lg:grid-flow-row-dense lg:grid-cols-3">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};
