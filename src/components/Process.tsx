import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { processSteps } from '../data/content';
import { useRichMotion } from '../hooks/useRichMotion';

/** Pinned showcase: on desktop the left panel sticks while the five process
 *  steps scroll past on the right, and the panel follows the step currently
 *  in view (scroll-driven, transform/opacity only). On mobile and for
 *  reduced-motion users the same steps render as a simple stacked list. */
export default function Process() {
  const rich = useRichMotion();
  const stepsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 0.65', 'end 0.65'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(processSteps.length - 1, Math.max(0, Math.floor(v * processSteps.length))));
  });

  const step = processSteps[active];

  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        eyebrow="Process"
        title="From first call to launch, in five steps"
        description="A fixed written quote after a free discovery call — no hourly meters, no surprises."
      />

      {!rich ? (
        <div className="space-y-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.title}>
              <article className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Step {i + 1}</p>
                <h3 className="font-display mt-2 text-xl font-bold text-text">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{s.description}</p>
                <p className="mt-1 text-sm text-muted italic">{s.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Pinned panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <p className="font-display text-6xl font-bold text-accent">
                      {String(active + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display mt-4 text-2xl font-bold text-text">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
                    <p className="mt-3 text-muted italic">{step.detail}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-5 flex gap-2">
                {processSteps.map((s, i) => (
                  <span
                    key={s.title}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i === active ? 'bg-accent' : 'bg-elevated'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <div ref={stepsRef} className="space-y-6">
            {processSteps.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`flex min-h-[62vh] flex-col justify-center rounded-2xl border p-7 transition-colors sm:p-8 ${
                  i === active ? 'border-line-strong bg-surface' : 'border-line bg-surface/60'
                }`}
              >
                <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                  Step {i + 1} of {processSteps.length}
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold text-text sm:text-3xl">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{s.description}</p>
                <p className="mt-3 text-muted italic">{s.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
