import { THEME_ATTRIBUTE } from "#/shared/constants";
import { useRootContext } from "#/shared/hooks";
import { Footer } from "#/widgets/footer";
import { Header } from "#/widgets/header";
import { type JSX, type ReactNode, memo, useEffect } from "react";

/**
 * Layout component that wraps the application with a header, footer, and main content area.
 * It also manages the theme based on the context.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The Layout component
 */
function Layout({ children }: { children: ReactNode }): JSX.Element {
  const { theme } = useRootContext();

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  }, [theme]);

  return (
    <>
      <Header />
      <main className="container mx-auto flex min-h-screen scale-95 flex-col items-center justify-center gap-3 pt-16 2xl:scale-100">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default memo(Layout);
