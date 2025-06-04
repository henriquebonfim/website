/**
 * Resume component displaying 's professional profile.
 * Uses semantic HTML, TailwindCSS prose, and Lingui for i18n.
 * @module Resume
 */
import { SOCIAL_LINKS } from '#/shared/constants';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import { memo, type FC } from 'react';

/**
 * Resume section for the homepage.
 * @returns {JSX.Element} The rendered resume component.
 */
const Resume: FC = memo(() => {
  const { i18n } = useLingui();
  return (
    <article
      className="prose flex max-w-none flex-col p-3 text-left"
      aria-label={i18n._(msg`Resume`)}
    >
      <header className="mb-8 text-center">
        <h1>Henrique Paulo Bonfim da Silva</h1>
        <h2>Senior Software Engineer</h2>
        <nav className="m-auto flex w-full flex-row content-center justify-center gap-3">
          <a
            href={SOCIAL_LINKS.EMAIL}
            className="underline hover:text-blue-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="underline hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="underline hover:text-blue-800"
          >
            GitHub
          </a>
          <a
            href="#projects"
            aria-label={i18n._(msg`Projects`)}
            className="underline hover:text-blue-800"
          >
            <Trans>Projects</Trans>
          </a>
        </nav>
      </header>
      <main>
        <section className="mb-8">
          <h2>
            <Trans>Professional Summary</Trans>
          </h2>
          <p>
            <Trans>
              Senior Software Engineer with 10+ years of experience in
              full-stack development (JavaScript, TypeScript, Node.js).
              Expertise in scalable microservices, serverless, and event-driven
              architectures. Proven success across fintech, government, and
              startups, with a passion for generative AI and performance
              optimization.
            </Trans>
          </p>
        </section>
        <section className="mb-8">
          <h2>
            <Trans>Professional Experience</Trans>
          </h2>
          <ul className="list-none p-0">
            {/* Upwork */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Upwork</span>
                <span className="text-sm italic">
                  Senior Software Engineer |{' '}
                  <time dateTime="2025-03">
                    <Trans>Mar</Trans> 2025
                  </time>{' '}
                  – <Trans>Present</Trans>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Resolved backend/UI issues and documented APIs and release
                    notes.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Improved platform stability and facilitated project
                    alignment.
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Workana */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Workana</span>
                <span className="text-sm italic">
                  Senior Backend Software Engineer |{' '}
                  <time dateTime="2024-02">
                    <Trans>Feb</Trans> 2024
                  </time>{' '}
                  –{' '}
                  <time dateTime="2024-08">
                    <Trans>Aug</Trans> 2024
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Architected B2B AI integrations with legacy systems (NDA).
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Built REST APIs with Nest.js/PostgreSQL, ensured 99.98%
                    uptime.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Used Redis/RabbitMQ for distributed microservices.
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Meu Financiamento Solar */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Meu Financiamento Solar</span>
                <span className="text-sm italic">
                  Senior Software Engineer |{' '}
                  <time dateTime="2021-11">
                    <Trans>Nov</Trans> 2021
                  </time>{' '}
                  –{' '}
                  <time dateTime="2023-04">
                    <Trans>Apr</Trans> 2023
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Launched solar credit platform with 300% engagement growth.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Modernized KYC stack and optimized OAuth2 and SQL
                    performance.
                  </Trans>
                </li>
                <li>
                  <Trans>Developed dashboards using React and Chart.js.</Trans>
                </li>
              </ul>
            </li>
            {/* Portal Solar Ltda */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Portal Solar Ltda</span>
                <span className="text-sm italic">
                  <Trans>Mid-level Software Engineer</Trans> |{' '}
                  <time dateTime="2020-11">
                    <Trans>Nov</Trans> 2020
                  </time>{' '}
                  –{' '}
                  <time dateTime="2021-11">
                    <Trans>Nov</Trans> 2021
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Maintained Node.js and React apps for 100K+ users.
                  </Trans>
                </li>
                <li>
                  <Trans>Refactored CRM modules, cut API latency by 40%.</Trans>
                </li>
              </ul>
            </li>
            {/* PIME */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">PIME</span>
                <span className="text-sm italic">
                  <Trans>Mid-level Software Developer</Trans> |{' '}
                  <time dateTime="2019-03">
                    <Trans>Mar</Trans> 2019
                  </time>{' '}
                  –{' '}
                  <time dateTime="2020-03">
                    <Trans>Mar</Trans> 2020
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Maintained Java AGETIC system with optimized PostgreSQL
                    queries.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Built admin interfaces with JavaScript and Bootstrap.
                  </Trans>
                </li>
              </ul>
            </li>
            {/* LEDES */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">LEDES</span>
                <span className="text-sm italic">
                  <Trans>Junior Software Developer</Trans> |{' '}
                  <time dateTime="2018-01">
                    <Trans>Jan</Trans> 2018
                  </time>{' '}
                  –{' '}
                  <time dateTime="2018-12">
                    <Trans>Dec</Trans> 2018
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Resolved 150+ backend/UI issues in SIGPROJ system.
                  </Trans>
                </li>
                <li>
                  <Trans>Developed modules in JavaScript and PHP.</Trans>
                </li>
              </ul>
            </li>
            {/* IndexT */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">IndexT</span>
                <span className="text-sm italic">
                  <Trans>Junior Software Developer</Trans> |{' '}
                  <time dateTime="2016-01">
                    <Trans>Jan</Trans> 2016
                  </time>{' '}
                  –{' '}
                  <time dateTime="2016-07">
                    <Trans>Jul</Trans> 2016
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Built agribusiness dashboards with JavaScript/Bootstrap.
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Sedit */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Sedit</span>
                <span className="text-sm italic">
                  <Trans>Technical Support Assistant</Trans> |{' '}
                  <Trans>May</Trans> 2013 – <Trans>Dec</Trans> 2014
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>Provided help-desk and preventive maintenance.</Trans>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2>
            <Trans>Certifications</Trans>
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <Trans>Google Cloud Certified – Associate Cloud Engineer</Trans>
            </li>
            <li>
              <Trans>AWS Certified Cloud Practitioner</Trans>
            </li>
            <li>
              <Trans>
                Scrum Foundation Professional Certification (SFPC™)
              </Trans>
            </li>
            <li>
              <Trans>Docker Essentials – IBM</Trans>
            </li>
            <li>
              <Trans>Developing Secure Software – Linux Foundation</Trans>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2>
            <Trans>Key Skills</Trans>
          </h2>
          <ul className="list-disc pl-5">
            <li>
              JavaScript, TypeScript, Node.js, Nest.js, React, Next.js, Python,
              FastAPI, Java, Spring Boot, SQL
            </li>
            <li>Microservices, Serverless, DDD, CQRS, Event Sourcing, gRPC</li>
            <li>
              AWS, Google Cloud, Firebase, Docker, Kubernetes, Terraform, GitOps
            </li>
            <li>PostgreSQL, MySQL, MongoDB, Redis</li>
            <li>Prometheus, Grafana, Jest, Cypress, JUnit</li>
            <li>OAuth2, JWT, IAM, DevSecOps, OWASP</li>
            <li>
              <Trans>
                Leadership, Problem-solving, Team Management, Critical Thinking
              </Trans>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2>
            <Trans>Education</Trans>
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <Trans>
                Campinho Digital — Cloud Computing (Sep 2023 – Dec 2023)
              </Trans>
            </li>
            <li>
              <Trans>
                Federal University of Mato Grosso do Sul — Bachelor's in
                Information Systems (Jan 2015 – Dec 2019)
              </Trans>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2>
            <Trans>Languages</Trans>
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <Trans>Portuguese (Native)</Trans>
            </li>
            <li>
              <Trans>English (Fluent)</Trans>
            </li>
            <li>
              <Trans>Spanish (Basic)</Trans>
            </li>
          </ul>
        </section>
      </main>
    </article>
  );
});

export default Resume;
