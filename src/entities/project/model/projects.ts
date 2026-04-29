import { SOCIAL_LINKS } from '@/shared/constants';

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

export const PROJECTS: Project[] = [
  {
    name: 'Sortudo',
    command: 'open https://sortudo.web.app/',
    description:
      'Winning the lottery is statistically improbable, but many people still play without understanding the odds. Without clean historical data, it’s impossible to visualize these patterns. I built an interactive ELT-driven app that extracts official Mega-Sena data and runs real-time statistical simulations. This created a fresh, automated dataset that allows users to instantly visualize draw probabilities and generate informed combinations.',
    tags: [
      'Data Analysis',
      'Web App',
      'Browser APIs',
      'Web Workers',
      'ELT (Extract, Load, Transform)',
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'Vite', 'Vitest', 'Tailwind CSS', 'Firebase'],
    url: 'https://sortudo.web.app/',
    repo: SOCIAL_LINKS.github + 'sortudo',
    status: 'live',
  },
  {
    name: 'tick3r',
    command: 'npm run extract-frames',
    description:
      'Extracting high-quality frames from videos for analysis is often a tedious task requiring heavy software. This barrier slows down creative and technical workflows. I developed a lightweight browser-based tool using Web Workers and modern APIs for client-side processing. This simplified the process, enabling users to extract precise frames directly in the browser with 0% server overhead.',
    tags: ['Video Processing', 'Web App', 'Browser APIs', 'Web Workers'],
    stack: ['TypeScript', 'Node.js', 'React', 'Vite', 'Vitest', 'Tailwind CSS', 'Firebase'],
    repo: SOCIAL_LINKS.github + 'tick3r',
    url: 'https://tick3r.web.app/',
    status: 'live',
  },
  {
    name: 'O11y Stack',
    command: 'docker compose up o11y-stack',
    description:
      'Monitoring complex microservices requires a robust observability setup, but manual configuration of multiple tools is error-prone. Inconsistent monitoring leads to slower incident response times. I engineered a production-ready Docker Compose template with automated HTTPS and integrated OpenTelemetry. This reduced the setup time for a full-stack observability suite from hours to under 5 minutes.',
    tags: ['DevOps'],
    stack: ['OpenTelemetry', 'Prometheus', 'Grafana'],
    repo: SOCIAL_LINKS.github + 'o11y-stack-template',
    status: 'archived',
  },
  {
    name: 'Omni-Trader Hub',
    command: 'open https://omni-trader.web.app/',
    description:
      'Quantitative trading requires 100% uptime and real-time data, but exchange APIs can be unstable during market volatility. These instabilities often lead to failed trades and lost opportunities. I built a dashboard with a Python backend featuring custom reconciliation logic and automated retries. This stabilized the trading workflow and significantly reduced failed orders during high-volume spikes.',
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
    repo: SOCIAL_LINKS.github + 'omni-trader-hub/',
    status: 'live',
  },
  {
    name: 'AI Translation Tools',
    command: 'uvicorn app.main:app --reload',
    description:
      'Standard translation services often compromise privacy by sending data to the cloud, which is a dealbreaker for sensitive information. Users need local-first translation without sacrificing modern AI quality. I developed a privacy-focused service with an ELT pipeline supporting local LLMs via LM Studio. This delivered a secure, high-performance translation tool that works entirely within private infrastructure with no external data leakage.',
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
    repo: SOCIAL_LINKS.github + 'ai-translation-tools/',
    status: 'wip',
  },
  {
    name: 'Text To Video',
    command: 'kaggle kernels push text-to-video-cogvideox-2b',
    description:
      'Generative AI for video requires massive compute resources that local environments often cannot provide. This limits the ability for researchers to experiment with high-end models like CogVideoX. I optimized a generation pipeline specifically for Kaggle Kernels to leverage cloud GPUs. This achieved 3x faster inference times compared to standard setups, enabling rapid experimentation with text-to-video generation.',
    tags: ['Generative AI', 'Model Inference', 'Transformers', 'Diffusers', 'LLM'],
    stack: ['Python'],
    repo: SOCIAL_LINKS.kaggle + 'text-to-video-cogvideox-2b',
    status: 'live',
  },
  {
    name: 'Ollama LLM Server',
    command: 'kaggle kernels push ollama-llm-server',
    description:
      'Self-hosting large language models involves complex API configurations that are difficult to scale. Without a standardized interface, integrating AI into existing apps is slow and cumbersome. I implemented a scalable Ollama-based server with a clean FastAPI wrapper. This created a deployment-ready template that allowed for the seamless integration of local LLMs into production-ready architectures.',
    tags: ['LLM', 'Chatbot', 'Generative AI', 'Model Inference', 'Rest API'],
    stack: ['Ollama', 'Python', 'FastAPI', 'Grok'],
    repo: SOCIAL_LINKS.kaggle + 'ollama-llm-server',
    status: 'live',
  },
  {
    name: 'ai-chat',
    command: 'pnpm dev',
    description:
      'Integrating diverse LLMs into a real-time chat interface often results in high latency and poor user experience. Standard polling methods are too slow for natural conversations. I built a lightweight React chat app using WebSockets for low-latency communication with local model runners. This enabled seamless AI conversations with sub-second response delivery, making local LLMs feel as responsive as cloud-based ones.',
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
    repo: SOCIAL_LINKS.github + 'ai-chat',
    status: 'archived',
  },
  {
    name: 'ultra-dl',
    command: 'python -m ultra_dl',
    description:
      'Downloading and processing web videos is often throttled or blocked when handled by simple scripts. This makes bulk video management slow and unreliable for power users. I developed a Celery-backed Python application that distributes downloading and processing tasks across multiple workers. This improved download reliability by 40% and significantly increased throughput for heavy processing tasks.',
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
    repo: SOCIAL_LINKS.github + 'ultra-dl',
    status: 'live',
  },
  {
    name: 'premium-blogger',
    command: 'npm run build:templates',
    description:
      'Modern bloggers need fast, SEO-optimized templates, but many existing platforms are too bloated for high performance. Slow load times negatively impact search rankings and user retention. I created a curated collection of templates using Next.js and Jinja2 for highly customizable, static-site generation. This streamlined the deployment of performance-first blogs that achieve near-perfect Lighthouse scores out of the box.',
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
    repo: SOCIAL_LINKS.github + 'premium-blogger',
    status: 'archived',
  },
  {
    name: 'Roça Eats',
    command: 'npm start',
    description:
      'Rural farmers often have surplus food that goes to waste while charities struggle to find consistent supplies. This gap leads to massive food waste in regions with high food insecurity. I developed an award-winning platform connecting farmers with charities based on UN Sustainable Development Goals. Recognized at Hackatrouble SP 2020, the platform provided a scalable solution to reduce regional food waste by optimizing the supply chain.',
    tags: ['FoodTech', 'Hackathon', 'Web App', 'Social Impact'],
    stack: ['Node.js', 'TypeScript', 'Angular', 'AWS', 'Express.js', 'Docker'],
    repo: SOCIAL_LINKS.github + 'roca-eats',
    status: 'archived',
  },
  {
    name: 'ArduEVE',
    command: 'npm run dev',
    description:
      'Managing building automation manually is inefficient and lacks centralized visibility. Traditional IoT setups were often fragmented and difficult to manage at scale. I engineered a microservices-based IoT system using Node.js and MongoDB to control hardware via Arduino. This successfully automated lighting and access control, providing a unified dashboard that improved energy efficiency and site security.',
    tags: ['IoT', 'Web App'],
    stack: ['Vue.js', 'Node.js', 'MongoDB', 'Arduino', 'Express.js', 'Docker', 'AWS'],
    repo: SOCIAL_LINKS.gitlab + 'ArduEVE',
    status: 'archived',
  },
  {
    name: 'Crawler Mercado Libre',
    command: 'node crawler.js',
    description:
      'E-commerce pricing strategy requires constant market monitoring, but manual comparison is impossible across thousands of listings. Lack of data leads to uncompetitive pricing and lost sales. I built a robust scraping tool in Node.js to extract and structure product data automatically. This automated the gathering process, enabling real-time market analysis and data-driven pricing strategies.',
    tags: ['Web Scraping', 'Data Analysis', 'Rest API', 'E-commerce'],
    stack: ['Node.js', 'Express.js', 'Docker'],
    repo: SOCIAL_LINKS.github + 'Crawler-Mercado-Livre',
    status: 'archived',
  },
  {
    name: 'Pet Porta App',
    command: 'npm run mobile:door',
    description:
      "Controlling pet access to specific areas of a home is difficult when owners are away. Proprietary hardware solutions were often expensive and lacked mobile flexibility. I built a microservices system connecting a Vue.js mobile app to Arduino-controlled doors. This provided a cost-effective, remote-controlled access system that gave owners full control over their pets' movements from anywhere.",
    tags: ['IoT', 'Web App'],
    stack: ['Node.js', 'MongoDB', 'Arduino', 'Express.js', 'Vue.js', 'Docker'],
    repo: SOCIAL_LINKS.github + 'pet-porta-app',
    status: 'archived',
  },
  {
    name: 'Mideal',
    command: 'npm run deploy:mideal',
    description:
      'Traditional legal contract management is slow, paper-heavy, and prone to human error. Small businesses lack the budget for high-end automated legal tools. I developed a blockchain-based platform for contract automation using Node.js and Google Cloud. Ranked in the Top 50 at Megahack v2 2020, it provided a secure and accessible way for businesses to automate legal workflows.',
    tags: ['Blockchain', 'LegalTech', 'Contract Automation', 'Web App', 'Hackathon'],
    stack: ['Node.js', 'Angular', 'Google Cloud Platform', 'Express.js', 'Twilio'],
    repo: SOCIAL_LINKS.github + 'MegaHack-v2-2020-Projeto-Mideal',
    status: 'archived',
  },
  {
    name: 'Canivete Perneta',
    command: 'npm run route-planner',
    description:
      'Truck drivers face unpredictable routes and difficulty finding safe, reliable rest stops during long hauls. Inefficient routing increases fuel consumption and contributes to driver fatigue. I developed a React Native companion app featuring route optimization and a real-time facility finder. Recognized at HackathonCCR, the tool improved logistical efficiency and driver safety by streamlining long-distance travel.',
    tags: ['Logistics', 'Hackathon', 'Mobile App'],
    stack: ['React Native', 'Node.js', 'Expo', 'TypeScript'],
    repo: SOCIAL_LINKS.github + 'HackathonCCR',
    status: 'archived',
  },
  {
    name: 'EduDoa',
    command: 'run learn:share',
    description:
      'In many underserved regions, access to educational resources is severely limited by poor internet connectivity. Students are unable to access interactive learning tools or share digital resources effectively. I built an IBM Watson-powered platform for mobile network sharing and interactive learning. This created a scalable educational tool that bridged the digital divide, allowing students to learn and collaborate regardless of their connectivity.',
    tags: ['EduTech', 'Generative AI', 'Hackathon', 'Rest API'],
    stack: ['Node.js', 'Express.js', 'IBM Watson', 'IBM Cloud Foundry', 'TypeScript'],
    repo: SOCIAL_LINKS.github + 'Hackathon-IBM-CallForCode-Project_EduDoa',
    status: 'archived',
  },
];
