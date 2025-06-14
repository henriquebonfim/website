import { SECTION_ITEMS, SOCIAL_LINKS } from '#/shared/constants';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import type { FC, ReactNode } from 'react';

interface SocialMediaLink {
  name: string;
  url: string;
  svgPath: ReactNode;
}

interface ResumeLink {
  url: string;
  svgPaths: ReactNode[];
}

const SocialIcon: FC<{
  name: string;
  url: string;
  children: ReactNode;
  download?: boolean;
}> = ({ name, url, children, download }) => {
  const { i18n } = useLingui();

  const ariaLabel = download
    ? i18n._(msg`Download ${name}`)
    : i18n._(msg`Follow on ${name}`);

  return (
    <a
      className="cursor-pointer"
      aria-label={ariaLabel}
      title={ariaLabel}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...(download && { download })}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="fill-base-300 hover:fill-base-100 h-6 w-6"
      >
        {children}
      </svg>
    </a>
  );
};
const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'GitHub',
    url: SOCIAL_LINKS.GITHUB,
    svgPath: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    ),
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.LINKEDIN,
    svgPath: (
      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
    ),
  },
];

const resumeLink: ResumeLink = {
  url: SOCIAL_LINKS.RESUME,
  svgPaths: [
    <path
      key="path1"
      opacity="0.4"
      d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
    />,
    <path
      key="path2"
      d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
    />,
    <path
      key="path3"
      d="M12.2795 14.72C11.9895 14.43 11.5095 14.43 11.2195 14.72L10.4995 15.44V11.25C10.4995 10.84 10.1595 10.5 9.74945 10.5C9.33945 10.5 8.99945 10.84 8.99945 11.25V15.44L8.27945 14.72C7.98945 14.43 7.50945 14.43 7.21945 14.72C6.92945 15.01 6.92945 15.49 7.21945 15.78L9.21945 17.78C9.22945 17.79 9.23945 17.79 9.23945 17.8C9.29945 17.86 9.37945 17.91 9.45945 17.95C9.55945 17.98 9.64945 18 9.74945 18C9.84945 18 9.93945 17.98 10.0295 17.94C10.1195 17.9 10.1995 17.85 10.2795 17.78L12.2795 15.78C12.5695 15.49 12.5695 15.01 12.2795 14.72Z"
    />,
  ],
};

export const SocialMedia: FC = () => {
  return (
    <section id={SECTION_ITEMS.SOCIAL_MEDIA} className="mx-auto flex gap-3">
      {socialMediaLinks.map((link) => (
        <SocialIcon key={link.name} name={link.name} url={link.url}>
          {link.svgPath}
        </SocialIcon>
      ))}
      <SocialIcon name="Resume" url={resumeLink.url} download>
        {resumeLink.svgPaths}
      </SocialIcon>
    </section>
  );
};
