import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Section header with a scrubbed entrance: scale + translate tied to scroll
 *  position while the header enters the viewport (desktop only; plain reveal
 *  otherwise). Transform/opacity only — no layout animation. */
export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.35'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const inner = (
    <>
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>}
    </>
  );

  if (reduce) {
    return (
      <div ref={ref} className="mb-12 sm:mb-16">
        {inner}
      </div>
    );
  }
  return (
    <motion.div ref={ref} style={{ scale, y, opacity }} className="mb-12 sm:mb-16">
      {inner}
    </motion.div>
  );
}

export function SectionHeadingReveal(props: SectionHeadingProps) {
  return (
    <Reveal>
      <SectionHeading {...props} />
    </Reveal>
  );
}
