# AGENTS.md

Guidance for Claude Code and other agents working in this repository.

## Project Overview

servicestack.com is a **fully static** marketing site for ServiceStack's products, built with Next.js 16 (App Router),
React 19 and Tailwind CSS v4. The home page (`/`) is a hub of CTAs to mini sites hosted here, like the **Spell & Stone**
game at `/spell-stone`, and to related sites like [servicestack.net](https://servicestack.net) and
[react-templates.net](https://react-templates.net).

There is no backend: no API, auth, database or server runtime. Everything is exported to plain HTML/CSS/JS and
deployed to GitHub Pages.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000 (cache in .next/)
npm run build        # static export to dist/ (also type-checks)
npm run preview      # serve dist/ locally to check the production build
npm run typecheck    # tsc only
```

## Structure

```
app/
├── layout.tsx               # Root layout: global CSS, site-wide metadata, viewport
├── page.tsx                 # Home hub: featured mini site + cards linking to related sites
├── spell-stone/page.tsx     # Spell & Stone mini site (fonts, SEO/OG metadata, section order)
├── icon.png, apple-icon.png # Favicons (game icon), picked up automatically by Next.js
components/spell-stone/
├── data.ts                  # All game facts and copy: heroes, towers, enemies, missions, screenshots
├── sections.tsx             # Static sections (stats, story, features, arsenal, bestiary, play, CTA, footer)
├── hero.tsx                 # Parallax hero (client)
├── heroes-showcase.tsx      # Interactive hero picker (client)
├── gallery.tsx              # Screenshot grid + lightbox (client)
├── site-nav.tsx             # Fixed nav with mobile menu (client)
└── effects.tsx              # Scroll-reveal observer and ember particle canvas (client)
styles/
├── index.css                # Tailwind entry
└── spell-stone.css          # Theme tokens (ink/parchment/gold), fonts, animations, utility classes (ss-*)
public/img/spell-stone/      # WebP art and screenshots exported from the game repo
public/img/hub/              # Card art for the home hub
.github/workflows/deploy.yml # Build + deploy to GitHub Pages on push to main
```

## Conventions

- **Static only.** `next.config.mjs` uses `output: 'export'`. Don't add API routes, server actions, middleware,
  `next/image` optimization, rewrites or anything else that needs a Node server. Data must be available at build time.
- **Content lives in `data.ts`.** Game facts come from the game repo (`docs/STORE.md`, `game/data/*.json`); keep them
  in step with the shipping build and don't advertise features the game doesn't have.
- **Mini sites** live at `app/<name>/page.tsx` with components in `components/<name>/`; add a card for them on the hub.
- **Assets** live under `public/img/<name>/`, never `public/<name>/`: a folder named like a route would shadow
  `<name>.html` on GitHub Pages. Paths are root-relative, so the site must be served from the domain root.
  Convert new art to WebP (`cwebp`) and keep images reasonably sized.
- **Interactivity** goes in small `'use client'` components; keep sections server-rendered where possible.
- **Animations** must respect `prefers-reduced-motion` (see `styles/spell-stone.css`).
- **Fonts** (Cinzel Decorative, Cinzel, Alegreya Sans) load via `next/font/google` in `app/page.tsx` and are
  self-hosted at build time, so the build needs network access.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `npm ci` and
`npm run build` and publishes `dist/` with the official GitHub Pages actions. See [README.md](README.md) for the
one-time repository and DNS setup.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
