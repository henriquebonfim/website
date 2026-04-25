export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  tags: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Upwork',
    role: 'Senior Software Engineer',
    type: 'part-time · contract',
    period: '06/2024 — 01/2025',
    highlights: [
      'Developed a stock analysis bot for personal advisors under NDA, combining cloud infrastructure, AI models, and Monte Carlo simulations for automated portfolio insights to integrate with their existing systems.',
      'Built a Python bot leveraging AI/LLM models to interpret market data and generate context-aware recommendations for advisors.',
      'Deployed and scaled the system on Google Compute VMs with autoscaling, enabling reliable execution of Monte Carlo simulations under variable workloads.',
      'Implemented RAG (retrieval-augmented generation) patterns to combine historical data with AI-generated insights, improving report accuracy and decision-making support.',
      'Collaborated closely with the client to translate financial requirements into automated workflows, integrating AI outputs with actionable portfolio guidance.',
    ],
    tags: [
      'RAG (Retrieval-Augmented Generation)',
      'AI Agents',
      'Chatbot',
      'Data Analysis',
      'ELT (Extract, Load, Transform)',
      'Third Party API Integration',
      'Web3',
      'Distributed Systems',
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
    role: 'Full Stack Software Engineer',
    type: 'part-time',
    period: '12/2023 — 05/2024',
    highlights: [
      'Short contract to design and implement a dedicated KYC data pipeline microservice with AI integration, validating user data through third-party APIs and communicating results to other system components via asynchronous messaging.',
      'Helped integrate with the FIX protocol for real-time communication with external providers.',
      'Implemented event-driven flows using RabbitMQ to handle transaction processing and internal service communication.',
      'Collaborated on integrating OpenAI and Anthropic APIs to support a recommendation layer that generated personalized suggestions based on user profile and behavioral data.',
      'Participated in sprint planning, architecture discussions, and code reviews in a Kanban-based workflow.',
    ],
    tags: [
      'KYC (Know Your Customer)',
      'Event-Driven',
      'AI/LLM',
      'ELT (Extract, Load, Transform)',
      'Third Party API Integration',
      'Data Analysis',
      'Data Visualization',
      'Distributed Systems',
    ],
    stack: ['Nest.js', 'PostgreSQL', 'RabbitMQ', 'OpenAI API', 'Anthropic API', 'TypeScript'],
  },
  {
    company: 'Meu Financiamento Solar',
    role: 'Full Stack Software Engineer',
    type: 'full-time',
    period: '08/2021 — 04/2023',
    highlights: [
      'Worked on one of Brazil’s largest solar financing platforms (30,000+ active users), supporting loan origination, KYC, and financial operations prior to acquisition by BV Bank.',
      'Contributed to scaling and stabilizing a distributed financing platform with 99.9% availability and zero downtime, supporting loan origination, KYC validation, and credit workflows.',
      'Designed and developed executive and operational dashboards using React, Chart.js, Node.js, Ruby on Rails, and PostgreSQL, accelerating data-driven decisions by 53%.',
      'Led the partial migration of critical KYC workflows from a Ruby on Rails monolith to Next.js (SSR), improving throughput by 22%, enhancing performance, and increasing front-end security controls.',
      'Collaborated closely with risk, compliance, and data teams to ensure regulatory alignment (LGPD) and strengthen fraud-prevention mechanisms.',
      'Helped implement structured CI/CD practices and deployment improvements to increase release reliability and reduce rollback frequency.',
      'Participated in strategic technical discussions during the acquisition process, aligning system architecture and delivery timelines with BV Bank stakeholders.',
      'Mentored new engineers through onboarding, architecture walkthroughs, and code reviews, promoting clean code standards and security best practices.',
      'Temporarily assumed technical leadership responsibilities, facilitating cross-functional alignment and guiding sprint execution.',
      'Participated in cross-functional discussions with C-level stakeholders, aligning technical delivery with strategic goals.',
    ],
    tags: [
      'FinTech',
      'Compliance',
      'KYC (Know Your Customer)',
      'Technical Leadership',
      'Web3',
      'Event-Driven',
      'ELT (Extract, Load, Transform)',
      'DevOps',
      'Data Visualization',
      'Data Analysis',
      'Distributed Systems',
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
