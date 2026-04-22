import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const links = [
  {
    label: 'Email',
    value: 'hello@henriquebonfim.com',
    href: 'mailto:hello@henriquebonfim.com',
    Icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/henriquebonfim',
    href: 'https://github.com/henriquebonfim',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/henriquebonfim',
    href: 'https://linkedin.com/in/henriquebonfim',
    Icon: Linkedin,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] comment-highlight mb-4">
          // contact
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]"
        >
          Let's build
          <br />
          <span className="text-gradient">something quiet,</span>
          <br />
          that scales loud.
        </motion.h2>

        <p className="mt-6 max-w-xl text-muted-foreground">
          Open to senior platform / staff engineering roles, advisory, and selective collaborations.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur-md p-5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary-glow" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
              <p className="mt-1 font-mono text-sm truncate group-hover:text-primary-glow transition-colors">
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
