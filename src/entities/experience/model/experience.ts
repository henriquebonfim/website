import type { MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

type Experience = {
  company: string;
  role: MessageDescriptor;
  type: MessageDescriptor;
  period: string;
  highlights: MessageDescriptor[];
  tags: MessageDescriptor[];
  stack: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Upwork',
    role: msg`Senior Software Engineer`,
    type: msg`part-time · contract`,
    period: '06/2024 — 01/2025',
    highlights: [
      msg`Engineered an AI-driven quantitative analysis engine for personal advisors under NDA, combining cloud infrastructure, AI models, and Monte Carlo simulations for automated portfolio insights to integrate with their existing systems.`,
      msg`Built a Python bot leveraging AI/LLM models to interpret market data and generate context-aware recommendations for advisors.`,
      msg`Deployed and scaled the system on Google Compute VMs with autoscaling, enabling reliable execution of Monte Carlo simulations under variable workloads.`,
      msg`Implemented RAG (retrieval-augmented generation) patterns to combine historical data with AI-generated insights, improving report accuracy and decision-making support.`,
      msg`Collaborated closely with the client to translate financial requirements into automated workflows, integrating AI outputs with actionable portfolio guidance.`,
    ],
    tags: [
      msg`RAG (Retrieval-Augmented Generation)`,
      msg`AI Agents`,
      msg`Chatbot`,
      msg`Data Analysis`,
      msg`ELT (Extract, Load, Transform)`,
      msg`Third Party API Integration`,
      msg`Web3`,
      msg`Distributed Systems`,
    ],
    stack: [
      'Python',
      'FastAPI',
      'Google Cloud',
      'LangChain',
      'OpenAI API',
      'Vertex AI',
      'Ethers.js',
    ],
  },
  {
    company: 'Workana',
    role: msg`Full Stack Software Engineer`,
    type: msg`part-time`,
    period: '12/2023 — 05/2024',
    highlights: [
      msg`Orchestrated a dedicated KYC data pipeline microservice with AI integration, validating user data through third-party APIs and leveraging asynchronous messaging to decouple system components.`,
      msg`Helped integrate with the FIX protocol for real-time communication with external providers.`,
      msg`Implemented event-driven flows using RabbitMQ to handle transaction processing and internal service communication.`,
      msg`Collaborated on integrating OpenAI and Anthropic APIs to support a recommendation layer that generated personalized suggestions based on user profile and behavioral data.`,
      msg`Participated in sprint planning, architecture discussions, and code reviews in a Kanban-based workflow.`,
    ],
    tags: [
      msg`KYC (Know Your Customer)`,
      msg`Event-Driven`,
      msg`AI/LLM`,
      msg`ELT (Extract, Load, Transform)`,
      msg`Third Party API Integration`,
      msg`Data Analysis`,
      msg`Data Visualization`,
      msg`Distributed Systems`,
    ],
    stack: ['Nest.js', 'PostgreSQL', 'RabbitMQ', 'OpenAI API', 'Anthropic API', 'TypeScript'],
  },
  {
    company: 'Meu Financiamento Solar',
    role: msg`Full Stack Software Engineer`,
    type: msg`full-time`,
    period: '08/2021 — 04/2023',
    highlights: [
      msg`Worked on one of Brazil’s largest solar financing platforms (30,000+ active users), supporting loan origination, KYC, and financial operations prior to acquisition by BV Bank.`,
      msg`Contributed to scaling and stabilizing a distributed financing platform with 99.9% availability and zero downtime, supporting loan origination, KYC validation, and credit workflows.`,
      msg`Designed and developed executive and operational dashboards using React, Chart.js, Node.js, Ruby on Rails, and PostgreSQL, accelerating data-driven decisions by 53%.`,
      msg`Led the partial migration of critical KYC workflows from a Ruby on Rails monolith to Next.js (SSR), improving throughput by 22%, enhancing performance, and increasing front-end security controls.`,
      msg`Collaborated closely with risk, compliance, and data teams to ensure regulatory alignment (LGPD) and strengthen fraud-prevention mechanisms.`,
      msg`Helped implement structured CI/CD practices and deployment improvements to increase release reliability and reduce rollback frequency.`,
      msg`Participated in strategic technical discussions during the acquisition process, aligning system architecture and delivery timelines with BV Bank stakeholders.`,
      msg`Mentored new engineers through onboarding, architecture walkthroughs, and code reviews, promoting clean code standards and security best practices.`,
      msg`Temporarily assumed technical leadership responsibilities, facilitating cross-functional alignment and guiding sprint execution.`,
      msg`Participated in cross-functional discussions with C-level stakeholders, aligning technical delivery with strategic goals.`,
    ],
    tags: [
      msg`FinTech`,
      msg`Compliance`,
      msg`KYC (Know Your Customer)`,
      msg`Technical Leadership`,
      msg`Web3`,
      msg`Event-Driven`,
      msg`ELT (Extract, Load, Transform)`,
      msg`DevOps`,
      msg`Data Visualization`,
      msg`Data Analysis`,
      msg`Distributed Systems`,
    ],
    stack: [
      'React',
      'Next.js',
      'Ruby on Rails',
      'PostgreSQL',
      'AWS',
      'RabbitMQ',
      'Docker',
      'Kubernetes',
      'TypeScript',
      'Python',
      'Node.js',
      'Java',
      'React Native',
    ],
  },
];
