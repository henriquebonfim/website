import { t } from '@lingui/core/macro';
import type { FC } from 'react';

interface Project {
  title: string;
  popup_text: string;
  image: string;
  link: string;
  alt: string;
  category: string[];
}

const ProjectCategoryBadge: FC<{ cat: string }> = ({ cat }) => (
  <div
    className="badge badge-outline pointer-events-none whitespace-nowrap"
    tabIndex={-1}
    aria-label={cat}
  >
    {cat}
  </div>
);

const ProjectCard: FC<{ project: Project; descId: string }> = ({
  project,
  descId,
}) => (
  <div className="justify-center md:flex">
    <div className="card bg-base-100 flex w-full max-w-xs flex-col shadow-md">
      <figure className="rounded-t-lg bg-gray-100">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-60 w-full rounded-t-lg object-cover"
        />
      </figure>
      <div className="card-body bg-neutral/50 flex flex-1 flex-col p-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.title}
          aria-describedby={descId}
          className="card-title text-lg font-semibold"
        >
          {project.title}
        </a>
        <div className="card-actions flex flex-row flex-wrap justify-start gap-2">
          {project.category.map((cat) => (
            <ProjectCategoryBadge key={cat} cat={cat} />
          ))}
        </div>
        <small id={descId}>{project.popup_text}</small>
      </div>
    </div>
  </div>
);

export const Projects: FC = () => {
  const LIST_PROJECTS: ReadonlyArray<Project> = [
    {
      title: 'ArduEVE',
      popup_text: t`Project built with microservices architecture and Docker Swarm, using NodeJS, VueJS, MongoDB, Arduino, and more, to control an electronic relay used to activate/deactivate a light and an electronic door, as well as some sensors to transmit real-time data readings.`,
      image:
        'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/ardueve800x600.gif',
      link: 'https://github.com/hpbonfim/ArduEVE',
      alt: t`ArduEVE project screenshot`,
      category: ['Application', 'IoT'],
    },
    {
      title: 'Pet Porta App',
      popup_text: t`Project built with microservices architecture and Docker Swarm, using NodeJS, VueJS, MongoDB, and Arduino, to control an electronic relay for opening the PET SISTEMAS door via mobile phone.`,
      image:
        'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/pet800x600.png',
      link: 'https://github.com/hpbonfim/pet-porta-app',
      alt: t`Pet Porta App project screenshot`,
      category: ['Application', 'IoT'],
    },
    {
      title: 'Roça Eats',
      popup_text: t`Award-winning project at Hackatrouble SP 2020, built with NodeJS, Angular, and AWS infrastructure to manage a system for donating surplus farm produce from rural producers, aiming for distribution to charity institutions.`,
      image:
        'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/roca800x600.png',
      link: 'https://github.com/hpbonfim/roca-eats',
      alt: t`Roça Eats project screenshot`,
      category: ['Open Source', 'SaaS'],
    },
    {
      title: 'Mideal',
      popup_text: t`Top 50 project at Megahack v2 2020, a platform built with NodeJS, Angular, and Google Cloud infrastructure, aiming to create a blockchain system for generating legal contracts with 100% legal integrity and transparency.`,
      image:
        'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/mideal800x600.png',
      link: 'https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal',
      alt: t`Mideal project screenshot`,
      category: ['Open Source', 'SaaS'],
    },
    {
      title: 'Canivete Perneta',
      popup_text: t`Project created at HackathonCCR, using React-Native and AWS infrastructure, designed to assist truck drivers in their daily tasks.`,
      image:
        'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/canivete800x600.png',
      link: 'https://github.com/hpbonfim/HackathonCCR',
      alt: t`Canivete Perneta project screenshot`,
      category: ['Open Source', 'App'],
    },
  ];

  return (
    <article className="not-prose grid justify-center gap-3 sm:grid-cols-3 lg:grid-cols-3">
      {LIST_PROJECTS.map((project, idx) => {
        const descId = `project-desc-${idx}`;
        return (
          <ProjectCard key={project.title} project={project} descId={descId} />
        );
      })}
    </article>
  );
};
