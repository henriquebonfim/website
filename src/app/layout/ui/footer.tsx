import { SOCIAL_LINKS } from '#/shared/constants';
import { SocialMedia } from '#/widgets/social-badges';
import type { FC } from 'react';

/**
 * Footer component displays social media links and author credit.
 * Uses semantic HTML, ARIA attributes, and accessible links.
 * @returns {JSX.Element} The footer section of the website.
 */
export const Footer: FC = () => (
  <footer
    className="bg-neutral border-base-100 mx-auto mt-1 flex w-full flex-col items-center justify-center gap-1 border-t-1 text-center"
    aria-label="Website Footer"
  >
    <div className="divider divider-base mx-auto w-3/12">
      <SocialMedia />
    </div>
    <p className="text-base-300 -m-1 mb-3 text-xs">
      Made with&nbsp;
      <span
        role="img"
        aria-label="love"
        className="inline-block animate-[heartbeat_1.2s_infinite] grayscale-100 invert-100"
      >
        &#x2764;
      </span>
      &nbsp;by&nbsp;
      <a
        href={SOCIAL_LINKS.GITHUB}
        title="GitHub profile of Henrique Bonfim"
        target="_blank"
        rel="noopener noreferrer"
        className="focus:ring-primary underline focus:ring-2 focus:outline-none"
      >
        Henrique Bonfim
      </a>
    </p>
  </footer>
);
