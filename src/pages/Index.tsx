import { SeoStructuredData } from '@/shared/seo';
import { AnimatedCursor, LanguageSwitcher } from '@/shared/ui';
import { Hero } from '@/widgets/hero';
import { FloatingNav } from '@/widgets/navbar';
import { Trans } from '@lingui/react/macro';
import { Suspense, lazy } from 'react';

const About = lazy(() => import('@/widgets/about').then((module) => ({ default: module.About })));
const Experience = lazy(() =>
  import('@/widgets/experience').then((module) => ({ default: module.Experience }))
);
const Projects = lazy(() =>
  import('@/widgets/projects').then((module) => ({ default: module.Projects }))
);
const Certifications = lazy(() =>
  import('@/widgets/certifications').then((module) => ({ default: module.Certifications }))
);
const Contact = lazy(() =>
  import('@/widgets/contact').then((module) => ({ default: module.Contact }))
);
const Footer = lazy(() =>
  import('@/widgets/footer').then((module) => ({ default: module.Footer }))
);

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 rounded-full bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground shadow-lg"
      >
        <Trans>Skip to content</Trans>
      </a>
      <SeoStructuredData />
      <AnimatedCursor />
      <LanguageSwitcher />
      <header>
        <FloatingNav />
      </header>
      <main id="content" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center" />}>
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
