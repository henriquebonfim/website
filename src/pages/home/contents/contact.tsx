import { EMBED, SOCIAL_LINKS } from '#/shared/constants';
import { Windows96 } from '#/widgets/windows';
import type { I18n } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import React, { memo, type FC } from 'react';

/**
 * Contact component displays contact options and a profile image.
 * Optimized for accessibility, performance, and following Lighthouse best practices.
 *
 * @returns {JSX.Element} The Contact component
 */
const ContactLinks: React.FC<{ i18n: I18n }> = ({ i18n }) => (
  <nav
    aria-label={i18n._(msg`Contact methods`)}
    className="mx-auto mb-3 flex flex-wrap justify-center gap-4 p-0"
  >
    <a
      href={SOCIAL_LINKS.WHATSAPP}
      target="_blank"
      role="link"
      rel="noopener noreferrer"
      aria-label={i18n._(msg`Contact via WhatsApp`)}
      className="inline-flex h-9 items-center rounded px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-5 w-5 rounded-full bg-green-500"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        width="20"
        height="20"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
      <span className="text-sm">WhatsApp</span>
    </a>
    <a
      href={SOCIAL_LINKS.TELEGRAM}
      target="_blank"
      role="link"
      rel="noopener noreferrer"
      aria-label={i18n._(msg`Contact via Telegram`)}
      className="inline-flex h-9 items-center rounded px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      {/* Telegram icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-5 w-5 rounded-full bg-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        width="20"
        height="20"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
      <span className="text-sm">Telegram</span>
    </a>
    <a
      href={SOCIAL_LINKS.LINKEDIN}
      target="_blank"
      role="link"
      rel="noopener noreferrer"
      aria-label={i18n._(msg`Contact via LinkedIn`)}
      className="inline-flex h-9 items-center rounded px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
    >
      {/* LinkedIn icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-5 w-5 rounded-full bg-blue-700"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        width="20"
        height="20"
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z" />
      </svg>
      <span className="text-sm">LinkedIn</span>
    </a>
  </nav>
);

const Contact: FC = memo(() => {
  const { i18n } = useLingui();

  return (
    <section
      className="m-auto flex flex-col gap-0 py-3 sm:min-w-3xl"
      role="region"
    >
      <h2 className="text-center" role="heading" aria-level={2}>
        <Trans>Let's connect!</Trans>
      </h2>
      <hr className="divider divider-neutral mb-0 pb-0" role="separator" />
      <p className="text-center">
        <Trans>Reach out to me via WhatsApp, Telegram, LinkedIn.</Trans>
      </p>
      <ContactLinks i18n={i18n} />

      <div className="not-prose">
        <Windows96
          className="relative"
          title="Window Help: Henrique's Office Location"
        >
          <figure
            className="absolute right-0 m-2 flex flex-1 justify-end"
            role="figure"
            aria-label={i18n._(
              msg`Henrique having lunch, smiling and hungry, 2023`,
            )}
          >
            <img
              src="/assets/photos/myself_eating.webp"
              alt={i18n._(msg`Henrique having lunch, smiling and hungry, 2023`)}
              className="w-26 rotate-y-180 rounded-lg border-1 shadow-lg md:w-33"
              width="132"
              height="100"
              role="img"
              aria-labelledby="contact-me-caption"
              loading="lazy"
              fetchPriority="high"
            />
          </figure>
          <div className="h-[500px] w-full" role="presentation">
            <iframe
              title={i18n._(msg`Henrique location`)}
              aria-label={i18n._(msg`Henrique location`)}
              aria-describedby="contact-me-caption"
              src={EMBED.GOOGLE_MAPS}
              width="600"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </Windows96>
      </div>
    </section>
  );
});

export default Contact;
