import { EXPERIENCES } from '@/entities/experience';
import { SOCIAL_LINKS } from '@/shared/constants';
import { SectionAlienCaption, TerminalWindow } from '@/shared/ui';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { useMemo } from 'react';

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
  const { i18n } = useLingui();

  const achievements = useMemo(
    () => [
      {
        metric: '30k+',
        label: i18n._(msg`users scaled`),
        detail: i18n._(
          msg`Helped grow Brazil's leading photovoltaic fintech to 30,000+ users, supporting acquisition by BV Bank.`
        ),
      },
      {
        metric: '66%',
        label: i18n._(msg`manual work removed`),
        detail: i18n._(msg`Automated data entry & reporting pipelines for client teams.`),
      },
      {
        metric: '53%',
        label: i18n._(msg`faster decisions`),
        detail: i18n._(
          msg`Custom dashboards unlocked real-time insight for omnichannel and stakeholder teams.`
        ),
      },
      {
        metric: '10y',
        label: i18n._(msg`shipping in production`),
        detail: i18n._(
          msg`A decade building resilient backend on event-driven and distributed systems, frontend that users love, and now AI-driven platforms at scale!`
        ),
      },
    ],
    [i18n]
  );

  const workExperienceTags = useMemo(
    () =>
      getUniqueSortedValues(
        EXPERIENCES.flatMap((experience) => experience.tags.map((tag) => i18n._(tag)))
      ),
    [i18n]
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-24 md:py-32 experience-scene"
    >
      <div className="container">
        <div className="max-w-3xl">
          <SectionAlienCaption label="$ echo experience.log" className="mb-3" />
          <h2
            id="experience-heading"
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] uppercase"
          >
            <Trans>
              10+ years of <br />
              <span className="text-gradient underline">turning chaos</span>
              <br />
              into <span className="text-gradient">calm systems.</span>
            </Trans>
          </h2>
          <div className="mt-6 text-muted-foreground max-w-xl  ">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full  mx-1 px-2 py-1 font-mono text-sm hover:border-primary/60 hover:bg-secondary/50 transition-colors hover:text-primary "
            >
              ./linkedin
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
            <Trans>
              I turned business needs into products, platforms, and measurable results that
              mattered.
            </Trans>
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <Trans>Work experience tags</Trans>
            </p>
            <div className="flex flex-wrap gap-2">
              {workExperienceTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  <span>{tag}</span>
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
            {EXPERIENCES.map((exp, i) => (
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
                        {i18n._(exp.role)}{' '}
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
                    {i18n._(exp.type)}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h.id}
                        className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                      >
                        <span className="text-primary-glow font-mono shrink-0">▸</span>
                        <span>{i18n._(h)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        <Trans>Tags</Trans>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {i18n._(tag)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        <Trans>Stack</Trans>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
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
