import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow mb-3">
              // projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Selected work
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            $ ls ~/projects · {projects.length} entries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group terminal-window overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
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
                    {p.status === 'live' ? '● live' : p.status === 'wip' ? '◐ wip' : '○ archived'}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="font-mono text-xs text-primary-glow mb-3 truncate">$ {p.command}</p>
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary-glow transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> repo
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
        </div>
      </div>
    </section>
  );
};
