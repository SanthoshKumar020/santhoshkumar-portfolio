import { ArrowUp, Download, Github, Linkedin, Mail } from 'lucide-react';
import { socials } from '../data/content';
import { downloadResume } from '../lib/resume';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-text">
              SK<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              AI Full Stack Developer — React, Node.js, TypeScript. Chennai, open to Bengaluru,
              Tamil Nadu and remote. Immediate joiner.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-text transition-colors hover:border-line-strong hover:bg-elevated"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-text transition-colors hover:border-line-strong hover:bg-elevated"
            >
              <Github size={17} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-text transition-colors hover:border-line-strong hover:bg-elevated"
            >
              <Mail size={17} />
            </a>
            <button
              type="button"
              onClick={downloadResume}
              aria-label="Download résumé"
              className="flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-text transition-colors hover:border-line-strong hover:bg-elevated"
            >
              <Download size={15} /> Résumé
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-sm text-muted">© {year} Santhoshkumar Karthikeyan. Built with React, Tailwind and Motion.</p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element | number) => void } }).__lenis;
              if (lenis) lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-text"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
