import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skillGroups, socials } from '../data/content';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        eyebrow="About"
        title="A builder who ships, then explains"
        description="Two years of production full-stack work, and a public habit of learning in the open — the SanRemes series teaches the same AI engineering topics being learned."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I am an AI Full Stack Developer based in Chennai, with 2.3 years of experience building
              websites and web applications with React, Node.js and TypeScript.
            </p>
            <p>
              My work spans product features at Swache Technologies and Yogic Connection, an
              open-source AI code-review CLI on npm, and AI-video story reels built with an
              audit-before-publish discipline: every clip is checked before it ships.
            </p>
            <p>
              For clients, I build websites and automations with the same standard — fixed written
              quotes, mobile-first builds, and software that keeps working after launch day.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-line-strong"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-line-strong"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-line-strong"
              >
                <Mail size={15} /> Email
              </a>
            </div>
          </div>
        </Reveal>
        <div className="space-y-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
                <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{g.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="rounded-full bg-elevated px-3 py-1.5 text-sm font-medium text-text">
                      {s}
                    </span>
                  ))}
                </div>
                {g.note && <p className="mt-3 text-sm text-muted italic">{g.note}</p>}
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="text-sm text-muted">
              No percentage bars, no padded lists — every technology here is one that can be
              discussed in depth in an interview.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
