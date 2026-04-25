import { SectionAlienCaption } from '@/components/SectionAlienCaption';
import { motion } from 'framer-motion';
import { ArrowUpRight, Box, FileDown, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    value: '@henriquebonfim',
    href: 'https://github.com/henriquebonfim',
    Icon: Github,
  },

  {
    label: 'LinkedIn',
    value: '@henriquebonfim',
    href: 'https://linkedin.com/in/henriquebonfim',
    Icon: Linkedin,
  },
  {
    label: 'Instagram',
    value: '@hpbonfim',
    href: 'https://www.instagram.com/hpbonfim/',
    Icon: Instagram,
  },
  {
    label: 'Docker Hub',
    value: '@hpbonfim',
    href: 'https://hub.docker.com/u/hpbonfim',
    Icon: Box,
  },
  {
    label: 'Curriculum Vitae',
    value: 'Download PDF',
    href: '/henrique-bonfim-resume.pdf',
    Icon: FileDown,
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 md:py-32 contact-scene"
    >
      <div className="container max-w-5xl">
        <SectionAlienCaption label="contact" className="mb-3" />
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl font-thin tracking-tight leading-[0.95]"
        >
          <span className=" text-gradient">Let's build</span>
          <br />
          <span className=" underline italic">something quiet,</span>
          <br />
          <span className=" text-gradient  font-extrabold">that scales loud.</span>
        </motion.h2>

        <p className="mt-6 max-w-xl text-muted-foreground">
          Open to software engineering roles, advisory, consulting, freelancing, and selective
          collaborations.
        </p>

        <address className="mt-12 not-italic">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
        </address>
      </div>
    </section>
  );
};
