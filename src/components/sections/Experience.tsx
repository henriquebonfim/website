import { SectionAlienCaption } from '@/components/SectionAlienCaption';
import { achievements, experiences } from '@/data/experience';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { useMemo } from 'react';
import { TerminalWindow } from '../TerminalWindow';

const getUniqueSortedValues = (values: string[]) =>
  Array.from(new Set(values)).sort((left, right) => left.localeCompare(right));

const formatMonthToDate = (value: string) => {
  const [month, year] = value.trim().split('/');

  if (!month || !year) {
    return value;
  }

  return `${year}-${month.padStart(2, '0')}-01`;
};

export const Experience = () => {
  const workExperienceTags = useMemo(
    () => getUniqueSortedValues(experiences.flatMap((experience) => experience.tags)),
    []
  );

  // const workExperienceTagCount = (tag: string) =>
  //   experiences.filter((experience) => experience.tags.includes(tag)).length;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-24 md:py-32 experience-scene"
    >
      <div className="container">
        <div className="max-w-3xl">
          <SectionAlienCaption label="$ cat ./experience.log" className="mb-3" />
          <h2
            id="experience-heading"
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] uppercase"
          >
            A decade of shipping
            <br />
            <span className="text-gradient">calm systems.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl inline-block">
            Selected roles where I turned business needs into products, platforms, and measurable
            results that mattered.
            <span className="inline-block  ">
              <a
                href="https://linkedin.com/in/henriquebonfim"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full   px-5 py-1 font-mono text-sm hover:border-primary/60 hover:bg-secondary/50 transition-colors"
              >
                ./linkedin
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </span>
          </p>

          <div className="mt-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Work experience tags
            </p>
            <div className="flex flex-wrap gap-2">
              {workExperienceTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  <span>{tag}</span>
                  {/* <span className="text-[10px] opacity-70">{workExperienceTagCount(tag)}</span> */}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-md p-5 hover:border-primary/50 transition-colors"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient leading-none">
                {a.metric}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-primary-glow">
                {a.label}
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-linear-to-b from-primary/60 via-primary/20 to-transparent"
            aria-hidden
          />
          <ol className="space-y-8 list-none">
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-16"
              >
                <span className="absolute left-2 md:left-4 top-4 h-5 w-5 rounded-full bg-card border border-primary/60 grid place-items-center shadow-[0_0_20px_hsl(var(--primary-glow)/0.5)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                </span>
                <TerminalWindow title={`${exp.company.toLowerCase().replace(/\s+/g, '_')}.job`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-primary-glow" />
                      <h3 className="font-display text-lg md:text-xl font-bold">
                        {exp.role}{' '}
                        <span className="text-muted-foreground font-normal">@ {exp.company}</span>
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {(() => {
                        const [startRaw, endRaw] = exp.period.split(' — ');

                        return (
                          <>
                            <time dateTime={formatMonthToDate(startRaw ?? '')}>{startRaw}</time>
                            {' — '}
                            <time dateTime={formatMonthToDate(endRaw ?? '')}>{endRaw}</time>
                          </>
                        );
                      })()}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary-glow mb-3">
                    {exp.type}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                        <span className="text-primary-glow font-mono shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Tags
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
