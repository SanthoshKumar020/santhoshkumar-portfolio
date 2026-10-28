# Santhoshkumar Karthikeyan — Portfolio (React)

A real Vite + React codebase for Santhoshkumar Karthikeyan's portfolio: AI Full
Stack Developer (React, Node.js, TypeScript), Chennai — open to Bengaluru, Tamil
Nadu and remote roles, immediate joiner.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Motion (`motion/react`) for reveals, parallax, scrubbed headers and the pinned
  Process showcase — GSAP was deliberately not added: Motion covers every
  scroll effect, keeping the bundle leaner
- Lenis for smooth scrolling (disabled for `prefers-reduced-motion` users)
- Lucide icons

## Sections

Hero (real background video + poster fallback) · Selected Work (filterable, 6
real cards — client offers clearly labelled) · Services · Process (sticky
scroll-driven showcase on desktop) · Experience timeline · About + grouped
skills (no fake bars) · Contact (FormSubmit AJAX + honeypot + no-JS fallback +
mailto fallback) · Footer.

## Themes

Dark (default) and light, both fully designed from one token set. The toggle in
the header persists to `localStorage` (`sk-theme`); first visits follow the
system colour scheme; an inline script in `index.html` sets the theme before
first paint so there is no white flash.

## Content honesty rules

No invented metrics, testimonials, clients or prices. Rates are not printed —
the site promises a fixed written quote after a free discovery call. Work cards
marked “Client offer” are services, not shipped client projects.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

## Deploy (Vercel)

Framework preset: Vite · Build command: `npm run build` · Output directory:
`dist` · Root directory: `./`. Every push to `main` deploys to production.

## Notes for the owner

- Contact form: FormSubmit needs a one-time activation click on the first
  submission email to kumarsanthosh2743@gmail.com before messages deliver.
- Résumé: `public/resume.pdf` is the 1-page master; update it and the site
  together so they never disagree.
- Canonical/OG URLs in `index.html`, `public/sitemap.xml` and `public/robots.txt`
  currently point at the existing Vercel address — update them if the domain
  changes.
