import { projects } from '@/entities/project';
import { SectionAlienCaption } from '@/shared/ui';
import { Trans, useLingui } from '@lingui/react/macro';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { useMemo, useState } from 'react';

type ProjectFilter = 'All' | string;

const getUniqueValues = (values: string[]) => Array.from(new Set(values));

const sortValuesByUsage = (values: string[], getCount: (value: string) => number) =>
  getUniqueValues(values).sort((left, right) => {
    const countDifference = getCount(right) - getCount(left);

    return countDifference !== 0 ? countDifference : left.localeCompare(right);
  });

const projectTagCount = (tag: string) =>
  projects.filter((project) => project.tags.includes(tag)).length;

const projectStackCount = (stack: string) =>
  projects.filter((project) => project.stack.includes(stack)).length;

export const Projects = () => {
  const { i18n } = useLingui();
  const projectTags = useMemo(
    () =>
      sortValuesByUsage(
        projects.flatMap((project) => project.tags),
        projectTagCount
      ),
    []
  );

  const projectStacks = useMemo(
    () =>
      sortValuesByUsage(
        projects.flatMap((project) => project.stack),
        projectStackCount
      ),
    []
  );

  const [activeTag, setActiveTag] = useState<ProjectFilter>('All');

  const filteredProjects = useMemo(
    () =>
      activeTag === 'All'
        ? projects
        : projects.filter(
            (project) => project.tags.includes(activeTag) || project.stack.includes(activeTag)
          ),
    [activeTag]
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-24 md:py-32 projects-scene"
    >
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <SectionAlienCaption label="projects" className="mb-3" />
            <h2
              id="projects-heading"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase"
            >
              <Trans>Selected projects I've built.</Trans>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl">
              <Trans>
                A selection of open-source and internal projects that show things I built to solve
                real problems, with notes on why some of them were hard.
              </Trans>
            </p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            $ ls ~/projects · {filteredProjects.length} / {projects.length} entries
          </p>
        </div>

        <div className="mb-6 space-y-5">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <Trans>Project tags</Trans>
            </p>
            <div className="flex flex-wrap gap-2">
              {['All', ...projectTags].map((tag, i) => {
                const active = activeTag === tag;
                const count = tag === 'All' ? projects.length : projectTagCount(tag);

                return (
                  <button
                    key={i + tag}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveTag(tag)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                      active
                        ? 'border-primary/60 bg-primary/15 text-foreground'
                        : 'border-border text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <span>{tag}</span>
                    <span className="text-[10px] opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <Trans>Project Stacks</Trans>
            </p>
            <div className="flex flex-wrap gap-2">
              {['All', ...projectStacks].map((stack, i) => {
                const active = activeTag === stack;
                const count = stack === 'All' ? projects.length : projectStackCount(stack);

                return (
                  <button
                    key={i + stack}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveTag(stack)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                      active
                        ? 'border-primary/60 bg-primary/15 text-foreground'
                        : 'border-border text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <span>{stack}</span>
                    <span className="text-[10px] opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-h-192 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.article
                  key={i + p.name}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group terminal-window overflow-hidden flex flex-col hover:border-primary/50 transition-colors mt-3"
                >
                  <div className="terminal-bar">
                    <span className="traffic-dot bg-term-red" />
                    <span className="traffic-dot bg-term-yellow" />
                    <span className="traffic-dot bg-term-green" />
                    <span className="ml-3 font-mono text-xs text-muted-foreground truncate">
                      {p.name}
                    </span>
                    {p.status && (
                      <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {p.status === 'live'
                          ? '● live'
                          : p.status === 'wip'
                            ? '◐ wip'
                            : '○ archived'}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-mono text-xs text-primary mb-3 truncate">$ {p.command}</p>
                    <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary-glow transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {i18n._(p.description)}
                    </p>

                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Tags
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map((t, i) => (
                            <span
                              key={i + t}
                              className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map((s, i) => (
                            <span
                              key={i + s}
                              className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-primary/20 bg-primary/10 text-foreground/85"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <GitBranch className="h-3.5 w-3.5" /> repo
                        </a>
                      )}
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
