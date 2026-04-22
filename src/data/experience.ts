export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Upwork',
    role: 'Senior Software Engineer',
    type: 'part-time · contract',
    period: '06/2024 — 01/2025',
    highlights: [
      'Built a stock-analysis bot (NDA) combining cloud infra, AI models, and Monte Carlo simulations for automated portfolio insights.',
      'Shipped an AI chatbot MVP (Python + Next.js) with context-aware responses, deflecting routine support tickets.',
      'Automated data entry & reporting workflows — reduced manual work by 66%.',
    ],
    stack: ['Python', 'Next.js', 'GPT-4', 'Claude', 'AWS'],
  },
  {
    company: 'Workana',
    role: 'Full Stack Software Engineer',
    type: 'part-time',
    period: '12/2023 — 05/2024',
    highlights: [
      'Designed a data-pipeline microservice with AI integration, validating user data via 3rd-party APIs over async messaging.',
      'Distributed runtime on Kubernetes with RabbitMQ + Redis for back-pressure and resilience.',
      'Integrated GPT-4, Claude, and private APIs for faster, more accurate processing.',
    ],
    stack: ['Kubernetes', 'RabbitMQ', 'Redis', 'GPT-4', 'Claude'],
  },
  {
    company: 'Meu Financiamento Solar',
    role: 'Full Stack Software Engineer',
    type: 'full-time',
    period: '08/2021 — 04/2023',
    highlights: [
      'Built custom dashboards (React, Chart.js, Rails, Node, PostgreSQL) for omnichannel, ops, and stakeholder teams — 53% faster decisions.',
      'Migrated KYC workflows from Rails to Next.js with risk/compliance/data — throughput +22%.',
      'Mentored new hires through onboarding and code reviews.',
      'Aligned roadmap with BV Bank cross-functionally — supported the acquisition of the platform.',
    ],
    stack: ['React', 'Next.js', 'Rails', 'Node.js', 'PostgreSQL'],
  },
];

export const achievements = [
  {
    metric: '30k+',
    label: 'users scaled',
    detail:
      "Helped grow Brazil's leading photovoltaic fintech to 30,000+ users, supporting acquisition by BV Bank.",
  },
  {
    metric: '66%',
    label: 'manual work removed',
    detail: 'Automated data entry & reporting pipelines for client teams.',
  },
  {
    metric: '53%',
    label: 'faster decisions',
    detail: 'Custom dashboards unlocked real-time insight for omnichannel and stakeholder teams.',
  },
  {
    metric: '10y',
    label: 'shipping in production',
    detail: 'Full-stack & backend across microservices, event-driven systems, and AI.',
  },
];
