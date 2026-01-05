import type { I18n, MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import { ArrowRight } from 'lucide-react';
import React, { memo, type FC } from 'react';

interface Project {
  title: string;
  popup_text: MessageDescriptor;
  image: string;
  link: string;
  alt: MessageDescriptor;
  category: MessageDescriptor[];
  role?: MessageDescriptor;
  period?: MessageDescriptor;
  location?: MessageDescriptor;
  image_position?: string;
}

const LIST_PERSONAL_PROJECTS: ReadonlyArray<Project> = [
  {
    title: 'tick3r',
    popup_text: msg`Extract frames from any video. Built with TypeScript and modern web technologies.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/tick3r/main/public/og-image.webp',
    link: 'https://github.com/henriquebonfim/tick3r',
    alt: msg`tick3r project interface`,
    category: [msg`Video`, msg`TypeScript`],
  },
  {
    title: 'O11y Stack',
    popup_text: msg`Production-ready observability stack with OpenTelemetry, Prometheus, Loki, Tempo, and Grafana. Features automatic HTTPS via Traefik.`,
    image:
      'https://raw.githubusercontent.com/henriquebonfim/o11y-stack-template/master/docs/system-health-overview.png',
    link: 'https://github.com/henriquebonfim/o11y-stack-template',
    alt: msg`O11y Stack system health dashboard`,
    category: [msg`Observability`, msg`DevOps`],
  },
  {
    title: 'Text To Video',
    popup_text: msg`Text-to-video generation pipeline using CogVideoX-2B. Running on Kaggle Kernels for high-performance inference.`,
    image: 'https://placehold.co/800x600/20BEFF/ffffff?text=CogVideoX-2B',
    link: 'https://www.kaggle.com/code/henriquebonfim/text-to-video-cogvideox-2b',
    alt: msg`CogVideoX-2B Text to Video generation`,
    category: [msg`AI`, msg`LLM`],
  },
  {
    title: 'Ollama LLM Server',
    popup_text: msg`A scalable Ollama LLM server implementation. deploy local large language models with an API interface.`,
    image: 'https://placehold.co/800x600/000000/ffffff?text=Ollama+Server',
    link: 'https://www.kaggle.com/code/henriquebonfim/ollama-llm-server',
    alt: msg`Ollama LLM Server`,
    category: [msg`AI`, msg`LLM`],
  },
  {
    title: 'ai-chat',
    popup_text: msg`A lightweight, real-time chat-bot that connects to your local LLM services via Docker Model Runner.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/ai-chat/main/chat.png',
    link: 'https://github.com/henriquebonfim/ai-chat',
    alt: msg`AI Chat application interface`,
    category: [msg`Chatbot`, msg`TypeScript`],
  },
  {
    title: 'ultra-dl',
    popup_text: msg`UltraDL is a modern, high-performance video downloader web application. Backed by Python.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/ultra-dl/main/image.gif',
    link: 'https://github.com/henriquebonfim/ultra-dl',
    alt: msg`UltraDL application interface`,
    category: [msg`Video`, msg`Python`],
  },
  {
    title: 'premium-blogger',
    popup_text: msg`A collection of open source blog templates generated and curated for modern blogging needs.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/premium-blogger/v2/docs/image.png',
    link: 'https://github.com/henriquebonfim/premium-blogger',
    alt: msg`Premium Blogger templates preview`,
    category: [msg`Blog`, msg`Templates`],
  },
  {
    title: 'Roça Eats',
    popup_text: msg`Hackatrouble SP 2020 award-winning platform connecting rural farmers with charity organizations to reduce food waste. Built with NodeJS, Angular, and AWS.`,
    image:
      'https://raw.githubusercontent.com/henriquebonfim/roca-eats/master/roca-landing.png',
    link: 'https://github.com/henriquebonfim/roca-eats',
    alt: msg`Roça Eats platform landing page`,
    category: [msg`Food`, msg`SaaS`],
    image_position: 'object-top',
  },
  {
    title: 'ArduEVE',
    popup_text: msg`IoT automation system using microservices architecture with NodeJS, VueJS, and MongoDB. Controls electronic relays for lighting and door access.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/ArduEVE/master/Ardueve.png',
    link: 'https://github.com/hpbonfim/ArduEVE',
    alt: msg`ArduEVE IoT automation system interface`,
    category: [msg`Application`, msg`IoT`],
  },
  {
    title: 'Crawler Mercado Libre',
    popup_text: msg`Web scraping tool for Mercado Libre using NodeJS. Extracts product data for price comparison and market analysis.`,
    image: 'https://placehold.co/800x600/ffe600/2d3277?text=Crawler+ML',
    link: 'https://github.com/henriquebonfim/crawler-mercadolibre',
    alt: msg`Crawler Mercado Libre interface`,
    category: [msg`CLI`, msg`Web Scraping`],
  },
  {
    title: 'Pet Porta App',
    popup_text: msg`Mobile-controlled door access system built with NodeJS microservices, MongoDB, and Arduino integration.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/pet-porta-app/v1.0/png/inicio-login.png',
    link: 'https://github.com/hpbonfim/pet-porta-app',
    alt: msg`Pet Porta App mobile interface`,
    category: [msg`Application`, msg`IoT`],
  },
  {
    title: 'Mideal',
    popup_text: msg`Blockchain-based legal contract platform recognized in Top 50 at Megahack v2 2020. Implements NodeJS, Angular, and Google Cloud.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/MegaHack-v2-2020-Projeto-Mideal/master/mideal-logo-white.png',
    link: 'https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal',
    alt: msg`Mideal preview`,
    category: [msg`Blockchain`, msg`SaaS`],
  },
  {
    title: 'Canivete Perneta',
    popup_text: msg`Mobile companion app for truck drivers developed at HackathonCCR. Features route optimization and rest stop finder.`,
    image: 'https://raw.githubusercontent.com/henriquebonfim/HackathonCCR/master/canivete.png',
    link: 'https://github.com/hpbonfim/HackathonCCR',
    alt: msg`Canivete Perneta app preview`,
    category: [msg`Mobile`, msg`App`],
  },
  {
    title: 'EduDoa',
    popup_text: msg`Educational platform for mobile network sharing, providing interactive learning tools and resources.`,
    image:
      'https://henriquebonfim.github.io/Hackathon-IBM-CallForCode-Project_EduDoa/img/iPhone-principal.png',
    link: 'https://github.com/henriquebonfim/Hackathon-IBM-CallForCode-Project_EduDoa',
    alt: msg`EduDoa app preview`,
    category: [msg`Mobile`, msg`EduTech`],
  },
];

const ProjectGridItem: React.FC<{
  project: Project;
  i18n: I18n;
}> = ({ project, i18n }) => {
  return (
    <div className="group relative flex flex-col bg-base-primary border-2 border-base-content/20 hover:border-primary transition-colors duration-300">
      {/* Window Header */}
      <div className="flex items-center gap-1 px-2 py-1 border-b-2 border-base-content/20 bg-base-200/50">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-base-content/20 group-hover:bg-error transition-colors" />
          <div className="w-1 h-1 rounded-full bg-base-content/20 group-hover:bg-warning transition-colors" />
          <div className="w-1 h-1 rounded-full bg-base-content/20 group-hover:bg-success transition-colors" />
        </div>
        <div className="ml-auto text-[10px] font-mono opacity-50">
          ~/projects/{project.title.toLowerCase().replace(/\s+/g, '-').slice(0, 16)}
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden ">
        <img
          src={project.image}
          alt={i18n._(project.alt)}
          className={`h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 `}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/800x600/1e1e1e/FFF?text=${encodeURIComponent(project.title)}`;
          }}
        />

      </div>

      <div className="flex flex-col gap-4 p-5 font-mono">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-primary group-hover:text-primary-focus">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0 focus:outline-none">
                {project.title}
              </a>
            </h3>
            <ArrowRight className="h-4 w-4 -rotate-45 text-base-content/40 transition-transform duration-300 group-hover:rotate-0 group-hover:text-primary" />
          </div>
        </div>

        <p className="text-sm leading-relaxed opacity-80 line-clamp-3">
          {i18n._(project.popup_text)}
        </p>

        {project.category && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.category.slice(0, 3).map((cat, idx) => (
              <span
                key={idx}
                className="border border-base-content/20 bg-base-200/50 px-2 py-0.5 text-xs text-secondary-content"
              >
                #{i18n._(cat)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Projects: FC = memo(() => {
  const { i18n } = useLingui();

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center p-3"
      aria-label={i18n._(msg`Project list`)}
      role="region"
    >
      <h2 className="text-center" role="heading" aria-level={2}>
        <Trans>Some of my projects that showcase my skills</Trans>
      </h2>

      <hr className="divider divider-neutral" role="separator" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {LIST_PERSONAL_PROJECTS.map((project, idx) => (
          <ProjectGridItem
            key={project.title + idx}
            project={project}
            i18n={i18n}
          />
        ))}
      </div>

      <hr className="divider divider-neutral w-1/3 mx-auto my-4" role="separator" />


    </div>
  );
});

export default Projects;
