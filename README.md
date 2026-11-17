# Luna Atkins Romero Consulting — website

Profile site for a non-profit strategy & governance consultancy.
Built with Astro and Tailwind, deployed on Netlify. Static, lightweight with particular attention given to semantic HTML and accessibility.

**Live:** https://www.lunaconsulting.ie

---

## Overview

Fast, tidy, content-driven profile site with a client-editable blog. The nature of the sector made
accessibility, performance, and a low carbon footprint genuine priorities, so the build favours
static HTML/CSS and ships the bare minimum of client-side JavaScript.

## Tech stack

- **[Astro](https://astro.build)** — static site generation, component-based, minimal JS by default
- **Tailwind CSS** — utility styling on top of a small custom design-token layer
- **[Decap CMS](https://decapcms.org)** — Git-based CMS so the client edits articles without touching code
- **Netlify** — hosting, CI/CD from `main`, managed SSL
- **web3forms** — serverless contact-form handling (no backend to maintain)

## Key features

- **Accessibility (WCAG 2.1 AA target)** — semantic landmarks, managed focus order, skip link,
  `aria` labelling on icon/external links, visible focus indicators, and `prefers-reduced-motion`
  respected on all animation. Includes a published accessibility statement.
- **Performance / low carbon** — static output, self-hosted `woff2` fonts with targeted preloading, minimal JS (only a small nav toggle).
- **SEO** — per-page meta and Open Graph images, canonical URLs, JSON-LD structured data,
  and an auto-generated sitemap.
- **Client-editable content** — Decap CMS at `/admin`, authenticated via GitHub through Netlify.
- **Responsive** — mobile-first, with hover effects gated behind `@media (hover: hover)` so they
  don't stick on touch devices.

## Project structure

```
src/
  components/    reusable UI (header, nav, footer, cards, brand mark, dividers, icons)
  content/       article collection (Markdown) + schema
  layouts/       shared page shell (head, meta, SEO, structured data)
  pages/         routes (home, articles, contact, accessibility, 404)
  styles/        global CSS + design tokens, self-hosted @font-face
public/
  admin/         Decap CMS config
  fonts/         self-hosted woff2
  favicon/       full favicon set + web manifest
  og-*.png       Open Graph share images
```

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Credits

Design and development: Patrick Belcher · https://github.com/patrickbelcher

Content, brand, and testimonials © Luna Atkins Romero Consulting.

## Licence

Source code is MIT licensed — see [LICENSE](LICENSE).

Content, brand assets, testimonials, and third-party logos are © Luna Atkins Romero Consulting
or their respective owners, and are **not** covered by the code licence.

