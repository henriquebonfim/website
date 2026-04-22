import { achievements, experiences } from '@/data/experience';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { TerminalWindow } from '../TerminalWindow';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] comment-highlight mb-4">
            // $ cat ./experience.log
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
            A decade of shipping
            <br />
            <span className="text-gradient">calm systems.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Selected roles where I built platforms, mentored engineers, and moved metrics that
            mattered.
          </p>
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
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"
            aria-hidden
          />
          <ul className="space-y-8">
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
                      {exp.period}
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
                  {exp.stack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </TerminalWindow>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="/henrique-bonfim-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors glow-ring"
          >
            <span>$ download ./resume.pdf</span>
          </a>
          <a
            href="https://linkedin.com/in/henriquebonfim"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-sm hover:border-primary/60 hover:bg-secondary/50 transition-colors"
          >
            <span>./full_history.linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
};
