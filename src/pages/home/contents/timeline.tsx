import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import type { FC } from 'react';

/**
 * Timeline component displays a chronological list of career and education milestones.
 * Accessibility: Uses semantic HTML, ARIA attributes, and keyboard navigation support.
 */
export const Timeline: FC = () => {
  // Handles keyboard navigation for timeline items
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    index: number,
  ) => {
    const items = document.querySelectorAll('[data-timeline-item]');
    if (!items.length) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const next = (index + 1) % items.length;
      (items[next] as HTMLElement).focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = (index - 1 + items.length) % items.length;
      (items[prev] as HTMLElement).focus();
    }
  };

  return (
    <ul
      className="timeline not-prose timeline-snap-icon max-md:timeline-compact timeline-vertical"
      aria-label={t`Lifetime Timeline`}
      role="list"
    >
      {/* Childhood Creativity */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Childhood Creativity`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 0)}
      >
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label={t`Early 2000s`}>
            <Trans>Early 2000s</Trans>
          </time>
          <div className="text-lg font-black">
            <Trans>Creative Childhood</Trans>
          </div>
          <Trans>
            Built a soapbox car from scraps and spent countless hours on LAN
            matches of Counter-Strike: Condition Zero. This playful creativity
            planted the seed for an engineering mindset.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* First contact with tech & education program */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`First contact with tech and education program`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 1)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2010">
            2010
          </time>
          <div className="text-lg font-black">
            <Trans>First Step into Love</Trans>
          </div>
          <Trans>
            Took the first computer literacy course. Graduated from the{' '}
            <i>Work Education Program by Coca-Cola</i>. Also started learning to
            play acoustic guitar, which became a lifelong passion.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* First Job */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`First IT Job`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 2)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2013">
            2013
          </time>
          <div className="text-lg font-black">
            <Trans>First IT Job</Trans>
          </div>
          <Trans>
            Started as Assistent Computer Support Technician at Sedit. Learned
            helpdesk skills, preventive maintenance, and how to troubleshoot
            under pressure.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* University */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`University Begins`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 3)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2015-2019">
            2015-2019
          </time>
          <div className="text-lg font-black">
            <Trans>University Begins</Trans>
          </div>
          <Trans>
            Enrolled in the Information Systems bachelor's program at UFMS.
            Gained foundational knowledge in software engineering, foundations
            in algorithms, databases, and system design.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Indext */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Junior Dev at Indext`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 4)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2016-2016">
            2016-2016
          </time>
          <div className="text-lg font-black">
            <Trans>Junior Dev at Indext</Trans>
          </div>
          <Trans>
            Developed dashboards and admin tools with JavaScript and Bootstrap.
            Improved user experience and honed frontend-backend collaboration.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* LEDES */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Junior Developer – LEDES`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 5)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2018-2019">
            2018-2019
          </time>
          <div className="text-lg font-black">
            <Trans>Junior Developer – LEDES</Trans>
          </div>
          <Trans>
            Resolved over 150 backend and UI issues and contributed to
            JavaScript/PHP systems. Helped stabilize key platforms and
            documented APIs.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* PIME */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Mid-Level Developer – PIME`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 6)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2019-2020">
            2019-2020
          </time>
          <div className="text-lg font-black">
            <Trans>Mid-Level Developer – PIME</Trans>
          </div>
          <Trans>
            Optimized a Java-based monolith, reduced PostgreSQL storage usage,
            and achieved 100% test coverage. Also built user-friendly admin
            interfaces.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Startup attempt*/}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Startup Failed`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 7)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2020">
            2020
          </time>
          <div className="text-lg font-black">
            <Trans>Startup Failed</Trans>
          </div>
          <Trans>
            Tried launching my own product but struggled with getting clients.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/*Hackathon win */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Hackatrouble Win`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 8)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2020">
            2020
          </time>
          <div className="text-lg font-black">
            <Trans>Hackatrouble Win</Trans>
          </div>
          <Trans>
            Despite the business not taking off, I won the Hackatrouble
            hackathon with an Uber Eats-style solution—proving innovation never
            goes to waste.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Portal Solar */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Full-Stack Mid-Level at Portal Solar`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 9)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2020-2021">
            2020-2021
          </time>
          <div className="text-lg font-black">
            <Trans>Full-Stack Mid-Level at Portal Solar</Trans>
          </div>
          <Trans>
            Maintained production Node.js and React applications serving 100K+
            users. Refactored CRM code and implemented Agile best practices.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Meu Financiamento Solar */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Senior Software Engineer – Meu Financiamento Solar`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 10)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2021-2023">
            2021-2023
          </time>
          <div className="text-lg font-black">
            <Trans>Senior Software Engineer – Meu Financiamento Solar</Trans>
          </div>
          <Trans>
            Led development for Brazil’s largest solar credit platform. Improved
            OAuth2 security, scaled KYC systems, and mentored junior devs.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* AWS Certification */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`AWS re/Start Graduate`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 11)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2023">
            2023
          </time>
          <div className="text-lg font-black">
            <Trans>AWS re/Start Graduate</Trans>
          </div>
          <Trans>
            Completed AWS re/Start program and earned AWS Certified Cloud
            Practitioner. Learned foundational cloud concepts and DevOps
            workflows.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Google Cloud Certification */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Google Cloud Innovators`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 12)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2024">
            2024
          </time>
          <div className="text-lg font-black">
            <Trans>Google Cloud Innovators</Trans>
          </div>
          <Trans>
            Completed the Get Certified Program. Became a Google Associate Cloud
            Engineer, expanding my skills across GCP services and
            infrastructure.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Workana */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Workana – Senior Backend Engineer`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 13)}
      >
        <hr aria-hidden="true" />
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end text-start md:text-start">
          <time className="font-mono italic" aria-label="2024">
            2024
          </time>
          <div className="text-lg font-black">
            <Trans>Workana – Senior Backend Engineer</Trans>
          </div>
          <Trans>
            Designed scalable microservices, built APIs with Nest.js, and
            integrated AI with legacy systems. Delivered enterprise-grade uptime
            and stability.
          </Trans>
        </div>
        <hr aria-hidden="true" />
      </li>

      {/* Freelance Work */}
      <li
        tabIndex={0}
        data-timeline-item
        aria-label={t`Freelance Work at Upwork – Senior Software Engineer`}
        role="listitem"
        onKeyDown={(e) => handleKeyDown(e, 14)}
      >
        <div className="timeline-middle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start text-start md:text-end">
          <time className="font-mono italic" aria-label="2025">
            2025
          </time>
          <div className="text-lg font-black">
            <Trans>Upwork – Senior Software Engineer</Trans>
          </div>
          <Trans>
            Delivering backend, API, and documentation excellence to global
            clients. Helping startups grow with clean code, cloud infra, and
            fast delivery.
          </Trans>
        </div>
      </li>
    </ul>
  );
};
