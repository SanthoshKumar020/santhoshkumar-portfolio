import { lazy, Suspense, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react';
import { useRichMotion } from '../hooks/useRichMotion';
import { downloadResume } from '../lib/resume';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

function scrollToId(id: string) {
  const target = document.querySelector(id);
  if (!target) return;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element, o?: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(target, { offset: -72 });
  else target.scrollIntoView({ behavior: 'smooth' });
}

/** Hero: real background video (muted loop, poster fallback) with parallax —
 *  the video layer drifts slower than the headline as you scroll (desktop
 *  only). On mobile and for reduced-motion users the static poster shows. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const rich = useRichMotion();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const bg = (
    <>
      {/* Desktop: video. Mobile: poster image (no autoplay weight on phones). */}
      <video
        className="hidden h-full w-full object-cover md:block"
        src="/hero-video.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <img
        className="block h-full w-full object-cover md:hidden"
        src="/hero-poster.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" aria-hidden="true" />
    </>
  );

  const copy = (
    <>
      <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
        Open to opportunities — full-time &amp; freelance
      </p>
      <h1 className="font-display mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl">
        Santhoshkumar
        <br />
        Karthikeyan<span className="text-accent-strong">.</span>
      </h1>
      <p className="mt-4 text-xl font-medium text-white/90 sm:text-2xl">AI Full Stack Developer</p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
        I build websites, web apps and automations with React, Node.js and TypeScript — and add
        AI-powered features that actually ship. Based in Chennai, open to Bengaluru, Tamil Nadu and
        remote work. Immediate joiner.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => scrollToId('#work')}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-text transition-transform hover:scale-[1.03]"
        >
          View My Work <ArrowRight size={16} />
        </button>
        <button
          type="button"
          onClick={() => scrollToId('#contact')}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          Start a Project
        </button>
        <button
          type="button"
          onClick={downloadResume}
          className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-white"
        >
          <Download size={16} /> Résumé
        </button>
      </div>
      <p className="mt-8 flex items-center gap-2 text-sm text-white/60">
        <MapPin size={15} /> Chennai, India · 2.3 years experience
      </p>
    </>
  );

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {rich ? (
        <>
          <motion.div style={{ y: videoY, scale: videoScale }} className="absolute inset-0">
            {bg}
          </motion.div>
          <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 w-full">
            <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">{copy}</div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="absolute inset-0">{bg}</div>
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">{copy}</div>
          </div>
        </>
      )}

      {/* Tiny lazy canvas accent: desktop + motion-safe only, paused off-screen. */}
      {rich && !reduce && (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      )}

      <button
        type="button"
        onClick={() => scrollToId('#work')}
        aria-label="Scroll to work"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
