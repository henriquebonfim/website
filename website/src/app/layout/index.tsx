import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { type FC, type ReactNode } from 'react';
import { Footer } from './ui/footer';
import { Header } from './ui/header';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useLingui();
  return (
    <>
      <Header />
      <main
        className="h-full w-full px-1 py-16 md:px-3"
        aria-label={i18n._(msg`Website Main Content`)}
        role="main"
      >
        <section
          className="grid w-full gap-3 font-serif lg:grid-flow-row-dense lg:grid-cols-3"
          role="none"
        >
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};
