import type { FC } from 'react';
import { GITHUB_URL } from './projects/constant';
import { SocialMedia } from './social-media';

/**
 * Footer component displays social media links and author credit.
 * @returns The footer section of the website.
 */
export const Footer: FC = () => {
  return (
    <footer className="bg-neutral border-base-100 mx-auto mt-1 flex w-full flex-col items-center justify-center gap-1 border-t-1 text-center">
      <div className="divider divider-base mx-auto w-3/12">
        <SocialMedia />
      </div>
      <pre className="text-base-300 -m-1 mb-3 text-xs">
        Made with{' '}
        <span role="img" aria-label="love">
          &#x2764;
        </span>{' '}
        by{' '}
        <a
          href={GITHUB_URL}
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrique Bonfim
        </a>
        .
      </pre>
    </footer>
  );
};
