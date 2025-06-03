import type { I18n, MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import React, { memo, useCallback, useEffect, useState, type FC } from 'react';

interface Project {
  title: string;
  popup_text: MessageDescriptor;
  image: string;
  link: string;
  alt: MessageDescriptor;
  category: MessageDescriptor[];
}

const LIST_PROJECTS: ReadonlyArray<Project> = [
  {
    title: 'ArduEVE',
    popup_text: msg`IoT automation system using microservices architecture with NodeJS, VueJS, and MongoDB. Controls electronic relays for lighting and door access while providing real-time sensor monitoring through Docker Swarm deployment.`,
    image:
      'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/ardueve800x600.gif',
    link: 'https://github.com/hpbonfim/ArduEVE',
    alt: msg`ArduEVE IoT automation system interface showing real-time sensor data`,
    category: [msg`Application`, msg`IoT`],
  },
  {
    title: 'Pet Porta App',
    popup_text: msg`Mobile-controlled door access system built with NodeJS microservices, MongoDB, and Arduino integration. Deployed with Docker Swarm for the PET SISTEMAS laboratory.`,
    image:
      'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/pet800x600.png',
    link: 'https://github.com/hpbonfim/pet-porta-app',
    alt: msg`Pet Porta App mobile interface for door access control`,
    category: [msg`Application`, msg`IoT`],
  },
  {
    title: 'Roça Eats',
    popup_text: msg`Hackatrouble SP 2020 award-winning platform connecting rural farmers with charity organizations to reduce food waste. Built with NodeJS, Angular, and AWS for scalable donation management.`,
    image:
      'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/roca800x600.png',
    link: 'https://github.com/hpbonfim/roca-eats',
    alt: msg`Roça Eats platform interface showing food donation management system`,
    category: [msg`Open Source`, msg`SaaS`],
  },
  {
    title: 'Mideal',
    popup_text: msg`Blockchain-based legal contract platform recognized in Top 50 at Megahack v2 2020. Implements NodeJS, Angular, and Google Cloud to ensure transparent, tamper-proof digital agreements with legal validity.`,
    image:
      'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/mideal800x600.png',
    link: 'https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal',
    alt: msg`Mideal blockchain contract system showing document verification interface`,
    category: [msg`Open Source`, msg`SaaS`],
  },
  {
    title: 'Canivete Perneta',
    popup_text: msg`Mobile companion app for truck drivers developed at HackathonCCR. Features route optimization, rest stop finder, and health tracking using React Native with AWS backend services.`,
    image:
      'https://raw.githubusercontent.com/hpbonfim/website/production/src/assets/projetos-page/canivete800x600.png',
    link: 'https://github.com/hpbonfim/HackathonCCR',
    alt: msg`Canivete Perneta mobile app interface showing truck driver assistance features`,
    category: [msg`Open Source`, msg`App`],
  },
];

const ProjectCard: React.FC<{
  project: Project;
  i18n: I18n;
  isFocusable: boolean;
  cardIdBase: string;
}> = ({ project, i18n, isFocusable, cardIdBase }) => {
  return (
    <section
      className="focus-within:ring-primary flex flex-col overflow-hidden rounded-lg border shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 hover:shadow-xl"
      role="group"
      aria-labelledby={`${cardIdBase}-title`}
      aria-describedby={`${cardIdBase}-desc`}
    >
      <figure
        className="not-prose aspect-[4/3]"
        role="figure"
        aria-label={i18n._(project.alt)}
      >
        <img
          role="img"
          src={project.image}
          alt={i18n._(project.alt)}
          loading="lazy"
          className="h-full w-full object-cover"
          fetchPriority="auto"
          aria-label={project.title}
          tabIndex={isFocusable ? 0 : -1}
          aria-describedby={`${cardIdBase}-desc`}
        />
      </figure>
      <div className="card-body flex flex-grow flex-col p-3">
        <h2 id={`${cardIdBase}-title`} className="mt-0 mb-2 font-mono">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:ring-primary rounded-sm hover:underline focus:ring-1 focus:outline-none"
            aria-label={`${i18n._(project.title)} (opens in a new tab)`}
            tabIndex={isFocusable ? 0 : -1}
          >
            {project.title}
          </a>
        </h2>
        <p id={`${cardIdBase}-desc`} className="mb-3 text-wrap">
          {i18n._(project.popup_text)}
        </p>
        <div className="card-actions border-base-100 mt-auto flex flex-row flex-wrap justify-start gap-2 border-t pt-3">
          {project.category.map((cat) => (
            <span
              role="badge"
              className="badge bg-primary badge-xs rounded-full px-2 py-0.5 font-mono"
              key={cat.id || i18n._(cat)}
              aria-label={`Category: ${i18n._(cat)}`}
            >
              {i18n._(cat)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects: FC = memo(() => {
  const { i18n } = useLingui();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = LIST_PROJECTS.length;
  const carouselId = 'projects-carousel-main';

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const carouselRegion = document.getElementById(carouselId + '-region');
      if (carouselRegion && carouselRegion.contains(document.activeElement)) {
        if (event.key === 'ArrowRight') {
          nextSlide();
        } else if (event.key === 'ArrowLeft') {
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center p-3"
      aria-label={i18n._(msg`Project list`)}
      role="region"
      aria-live="polite"
      aria-atomic="true"
    >
      <h2 className="text-center" role="heading" aria-level={2}>
        <Trans>Some of my projects that showcase my skills</Trans>
      </h2>

      <hr className="divider divider-neutral" role="separator" />

      {/* Mobile: Show carousel (slider) */}
      <section
        id={carouselId + '-region'}
        className="relative mx-auto w-[80vw] md:hidden"
        aria-roledescription="carousel"
        aria-label="My Projects Carousel"
        role="tab"
      >
        <div className="overflow-hidden rounded-lg shadow-md">
          {/* Pagination Dots for Carousel */}
          {totalSlides > 1 && (
            <div
              className="absolute top-3 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2"
              role="tablist"
              aria-label="Project slide picker"
            >
              {LIST_PROJECTS.map((project, idx) => (
                <button
                  key={idx + '-dot'}
                  onClick={() => setCurrentSlide(idx)}
                  className={`focus:ring-offset-base-300 h-3 w-6 rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${idx === currentSlide ? 'focus:ring-accent/50 bg-accent' : 'bg-base-300 hover:bg-gray-500 focus:ring-gray-400'}`}
                  aria-selected={idx === currentSlide}
                  aria-controls={carouselId + '-region'}
                  aria-label={`Go to project ${idx + 1}: ${i18n._(project.title)}`}
                  role="tab"
                  tabIndex={0}
                />
              ))}
            </div>
          )}

          {/* Added shadow and rounded for the container */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            role="list"
            aria-label={i18n._(msg`Project carousel slides`)}
          >
            {LIST_PROJECTS.map((project, idx) => (
              <div
                key={project.title + '-slide'}
                className="w-full flex-shrink-0"
                role="group"
                aria-label={i18n._(
                  msg`Project ${idx + 1} of ${totalSlides}: ${i18n._(project.title)}`,
                )}
                aria-hidden={idx !== currentSlide}
              >
                <ProjectCard
                  project={project}
                  i18n={i18n}
                  isFocusable={idx === currentSlide}
                  cardIdBase={`carousel-card-${idx}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons for Carousel */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="bg-neutral/30 border-base-300/30 hover:bg-neutral/50 focus:ring-primary focus:ring-offset-base-100/30 absolute top-1/3 left-3 z-10 -translate-y-1/3 transform rounded-full border-1 p-3 shadow-lg transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-controls={carouselId + '-region'}
              aria-label="Previous project"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              onClick={nextSlide}
              className="bg-neutral/30 border-base-300/30 hover:bg-neutral/50 focus:ring-primary focus:ring-offset-base-100/30 absolute top-1/3 right-3 z-10 -translate-y-1/3 transform rounded-full border-1 p-3 shadow-lg transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-controls={carouselId + '-region'}
              aria-label="Next project"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </>
        )}
      </section>

      {/* Desktop: Show cards in a grid */}
      <section
        className="hidden grid-cols-3 gap-3 md:grid"
        aria-labelledby="projects-grid-heading"
        role="grid"
      >
        {/* Hidden heading for context */}
        {LIST_PROJECTS.map((project, idx) => (
          <ProjectCard
            project={project}
            i18n={i18n}
            key={project.title + '-grid-' + idx}
            isFocusable={true}
            cardIdBase={`grid-card-${idx}`}
          />
        ))}
      </section>
    </div>
  );
});

export default Projects;
