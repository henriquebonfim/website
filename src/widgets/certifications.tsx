import { BADGES } from "#/shared/constants";
import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import type { FC } from "react";

export const Certifications: FC = () => {
  const { i18n } = useLingui();

  // Filter badges that have images
  const badgesWithImages = BADGES.filter((badge) => badge.img);

  return (
    <section
      className="p-3"
      role="region"
      aria-label={i18n._(msg`Professional certifications from Credly`)}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {badgesWithImages.map((badge) => (
          <a
            key={badge.url}
            href={badge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
            aria-label={badge.name}
            title={badge.name}
          >
            <img
              src={badge.img}
              alt={badge.name}
              className="h-auto w-6/12 rounded-lg grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
              loading="lazy"
              draggable={false}
            />
          </a>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a
          href="https://www.credly.com/users/henriquebonfim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-300 hover:text-base-100 text-sm transition-colors"
          aria-label={i18n._(msg`View all certifications on Credly`)}
        >
          {i18n._(msg`View all ${BADGES.length} certifications →`)}
        </a>
      </div>
    </section>
  );
};
