type Project = {
  name: string;
  command: string;
  description: string;
  tags: string[];
  stack: string[];
  url?: string;
  repo?: string;
  status?: 'live' | 'archived' | 'wip';
};

export const projects: Project[] = [
  {
    name: 'Sortudo',
    command: 'open https://sortudo.web.app/',
    description:
      'Sortudo is an interactive, data-driven application that visualizes the statistical improbability of winning Mega-Sena. It uses ELT to extract information from the official website, run data analysis, review draw history, and generate combinations. Getting reliable data was the hardest part — I built extraction logic that allows the user to always have access to the most up-to-date information so the dataset stays fresh.',
    tags: [
      'Data Analysis',
      'Web App',
      'Browser APIs',
      'Web Workers',
      'ELT (Extract, Load, Transform)',
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'Vite', 'Vitest', 'Tailwind CSS', 'Firebase'],
    url: 'https://sortudo.web.app/',
    repo: 'https://github.com/henriquebonfim/sortudo',
    status: 'live',
  },
  {
    name: 'tick3r',
    command: 'npm run extract-frames',
    description:
      'Extract frames from any video. Built with TypeScript and modern web technologies.',
    tags: ['Video Processing', 'Web App', 'Browser APIs', 'Web Workers'],
    stack: ['TypeScript', 'Node.js', 'React', 'Vite', 'Vitest', 'Tailwind CSS', 'Firebase'],
    repo: 'https://github.com/henriquebonfim/tick3r',
    url: 'https://tick3r.web.app/',
    status: 'live',
  },
  {
    name: 'O11y Stack',
    command: 'docker compose up o11y-stack',
    description:
      'Production-ready observability stack with OpenTelemetry, Prometheus, Loki, Tempo, and Grafana. Features automatic HTTPS via Traefik.',
    tags: ['DevOps'],
    stack: ['OpenTelemetry', 'Prometheus', 'Grafana'],
    repo: 'https://github.com/henriquebonfim/o11y-stack-template',
    status: 'archived',
  },
  {
    name: 'Omni-Trader Hub',
    command: 'open https://omni-trader.web.app/',
    description:
      'Omni-Trader Hub is a modern dashboard interface for quantitative traders and algorithmic trading bot managers. The private backend is built in Python with TA-Lib and integrates with Binance and MetaMask wallet workflows. Integrating with exchange APIs and wallets was unreliable at times; I added reconciliations, retries, and manual fallback paths to reduce failed trades during spikes.',
    tags: [
      'FinTech',
      'Algorithmic Trading',
      'Web3',
      'Web App',
      'Generative AI',
      'ELT (Extract, Load, Transform)',
      'RAG (Retrieval-Augmented Generation)',
      'Data Analysis',
      'AI Agents',
      'Chatbot',
      'Blockchain',
    ],
    stack: [
      'Python',
      'FastAPI',
      'TA-Lib',
      'Ethers.js',
      'Node.js',
      'React',
      'Vite',
      'Vitest',
      'Tailwind CSS',
      'TypeScript',
      'OpenAI API',
      'OpenRouter API',
    ],
    url: 'https://omni-trader.web.app/',
    repo: 'https://github.com/henriquebonfim/omni-trader-hub/',
    status: 'live',
  },
  {
    name: 'AI Translation Tools',
    command: 'uvicorn app.main:app --reload',
    description:
      'Privacy-focused, offline-capable translation service with a Python and FastAPI backend. It uses an ELT pipeline and supports multiple translation providers, including LM Studio for local OpenAI-compatible endpoints and OpenRouter.',
    tags: [
      'Data Analysis',
      'Generative AI',
      'Web App',
      'Rest API',
      'ELT (Extract, Load, Transform)',
    ],
    stack: [
      'Python',
      'FastAPI',
      'LM Studio',
      'OpenRouter',
      'TypeScript',
      'React',
      'Vite',
      'Vitest',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/henriquebonfim/ai-translation-tools/',
    status: 'wip',
  },
  {
    name: 'Text To Video',
    command: 'kaggle kernels push text-to-video-cogvideox-2b',
    description:
      'Text-to-video AI generation pipeline using CogVideoX-2B. Running on Kaggle Kernels for high-performance inference.',
    tags: ['Generative AI', 'Model Inference', 'Transformers', 'Diffusers', 'LLM'],
    stack: ['Python'],
    repo: 'https://www.kaggle.com/code/henriquebonfim/text-to-video-cogvideox-2b',
    status: 'live',
  },
  {
    name: 'Ollama LLM Server',
    command: 'kaggle kernels push ollama-llm-server',
    description:
      'A scalable Ollama LLM server implementation. deploy local large language models with an API interface.',
    tags: ['LLM', 'Chatbot', 'Generative AI', 'Model Inference', 'Rest API'],
    stack: ['Ollama', 'Python', 'FastAPI', 'Grok'],
    repo: 'https://www.kaggle.com/code/henriquebonfim/ollama-llm-server',
    status: 'live',
  },
  {
    name: 'ai-chat',
    command: 'pnpm dev',
    description:
      'A lightweight, real-time chat-bot that connects to any local LLM services via Docker Model Runner.',
    tags: ['LLM', 'Chatbot', 'Model Inference', 'Web App'],
    stack: [
      'TypeScript',
      'WebSockets',
      'Python',
      'FastAPI',
      'TypeScript',
      'Node.js',
      'React',
      'Vite',
      'Vitest',
      'Tailwind CSS',
      'Docker',
    ],
    repo: 'https://github.com/henriquebonfim/ai-chat',
    status: 'archived',
  },
  {
    name: 'ultra-dl',
    command: 'python -m ultra_dl',
    description:
      'UltraDL is a modern, high-performance video downloader web application. Backed by Python.',
    tags: ['Video Processing', 'Web App', 'Browser APIs', 'Web Workers'],
    stack: [
      'Python',
      'FastAPI',
      'Celery',
      'TypeScript',
      'Node.js',
      'React',
      'Vite',
      'Vitest',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/henriquebonfim/ultra-dl',
    status: 'live',
  },
  {
    name: 'premium-blogger',
    command: 'npm run build:templates',
    description:
      'A collection of open source blog templates generated and curated for modern blogging needs.',
    tags: ['Blog Platform', 'Web App'],
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'React',
      'Vite',
      'Vitest',
      'Tailwind CSS',
      'Python',
      'Jinja2',
    ],
    repo: 'https://github.com/henriquebonfim/premium-blogger',
    status: 'archived',
  },
  {
    name: 'Roça Eats',
    command: 'npm start',
    description:
      'Hackatrouble SP 2020 award-winning platform based on ONUs ODS for connecting rural farmers with charity organizations to reduce food waste.',
    tags: ['FoodTech', 'Hackathon', 'Web App', 'Social Impact'],
    stack: ['Node.js', 'TypeScript', 'Angular', 'AWS', 'Express.js', 'Docker'],
    repo: 'https://github.com/henriquebonfim/roca-eats',
    status: 'archived',
  },
  {
    name: 'ArduEVE',
    command: 'npm run dev',
    description:
      'IoT automation system using microservices architecture with NodeJS, VueJS, and MongoDB. Controls electronic relays for lighting and door access.',
    tags: ['IoT', 'Web App'],
    stack: ['Vue.js', 'Node.js', 'MongoDB', 'Arduino', 'Express.js', 'Docker', 'AWS'],
    repo: 'https://github.com/hpbonfim/ArduEVE',
    status: 'archived',
  },
  {
    name: 'Crawler Mercado Libre',
    command: 'node crawler.js',
    description:
      'Web scraping tool for Mercado Libre using NodeJS. Extracts product data for price comparison and market analysis.',
    tags: ['Web Scraping', 'Data Analysis', 'Rest API', 'E-commerce'],
    stack: ['Node.js', 'Express.js', 'Docker'],
    repo: 'https://github.com/henriquebonfim/Crawler-Mercado-Livre',
    status: 'archived',
  },
  {
    name: 'Pet Porta App',
    command: 'npm run mobile:door',
    description:
      'Mobile-controlled door access system built with NodeJS microservices, MongoDB, and Arduino integration.',
    tags: ['IoT', 'Web App'],
    stack: ['Node.js', 'MongoDB', 'Arduino', 'Express.js', 'Vue.js', 'Docker'],
    repo: 'https://github.com/hpbonfim/pet-porta-app',
    status: 'archived',
  },
  {
    name: 'Mideal',
    command: 'npm run deploy:mideal',
    description:
      'Blockchain-based legal contract platform recognized in Top 50 at Megahack v2 2020. Uses NodeJS, Angular, and Google Cloud.',
    tags: ['Blockchain', 'LegalTech', 'Contract Automation', 'Web App', 'Hackathon'],
    stack: ['Node.js', 'Angular', 'Google Cloud Platform', 'Express.js', 'Twilio'],
    repo: 'https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal',
    status: 'archived',
  },
  {
    name: 'Canivete Perneta',
    command: 'npm run route-planner',
    description:
      'Mobile companion app for truck drivers developed at HackathonCCR. Features route optimization and rest stop finder.',
    tags: ['Logistics', 'Hackathon', 'Mobile App'],
    stack: ['React Native', 'Node.js', 'Expo', 'TypeScript'],
    repo: 'https://github.com/hpbonfim/HackathonCCR',
    status: 'archived',
  },
  {
    name: 'EduDoa',
    command: 'run learn:share',
    description:
      'Educational platform for mobile network sharing, providing interactive learning tools and resources.',
    tags: ['EduTech', 'Generative AI', 'Hackathon', 'Rest API'],
    stack: ['Node.js', 'Express.js', 'IBM Watson', 'IBM Cloud Foundry', 'TypeScript'],
    repo: 'https://github.com/henriquebonfim/Hackathon-IBM-CallForCode-Project_EduDoa',
    status: 'archived',
  },
];
