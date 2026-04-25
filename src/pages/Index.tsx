import { AnimatedCursor } from '@/components/AnimatedCursor';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import { SeoStructuredData } from '@/components/SeoStructuredData';
import { About } from '@/components/sections/About';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 rounded-full bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground shadow-lg"
      >
        Skip to content
      </a>
      <SeoStructuredData />
      <AnimatedCursor />
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
