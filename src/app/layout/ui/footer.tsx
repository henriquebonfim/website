import { SOCIAL_LINKS } from '#/shared/constants';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import type { FC } from 'react';

/**
 * Footer component displays social media links and author credit.
 * @returns {JSX.Element} The footer section of the website
 */
export const Footer: FC = () => {
  const { i18n } = useLingui();
  return (
    <footer
      className="bg-neutral border-base-100 mx-auto mt-1 flex w-full flex-col items-center justify-center border-t-1 py-3 text-center"
      aria-label="Website footer"
      role="contentinfo"
    >
      <p
        className="text-neutral-content mx-0 mb-3"
        aria-label={i18n._(msg`Author credit`)}
      >
        Made with{' '}
        <span
          className="inline-block motion-safe:animate-[heartbeat_1.2s_infinite]"
          aria-label={i18n._(msg`heart`)}
          role="img"
        >
          ❤️
        </span>{' '}
        by{' '}
        <a
          role="link"
          aria-label={i18n._(msg`GitHub profile of Henrique Bonfim`)}
          href={SOCIAL_LINKS.GITHUB}
          title={i18n._(msg`GitHub profile of Henrique Bonfim`)}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:ring-primary inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-1 py-1 underline focus:ring-2 focus:outline-none"
        >
          Henrique Bonfim
        </a>
      </p>

      <div className="ghost_loader_wrap" role="none" aria-hidden="true">
        <div className="pacman-loader" />
        <div className="ghosts">
          <div className="ghost one blinky" />
          <div className="ghost two clyde" />
          <div className="ghost three inky" />
          <div className="ghost four pinky" />
        </div>
      </div>
    </footer>
  );
};
