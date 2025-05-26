import { THEME_ATTRIBUTE } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import { Footer } from '#/widgets/footer';
import { Header } from '#/widgets/header';
import { type FC, type ReactNode, memo, useEffect } from 'react';

/**
 * Layout component that wraps the application with a header, footer, and main content area.
 * It also manages the theme based on the context.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The Layout component
 */
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useRootContext();

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  }, [theme]);

  return (
    <>
      <Header />
      <main className="h-full w-full px-3 py-16">{children}</main>
      <Footer />
    </>
  );
};

export default memo(Layout);
