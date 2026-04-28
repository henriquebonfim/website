import codingImg from '@/assets/coding.webp';
import { SectionAlienCaption, TerminalWindow } from '@/shared/ui';
import { msg } from '@lingui/core/macro';
import { Trans, useLingui } from '@lingui/react/macro';
import { motion } from 'framer-motion';

const chapters = [
  {
    title: (i18n) => i18n._(msg`fresh start`),
    body: (i18n) =>
      i18n._(
        msg`Growing up surrounded by mechanical things, I started taking everything apart... from radios and toys to building a soapbox car from scratch. This hands-on exploration taught me how things work, avoid failures and how to fix them all!`
      ),
  },
  {
    title: (i18n) => i18n._(msg`the shift`),
    body: (i18n) =>
      i18n._(
        msg`I shipped my first production code at 19, but I quickly realized that 'shipping fast' often came at the cost of stability and personal well-being. Living through high-stakes on-call rotations taught me that reliability isn't just a feature... it's the foundation of a sustainable team. I shifted my focus to building safely and prioritizing predictable operations, resulting in systems that support long-term growth.`
      ),
  },
  {
    title: (i18n) => i18n._(msg`growth in chaos`),
    body: (i18n) =>
      i18n._(
        msg`Maintaining complex systems under high pressure can easily lead to chaotic, short-term fixes that add technical debt. I learned that finding elegant, scaled solutions requires embracing this complexity rather than fighting it. By positioning myself in the 'eye of the storm,' I've been able to design calm, reliable platforms that empower product teams to scale with confidence, even in the most demanding environments.`
      ),
  },
  {
    title: (i18n) => i18n._(msg`keep calm in the storm`),
    body: (i18n) =>
      i18n._(
        msg`After a decade in the trenches, spanning full-stack, distributed systems, and now AI. I've seen how easily technical noise can drown out real business value. I now leverage AI to automate the repetitive, 'boring' parts of platform engineering that traditionally consumed 40% of development time. This automation has freed up my focus for high-impact architectural decisions, allowing me to build systems that are not just functional, but truly resilient.`
      ),
  },
];

export const About = () => {
  const { i18n } = useLingui();
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 md:py-32 about-scene"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionAlienCaption label="about" className="mb-3" />
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight "
            >
              <Trans>
                A quiet operator
                <br />
                in a noisy industry.
              </Trans>
            </h2>

            <figure className="mt-8 flex-col max-w-2/4 hidden lg:flex">
              <img
                src={codingImg}
                alt={i18n._(
                  msg`Portrait of Henrique using a laptop, with a focused expression, in a cozy, dimly lit room. The warm glow of the screen illuminates his face, highlighting his dedication and passion for coding.`
                )}
                className="rounded-t-lg border border-muted-foreground/20"
              />
              <blockquote className="border-l-2 rounded-b-2xl border-b-2 border-muted-foreground/20 text-sm  p-4 italic text-muted-foreground">
                -{' '}
                <Trans>
                  I build platforms that brings calm, simplicity, and reliability, so product teams
                  can move fast, sleep well, and ship with confidence.
                </Trans>
              </blockquote>
            </figure>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {chapters.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <TerminalWindow title={`chapter_0${i + 1}.md`}>
                  <p className="font-mono text-xs comment-highlight mb-2">// {c.title(i18n)}</p>
                  <p className="font-sans text-base leading-relaxed text-foreground/90">
                    {c.body(i18n)}
                  </p>
                </TerminalWindow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
