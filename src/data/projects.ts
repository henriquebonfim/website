export type Project = {
  name: string;
  command: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  status?: 'live' | 'archived' | 'wip';
};

export const projects: Project[] = [
  {
    name: 'tick3r',
    command: './tick3r --watch SPY,QQQ',
    description:
      'Real-time market dashboard with low-latency tick processing, custom alerting, and a refined trader-focused UI.',
    tags: ['TypeScript', 'WebSockets', 'React', 'Edge'],
    repo: 'https://github.com/henriquebonfim/tick3r',
    status: 'live',
  },
  {
    name: 'O11y Stack',
    command: 'kubectl apply -f o11y/',
    description:
      'Plug-and-play observability stack: Prometheus, Grafana, Loki, Tempo, OpenTelemetry — wired with sane defaults.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'OTel'],
    repo: 'https://github.com/henriquebonfim/o11y-stack',
    status: 'live',
  },
  {
    name: 'Text To Video',
    command: "txt2vid --prompt 'a calm ocean'",
    description:
      'Pipeline that turns scripts into narrated short videos using local TTS, image gen, and ffmpeg orchestration.',
    tags: ['Python', 'FFmpeg', 'AI', 'Pipeline'],
    repo: 'https://github.com/henriquebonfim/text-to-video',
    status: 'wip',
  },
  {
    name: 'Ollama LLM Server',
    command: 'docker compose up ollama',
    description:
      'Self-hosted LLM gateway with model routing, auth, rate limits, and streaming SSE — runs on a homelab GPU.',
    tags: ['Ollama', 'Go', 'Docker', 'Self-hosted'],
    repo: 'https://github.com/henriquebonfim/ollama-server',
    status: 'live',
  },
  {
    name: 'ai-chat',
    command: 'pnpm dev',
    description:
      'Multi-provider AI chat with tool-calling, persistent threads, and a calm, distraction-free composer.',
    tags: ['Next.js', 'Vercel AI', 'Postgres'],
    repo: 'https://github.com/henriquebonfim/ai-chat',
    status: 'live',
  },
  {
    name: 'ultra-dl',
    command: 'ultra-dl <url>',
    description:
      'Concurrent downloader with resume, integrity checks, and a clean TUI. Built for unstable networks.',
    tags: ['Rust', 'TUI', 'CLI'],
    repo: 'https://github.com/henriquebonfim/ultra-dl',
    status: 'live',
  },
];
