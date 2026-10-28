export type ProjectCategory = 'Web Apps' | 'Websites' | 'Automations' | 'AI & Video';

export interface Project {
  title: string;
  category: ProjectCategory;
  context: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  offer?: boolean;
}

export const projects: Project[] = [
  {
    title: 'MRF Monitor',
    category: 'Web Apps',
    context: 'Swache Technologies · Full-time role',
    description:
      'Full-stack product work at Swache — building and shipping features across the UI, APIs and database for a production web application.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Yogic Connection',
    category: 'Websites',
    context: 'Yogic Connection · Full-time role',
    description:
      'Developed and maintained websites and web applications, working across frontend and backend features from UI to APIs and databases.',
    stack: ['React', 'Node.js', 'JavaScript'],
  },
  {
    title: 'SanRemes — AI Engineering Series',
    category: 'AI & Video',
    context: 'YouTube · Learn-by-teaching series',
    description:
      'A self-taught AI engineering curriculum taught in public: Python and DSA series planned episode by episode, with code-first lessons.',
    stack: ['Python', 'Teaching', 'YouTube'],
    link: { label: 'Watch an episode', href: 'https://youtu.be/NqOwa2Z2fDo' },
  },
  {
    title: 'AI-Video Story Pipeline',
    category: 'AI & Video',
    context: 'Tamil AI story reels · @kadhai_studio_ai',
    description:
      'Frame-chained AI story reels with consistent characters, Tamil voice and audio audited clip by clip before anything is published.',
    stack: ['Google Flow', 'Veo 3.1', 'ffmpeg'],
    link: { label: 'Watch an episode', href: 'https://www.instagram.com/reel/De4fHOjquLt/' },
  },
  {
    title: 'AI Lead-Capture Widget',
    category: 'Automations',
    context: 'Client offer · Websites for clinics & local services',
    description:
      'A chat widget that captures and qualifies leads for clinics and local services, so enquiries never sit unanswered in an inbox.',
    stack: ['React', 'LLM APIs', 'Node.js'],
    offer: true,
  },
  {
    title: 'n8n Business Automation',
    category: 'Automations',
    context: 'Client offer · Enquiries, bookings & follow-ups',
    description:
      'Workflows that handle enquiry replies, booking handling and review requests automatically — the repetitive work, done by software.',
    stack: ['n8n', 'WhatsApp', 'APIs'],
    offer: true,
  },
];

export const filters: Array<'All' | ProjectCategory> = [
  'All',
  'Web Apps',
  'Websites',
  'Automations',
  'AI & Video',
];

export interface Service {
  title: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    title: 'Marketing & Business Websites',
    description:
      'Fast, mobile-friendly websites that turn visitors into enquiries — built for clinics, homestays, studios and local services.',
    points: ['Mobile-first design', 'Enquiry & booking flows', 'SEO-ready structure'],
  },
  {
    title: 'Web Applications',
    description:
      'Full-stack apps with dashboards, authentication and APIs — from an idea to a deployed product people actually use.',
    points: ['React + Node.js', 'PostgreSQL / MongoDB', 'Deployed on Vercel'],
  },
  {
    title: 'Automations & Internal Tools',
    description:
      'n8n workflows and small tools that remove repetitive manual work: follow-ups, data entry, notifications, reports.',
    points: ['n8n workflows', 'WhatsApp automation', 'Lead capture'],
  },
  {
    title: 'AI-Powered Features',
    description:
      'Practical LLM API integrations — chat widgets, code-review tooling and AI-assisted features, shipped as real products.',
    points: ['LLM API integration', 'AI code-review CLI on npm', 'No hype, working software'],
  },
];

export interface ProcessStep {
  title: string;
  description: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Free discovery call',
    description: 'We talk about what you need, who it is for, and what success looks like.',
    detail: 'No pressure, no jargon — just a clear conversation about the goal.',
  },
  {
    title: 'Fixed written quote',
    description: 'You get scope, timeline and a fixed price in writing before any work starts.',
    detail: 'No hourly meters running in the background. What is quoted is what you pay.',
  },
  {
    title: 'Design',
    description: 'Layout, content structure and the user journey — agreed with you first.',
    detail: 'You see it early, while changes are still cheap and easy.',
  },
  {
    title: 'Build',
    description: 'Clean, responsive code with regular progress updates as features land.',
    detail: 'React, Node.js and TypeScript — the same stack used in production roles.',
  },
  {
    title: 'Launch & support',
    description: 'Deployed, tested on real phones, and handed over with support after launch.',
    detail: 'Launch day is the start, not the end — fixes and small tweaks included.',
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Swache Technologies',
    period: 'Nov 2025 — Aug 2026',
    location: 'Chennai',
    bullets: [
      'Built and shipped full-stack features with React, Node.js and PostgreSQL.',
      'Contributed to a team-built internal Q&A tool that ingested hospital CSV datasets and answered questions over the data.',
      'Worked end-to-end: UI, APIs and database changes for production features.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Yogic Connection',
    period: 'Jul 2024 — Oct 2025',
    location: 'Chennai',
    bullets: [
      'Developed and maintained websites and web applications.',
      'Worked across frontend and backend features, from UI to APIs and databases.',
      'Shipped responsive, mobile-friendly interfaces used by real visitors.',
    ],
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'Python'] },
  { label: 'Data', skills: ['PostgreSQL', 'MongoDB', 'SQL'] },
  { label: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Vercel'] },
  {
    label: 'Currently deepening',
    skills: ['FastAPI', 'n8n automation', 'LLM API integration'],
    note: 'Actively building — not claimed as production experience.',
  },
];

export const socials = {
  linkedin: 'https://www.linkedin.com/in/santhoshkumar-karthikeyan/',
  github: 'https://github.com/SanthoshKumar020',
  email: 'kumarsanthosh2743@gmail.com',
  phone: '+91-6374310315',
};
