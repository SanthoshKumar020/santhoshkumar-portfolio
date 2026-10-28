import { Check, Globe, LayoutDashboard, Sparkles, Workflow } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { services } from '../data/content';

const icons = [Globe, LayoutDashboard, Workflow, Sparkles];

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="For freelance clients: websites, web apps and automations, delivered with a fixed written quote after a free discovery call."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-text">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{s.description}</p>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-text">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8">
          <p className="text-sm text-muted">
            No prices are listed because rates are set per project — every engagement starts with a
            free discovery call and ends with a fixed written quote before work begins.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
