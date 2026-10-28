import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Bot, Clapperboard, Code2, Globe, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { filters, projects, type ProjectCategory } from '../data/content';

const icons: Record<ProjectCategory, typeof Code2> = {
  'Web Apps': Layers,
  Websites: Globe,
  Automations: Bot,
  'AI & Video': Clapperboard,
};

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const Icon = icons[p.category];
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow)] transition-colors hover:border-line-strong"
    >
      <div className="grid-texture relative flex h-40 items-center justify-center bg-elevated">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
          <Icon size={30} />
        </div>
        {p.offer && (
          <span className="absolute top-3 right-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-text">
            Client offer
          </span>
        )}
        <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          {p.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-text">{p.title}</h3>
        <p className="mt-1 text-sm text-muted">{p.context}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-line bg-elevated px-2.5 py-1 text-xs font-medium text-text">
              {s}
            </span>
          ))}
        </div>
        {p.link && (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            {p.link.label} <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        eyebrow="Selected Work"
        title="Work that is real, and work I can do for you"
        description="Shipped products from full-time roles sit next to services offered to clients — clearly labelled, so nothing is dressed up as something it is not."
      />
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-accent text-accent-text'
                  : 'border border-line bg-surface text-muted hover:border-line-strong hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
      <Reveal className="mt-8">
        <p className="text-sm text-muted">
          “Client offer” cards describe services available to new clients — they are not presented as
          shipped client projects. Full code and walkthroughs are available on request.
        </p>
      </Reveal>
    </section>
  );
}
