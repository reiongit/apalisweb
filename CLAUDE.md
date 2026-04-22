# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server (defaults to http://localhost:5173, falls back to the next free port)
- `npm run build` — produce a production build in `dist/`
- `npm run preview` — serve the built `dist/` locally to verify the production bundle

There is no test runner, linter, or formatter configured. Do not invent npm scripts; add them to `package.json` if the user asks for them.

## Origin: Claude Design handoff

This repo started as a **Claude Design handoff bundle** (see `README.md`). The original design prototype still lives in `project/` and must be treated as read-only reference:

- `project/Apalis Website.html` — the original single-page prototype that imports every component and stylesheet via `<script type="text/babel">` / CDN React + Babel Standalone. This is the **source of truth for visual intent**.
- `project/components/*.jsx` and `project/styles/*.css` — the prototype's components and styles, loaded directly in the browser.
- `chats/` — transcripts from the design session; read them when intent is unclear.

The production app in `src/` is a **port** of `project/`, not a rewrite — the component files and CSS files in `src/` mirror those in `project/` one-for-one. When a component's behavior or design is ambiguous, diff against `project/` before guessing.

## Architecture

Single-page React 18 site built with Vite. Entry point `src/main.jsx` imports the five stylesheets in order and mounts `<App />` into `#root`. `src/App.jsx` is a flat composition of section components rendered in a fixed order: `Nav → Hero → Services → About → Mission → Impact → Team → Careers → Contact`.

### Styling system

Styles are **plain CSS split across five files** that are always loaded together; order matters:

1. `base.css` — design tokens (CSS custom properties for `--red*`, `--ink*`, `--cream*`, fonts, spacing), resets, `.reveal` animation base, `.mono` utility.
2. `nav-hero.css` — Nav + Hero.
3. `sections-1.css` — Services, About, Mission.
4. `sections-2.css` — Impact, Team, Careers.
5. `contact-footer.css` — Contact.

There is no CSS-in-JS, no CSS modules, and no Tailwind. Class names follow loose BEM (`section-head__title`, `meta--red`). Fonts (Instrument Serif, Inter Tight, JetBrains Mono) are loaded from Google Fonts in `index.html`.

### Shared component primitives

`src/components/shared.jsx` exports three primitives used across sections:

- `<Reveal>` — wraps children in an IntersectionObserver-triggered fade/slide (`.reveal` / `.reveal--in` classes defined in `base.css`). Use this for on-scroll reveals instead of writing new observers.
- `<Counter to={N} suffix="+" />` — animates a number from 0 to `to` once it scrolls into view.
- `<SectionHeader idx eyebrow title tone>` and `<Meta num label tone>` — the standard eyebrow + numbered-heading pattern used by every major section.

New sections should reuse these rather than reimplementing observers or heading markup.

## Conventions

- **Do not edit `project/`.** It is the frozen design reference. Port changes into `src/` instead.
- Keep `src/components/*` as a 1:1 mirror of `project/components/*` in terms of names and responsibilities; that parity is what makes the prototype useful as a diff target.
- Components are function components using hooks. No TypeScript, no prop-types.
- The site is a single static page — there is no router, no data fetching, no backend.
