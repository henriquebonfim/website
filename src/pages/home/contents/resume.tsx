/**
 * Resume component displaying 's professional profile.
 * Uses semantic HTML, TailwindCSS prose, and Lingui for i18n.
 * @module Resume
 */
import { SOCIAL_LINKS } from "#/shared/constants";
import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { memo, type FC } from "react";

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
        <h1>Henrique Bonfim</h1>
        <h2>
          <Trans>Senior Software Engineer</Trans>
        </h2>
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
              Software Engineer with 8+ years of experience focusing on backend
              development with Python and TypeScript on Node.js. Proven
              expertise in microservices, serverless and event-driven
              architectures. Demonstrated success across startups, fintech,
              solar energy and B2B. Skilled in system design and AI integration.
            </Trans>
          </p>
        </section>
        <section className="mb-8">
          <h2>
            <Trans>Key Skills</Trans>
          </h2>
          <ul className="list-disc pl-5">
            <li>Programming: JavaScript, TypeScript, Python, SQL</li>
            <li>
              Frameworks: Node.js, Nest.js, Next.js, React, React Native, Flask,
              FastAPI
            </li>
            <li>API: REST, GraphQL, gRPC, WebSockets, OpenAPI/Swagger</li>
            <li>
              Architectures: Microservices, Event-Driven, Serverless, DDD, CQRS,
              Event Sourcing, Hexagonal
            </li>
            <li>
              Database: PostgreSQL, MySQL, MongoDB, Redis, Supabase, Pinecone,
              Milvus
            </li>
            <li>Messaging: RabbitMQ, Kafka, AWS SQS/SNS, Google Pub/Sub</li>
            <li>Storage: AWS S3, Google Storage, File System</li>
            <li>Observability: Prometheus, Grafana, OpenTelemetry</li>
            <li>Testing: Jest, Pytest</li>
            <li>CI/CD: GitHub Actions, GitLab CI, Jenkins</li>
            <li>Security: OAuth2, JWT, IAM, DevSecOps, OWASP</li>
            <li>Cloud: AWS, Google Cloud Platform (GCP), Vercel, Firebase</li>
            <li>DevOps: Docker, Kubernetes, Terraform, Helm, GitOps</li>
            <li>
              AI/ML: OpenAI, Claude, Gemini, sLLMs, LangChain, Pinecone, Hugging
              Face, TensorFlow, PyTorch
            </li>
            <li>
              Soft Skills:{" "}
              <Trans>
                Leadership, Problem-solving, Project Management, Critical
                Thinking, Communication
              </Trans>
            </li>
          </ul>
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
                  Senior Software Engineer (part-time contract) |{" "}
                  <time dateTime="2025-03">
                    <Trans>Oct</Trans> 2024
                  </time>{" "}
                  – <Trans>Apr</Trans> 2025
                </span>
              </div>
              <p>
                <Trans>
                  Developed a stock analysis bot for personal advisors under NDA,
                  combining cloud infrastructure, AI models, and Monte Carlo
                  simulations for automated portfolio insights.
                </Trans>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Built a Python + Next.js bot leveraging AI/LLM models to
                    interpret market data and generate context-aware
                    recommendations for advisors
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Deployed and scaled the system on Google Compute VMs with
                    autoscaling, enabling reliable execution of Monte Carlo
                    simulations under variable workloads
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Implemented RAG (retrieval-augmented generation) patterns to
                    combine historical data with AI-generated insights, improving
                    report accuracy and decision-making support
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Collaborated closely with the client to translate financial
                    requirements into automated workflows, integrating AI outputs
                    with actionable portfolio guidance
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Workana */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Workana</span>
                <span className="text-sm italic">
                  Backend Software Engineer (part-time contract) |{" "}
                  <time dateTime="2023-12">
                    <Trans>Dec</Trans> 2023
                  </time>{" "}
                  –{" "}
                  <time dateTime="2024-05">
                    <Trans>May</Trans> 2024
                  </time>
                </span>
              </div>
              <p>
                <Trans>
                  Short contract to designed and implemented a dedicated KYC
                  microservice with AI integration, responsible for validating user
                  data through third-party APIs and communicating results to other
                  system components via asynchronous messaging.
                </Trans>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Contributed to the backend microservices architecture using
                    Nest.js, Node.js, PostgreSQL, QuestDB, RabbitMQ, and Redis
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Helped integrate with the FIX protocol for real-time
                    communication with external providers
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Implemented event-driven flows using RabbitMQ to handle
                    transaction processing and internal service communication
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Collaborated on integrating GPT-4 and Claude APIs to support a
                    recommendation layer that generated personalized suggestions
                    based on user profile and behavioral data
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Participated in sprint planning, architecture discussions, and
                    code reviews in a Kanban-based workflow
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Meu Financiamento Solar */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Meu Financiamento Solar</span>
                <span className="text-sm italic">
                  Software Engineer |{" "}
                  <time dateTime="2021-08">
                    <Trans>Aug</Trans> 2021
                  </time>{" "}
                  –{" "}
                  <time dateTime="2023-04">
                    <Trans>Apr</Trans> 2023
                  </time>
                </span>
              </div>
              <p>
                <Trans>
                  Worked on one of Brazil's largest solar financing platforms
                  (30,000+ active users), supporting loan origination, KYC, and
                  financial operations prior to acquisition by BV Bank.
                </Trans>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Contributed to scaling and stabilizing a distributed financing
                    platform with 99.9% availability and zero downtime, supporting
                    loan origination, KYC validation, and credit workflows
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Designed and developed executive and operational dashboards
                    using React, Chart.js, Node.js, Ruby on Rails, and PostgreSQL,
                    accelerating data-driven decisions by 53%
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Led the partial migration of critical KYC workflows from a Ruby
                    on Rails monolith to Next.js (SSR), improving throughput by
                    22%, enhancing performance, and increasing front-end security
                    controls
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Collaborated closely with risk, compliance, and data teams to
                    ensure regulatory alignment (LGPD) and strengthen
                    fraud-prevention mechanisms
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Helped implement structured CI/CD practices and deployment
                    improvements to increase release reliability and reduce
                    rollback frequency
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Participated in strategic technical discussions during the
                    acquisition process, aligning system architecture and delivery
                    timelines with BV Bank stakeholders
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Mentored new engineers through onboarding, architecture
                    walkthroughs, and code reviews, promoting clean code standards
                    and security best practices
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Temporarily assumed technical leadership responsibilities,
                    facilitating cross-functional alignment and guiding sprint
                    execution
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Participated in cross-functional discussions with C-level
                    stakeholders, aligning technical delivery with strategic goals
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Portal Solar Ltda */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Portal Solar Ltda</span>
                <span className="text-sm italic">
                  <Trans>Full Stack Software Engineer</Trans> |{" "}
                  <time dateTime="2020-11">
                    <Trans>Nov</Trans> 2020
                  </time>{" "}
                  –{" "}
                  <time dateTime="2021-08">
                    <Trans>Aug</Trans> 2021
                  </time>
                </span>
              </div>
              <p>
                <Trans>
                  Contributed to a large-scale platform serving 100,000+
                  photovoltaic installers across Brazil, supporting marketplace
                  operations, project management, and installer-client
                  interactions.
                </Trans>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Maintained and evolved a high-traffic web and mobile ecosystem,
                    improving overall application response time by 40% through
                    backend query optimization, caching strategies, and improved
                    error handling
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Developed and shipped new features using TypeScript, Node.js,
                    React, React Native, GraphQL, and PostgreSQL, ensuring strong
                    type safety and scalable API design
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Improved data-fetching efficiency by optimizing GraphQL
                    resolvers and reducing unnecessary database calls
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Strengthened backend reliability through structured logging,
                    validation layers, and improved exception management
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Implemented comprehensive unit testing with Jest and React
                    Testing Library, increasing test coverage by 90% and
                    significantly reducing regression issues in production
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Contributed to technical documentation, structured bug
                    reporting, and cross-team communication to ensure alignment
                    between product, design, and engineering
                  </Trans>
                </li>
              </ul>
            </li>
            {/* PIME */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">PIME</span>
                <span className="text-sm italic">
                  <Trans>Full Stack Software Engineer</Trans> |{" "}
                  <time dateTime="2019-03">
                    <Trans>Mar</Trans> 2019
                  </time>{" "}
                  –{" "}
                  <time dateTime="2020-03">
                    <Trans>Mar</Trans> 2020
                  </time>
                </span>
              </div>
              <p>
                <Trans>
                  Contributed as part of a cross-functional team to a digital
                  transformation project aimed at replacing paper-based processes
                  and spreadsheets with digital solutions.
                </Trans>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Implemented assigned backend and frontend tasks using Java 11
                    and Angular
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Assisted in developing administrative dashboards to improve
                    process visibility and tracking
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Supported the transition from manual workflows to a fully
                    digital system, contributing to a 100% improvement in process
                    agility
                  </Trans>
                </li>
              </ul>
            </li>
            {/* LEDES */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">LEDES</span>
                <span className="text-sm italic">
                  <Trans>Junior Software Developer</Trans> |{" "}
                  <time dateTime="2018-01">
                    <Trans>Jan</Trans> 2018
                  </time>{" "}
                  –{" "}
                  <time dateTime="2018-12">
                    <Trans>Dec</Trans> 2018
                  </time>
                </span>
              </div>
              <p>
                <Trans>
                  Help maintained and evolved SIGPROJ, a project management system
                  used by federal universities across Brazil.
                </Trans>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Collaborated with a development team to maintain "SIGPROJ," a
                    project management system used by Federal Universities across
                    Brazil, resolving 100+ backend and UI issues using PHP and
                    MySQL
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Worked within a structured bug-tracking and documentation
                    process using Redmine, contributing to system reliability and
                    stable institutional operations
                  </Trans>
                </li>
              </ul>
            </li>
            {/* IndexT */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">IndexT</span>
                <span className="text-sm italic">
                  <Trans>Junior Software Developer</Trans> |{" "}
                  <time dateTime="2016-01">
                    <Trans>Feb</Trans> 2016
                  </time>{" "}
                  –{" "}
                  <time dateTime="2016-07">
                    <Trans>Jun</Trans> 2016
                  </time>
                </span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  <Trans>
                    Built JavaScript/Bootstrap solutions and generated technical
                    documentation.
                  </Trans>
                </li>
              </ul>
            </li>
            {/* Sedit */}
            <li className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-bold">Sedit</span>
                <span className="text-sm italic">
                  <Trans>Technical Support Assistant</Trans> |{" "}
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
              <Trans>Google Cloud Certified – Professional Cloud Architect</Trans>
            </li>
            <li>
              <Trans>Google Cloud Certified – Associate Cloud Engineer</Trans>
            </li>
            <li>
              <Trans>AWS Certified Cloud Practitioner</Trans>
            </li>
            <li>
              <Trans>Scrum Foundation Professional Certification (SFPC™)</Trans>
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
            <Trans>Education</Trans>
          </h2>
          <ul className="list-disc pl-5">
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
