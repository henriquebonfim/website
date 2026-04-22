import { AnimatedCursor } from '@/components/AnimatedCursor';
import { FloatingNav } from '@/components/FloatingNav';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { NowPlaying } from '@/components/sections/NowPlaying';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedCursor />
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <NowPlaying />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
