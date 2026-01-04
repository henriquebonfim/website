import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import type { FC } from 'react';

const getImageUrl = (name: string): string =>
  new URL(`./assets/${name}.svg`, import.meta.url).href;

interface Icon {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

const icons: Icon[] = [
  { src: getImageUrl('linux'), alt: 'Linux', title: 'Linux' },
  { src: getImageUrl('android'), alt: 'Android', title: 'Android' },
  {
    src: getImageUrl('apple'),
    alt: 'Apple',
    title: 'Apple',
    className: 'invert',
  },
  { src: getImageUrl('angular'), alt: 'Angular', title: 'Angular' },
  { src: getImageUrl('css-3'), alt: 'CSS', title: 'CSS' },
  { src: getImageUrl('html-5'), alt: 'HTML', title: 'HTML' },
  { src: getImageUrl('javascript'), alt: 'JavaScript', title: 'JavaScript' },
  { src: getImageUrl('typescript'), alt: 'TypeScript', title: 'TypeScript' },
  { src: getImageUrl('react'), alt: 'React', title: 'React' },
  { src: getImageUrl('vite'), alt: 'Vite', title: 'Vite' },
  { src: getImageUrl('redux'), alt: 'Redux', title: 'Redux' },
  { src: getImageUrl('nodejs'), alt: 'Node.js', title: 'Node.js' },
  { src: getImageUrl('npm'), alt: 'NPM', title: 'NPM' },
  { src: getImageUrl('python'), alt: 'Python', title: 'Python' },
  { src: getImageUrl('pypi'), alt: 'pypi', title: 'pypi', className: 'invert' },
  { src: getImageUrl('java'), alt: 'Java', title: 'Java' },
  { src: getImageUrl('ruby'), alt: 'Ruby', title: 'Ruby' },
  { src: getImageUrl('docker'), alt: 'Docker', title: 'Docker' },
  { src: getImageUrl('kubernetes'), alt: 'Kubernetes', title: 'Kubernetes' },
  { src: getImageUrl('aws'), alt: 'AWS', title: 'AWS' },
  { src: getImageUrl('aws-lambda'), alt: 'AWS Lambda', title: 'AWS Lambda' },
  { src: getImageUrl('gcp'), alt: 'GCP', title: 'GCP' },
  { src: getImageUrl('firebase'), alt: 'Firebase', title: 'Firebase' },
  { src: getImageUrl('cycle'), alt: 'SDLC', title: 'SDLC' },
  {
    src: getImageUrl('git-branch'),
    alt: 'Git',
    title: 'Git',
    className: 'invert',
  },
  { src: getImageUrl('figma'), alt: 'Figma', title: 'Figma' },
  { src: getImageUrl('vscode'), alt: 'VSCode', title: 'VSCode' },
  { src: getImageUrl('slack'), alt: 'Slack', title: 'Slack' },
  { src: getImageUrl('teams'), alt: 'Teams', title: 'Teams' },
  { src: getImageUrl('poetry'), alt: 'Poetry', title: 'Poetry' },
  { src: getImageUrl('discord'), alt: 'Discord', title: 'Discord' },
  { src: getImageUrl('telegram'), alt: 'Telegram', title: 'Telegram' },
  { src: getImageUrl('whatsapp'), alt: 'WhatsApp', title: 'WhatsApp' },
  { src: getImageUrl('linkedin'), alt: 'LinkedIn', title: 'LinkedIn' },
];

export const ToolsCarousel: FC = () => {
  const { i18n } = useLingui();
  return (
    <section
      className="fade-mask relative w-full overflow-hidden py-4"
      role="none"
    >
      <div
        className="tools-carousel-wrapper w-fit whitespace-nowrap"
        role="listitem"
        aria-roledescription={i18n._(msg`A carousel of tools and technologies`)}
        aria-live="polite"
        aria-busy="false"
        aria-label={i18n._(
          msg`Carousel of tools and technologies used by Henrique Bonfim`,
        )}
      >
        <figure
          className="tools-carousel animate-scroll inline-flex min-w-max"
          role="figure"
        >
          {icons.concat(icons).map((icon, idx) => (
            <img
              role="img"
              aria-label={icon.title}
              key={idx}
              src={icon.src}
              alt={icon.alt}
              title={icon.title}
              className={`m-2 inline-block h-10 w-10${icon.className ? ` ${icon.className}` : ''}`}
              draggable={false}
              loading="lazy"
            />
          ))}
        </figure>
      </div>
    </section>
  );
};
