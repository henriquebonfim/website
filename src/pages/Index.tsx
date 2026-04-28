import { AnimatedCursor, LanguageSwitcher } from '@/shared/ui';
import { SeoStructuredData } from '@/shared/seo';
import { Trans } from '@lingui/react/macro';
import { FloatingNav } from '@/widgets/navbar';
import { Footer } from '@/widgets/footer';
import { About } from '@/widgets/about';
import { Certifications } from '@/widgets/certifications';
import { Contact } from '@/widgets/contact';
import { Experience } from '@/widgets/experience';
import { Hero } from '@/widgets/hero';
import { Projects } from '@/widgets/projects';

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
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
