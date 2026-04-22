import { motion } from 'framer-motion';
import { TerminalWindow } from '../TerminalWindow';

const chapters = [
  {
    title: '// fresh start',
    body: 'Born curious. Took apart radios, broke installers, learned by reassembling. The terminal felt like home before I had words for it.',
  },
  {
    title: '// boy becomes engineer',
    body: "Shipped my first production system at 19. Lived on-call, learned what 'reliable' actually costs, and fell in love with calm systems.",
  },
  {
    title: '// growth in chaos',
    body: 'Scaled platforms across regions, owned observability for hundreds of services, and built tooling that let teams ship without fear.',
  },
  {
    title: '// present & future',
    body: 'Today: blending platform engineering with AI tooling. Tomorrow: more open-source, more leverage, less friction for the people I work with.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] comment-highlight mb-4">
              // about
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              A quiet operator
              <br />
              in a noisy industry.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              I build platforms that disappear into the background — so product teams can move fast,
              sleep well, and ship with confidence.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {chapters.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <TerminalWindow title={`chapter_0${i + 1}.md`}>
                  <p className="font-mono text-xs comment-highlight mb-2">{c.title}</p>
                  <p className="font-sans text-base leading-relaxed text-foreground/90">{c.body}</p>
                </TerminalWindow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
