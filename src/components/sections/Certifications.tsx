import { certifications, type Certification } from '@/data/certifications';
import { AnimatePresence, motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useMemo, useState } from 'react';

const categories: ('All' | Certification['category'])[] = [
  'All',
  'AWS',
  'Google Cloud',
  'Microsoft',
  'Kubernetes',
  'Security',
  'AI',
  'Other',
];

export const Certifications = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? certifications : certifications.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="certifications" className="relative py-24 md:py-32 certifications-scene">
      <div className="container">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] comment-highlight mb-3">
            // certifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {certifications.length} credentials, one operator.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Verified across cloud, platform, security, and AI.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => {
            const active = filter === c;
            const count =
              c === 'All'
                ? certifications.length
                : certifications.filter((x) => x.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                  active
                    ? 'border-primary/60 bg-primary/15 text-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                <span>{c}</span>
                <span className="text-[10px] opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.article
                layout
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-xl border border-border bg-card/60 backdrop-blur-md p-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 grid place-items-center h-9 w-9 rounded-lg bg-primary/15 text-primary-glow">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-mono text-[13px] font-semibold leading-snug text-foreground group-hover:text-primary-glow transition-colors">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} · <span className="font-mono">{c.year}</span>
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
