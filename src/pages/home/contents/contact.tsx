import { API } from '#/shared/constants';
import { Windows96 } from '#/widgets/windows';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import React from 'react';

/**
 * Contact component displays contact options and a Google Maps embed.
 * Semantic, accessible, and responsive. Uses TailwindCSS and DaisyUI.
 */
export const Contact: React.FC = () => (
  <div className="not-prose -mt-3 flex flex-col gap-3">
    <nav
      aria-label={t`Contact methods`}
      className="mx-auto mb-3 flex gap-4 p-0"
    >
      <a
        href="https://wa.me/+5548996855477?text=Hello%20Henrique%2C%20I%20found%20your%20contact%20on%20your%20website."
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t`Contact via WhatsApp`}
        className="inline-flex items-center rounded bg-green-500 px-3 py-1 text-xs text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        tabIndex={0}
      >
        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            d="M16.72 13.06c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.23.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        WhatsApp
      </a>
      <a
        href="https://t.me/henriquebonfim?text=Hello%20Henrique%2C%20I%20found%20your%20contact%20on%20your%20website."
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t`Contact via Telegram`}
        className="inline-flex items-center rounded bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        tabIndex={0}
      >
        {/* Telegram icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-3 w-3"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.04 16.62l-.39 3.47c.56 0 .8-.24 1.09-.53l2.62-2.49 5.44 3.97c1 .55 1.71.26 1.96-.92l3.56-16.7c.32-1.48-.54-2.06-1.5-1.7L2.37 9.34c-1.45.56-1.43 1.36-.25 1.72l4.37 1.37 10.15-6.39c.48-.31.92-.14.56.2l-8.2 7.41z" />
        </svg>
        Telegram
      </a>
      <a
        href="https://www.linkedin.com/in/henriquebonfim"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t`Contact via LinkedIn`}
        className="inline-flex items-center rounded bg-blue-700 px-3 py-1 text-xs text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        tabIndex={0}
      >
        {/* LinkedIn icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-3 w-3"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z" />
        </svg>
        LinkedIn
      </a>
    </nav>

    <p>
      <Trans>
        Reach out to me via WhatsApp, Telegram or LinkedIn. Let's connect!
      </Trans>
    </p>
    <Windows96 className="relative">
      <figure className="absolute right-0 z-10 m-2 flex flex-1 justify-center">
        <img
          src="/assets/photos/contact_me.webp"
          alt={t`Henrique at AWS event, smiling and inspired`}
          className="w-26 rotate-y-180 rounded-lg border-1 shadow-lg md:w-33"
          tabIndex={0}
        />
        <figcaption className="sr-only">{t`Henrique eating somewhere, 2025`}</figcaption>
      </figure>
      <iframe
        className="w-full grayscale-100 invert-100"
        title={t`Florianópolis Location`}
        src={API.GOOGLE_MAPS_EMBED}
        style={{ border: 0, height: '500px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Windows96>
  </div>
);
