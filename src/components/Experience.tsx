import { Briefcase, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading
          eyebrow="Experience"
          title="2.3 years, two teams"
          description="Dates and roles match the résumé and LinkedIn exactly — recruiters cross-check, so there is one source of truth."
        />
        <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line sm:before:left-[7px]">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.06}>
              <article className="relative pl-10">
                <span className="absolute top-2 left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
                <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-text">
                      {e.role} <span className="text-muted">·</span>{' '}
                      <span className="text-accent">{e.company}</span>
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-muted uppercase">{e.period}</p>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <Briefcase size={14} /> {e.company} <span aria-hidden="true">·</span>{' '}
                    <MapPin size={14} /> {e.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
