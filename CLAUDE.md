# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Confluence is a multi-brand collective with three arms: a football club, Confluence Music, and Confluence Clothing. The website is a unified hub that lets visitors navigate to whichever branch of the collective they're interested in, with each section having its own distinct identity while remaining part of a coherent whole.

## Design Philosophy

This is a creative, brand-driven project. Generic "AI slop" aesthetics are explicitly out of scope. Every design decision should feel intentional and specific to Confluence.

**Typography:** Choose distinctive, beautiful fonts — not Inter, Roboto, Arial, or system defaults. The font choice should carry character and be matched to the brand section (e.g. a football section might warrant something bold and editorial; music might lean expressive or underground).

**Color & Theme:** Commit hard to a palette. Use CSS variables for consistency. Dominant base colors with sharp accents — not evenly-distributed, timid palettes. Avoid purple-gradient-on-white. Each sub-brand may have its own accent while sharing a root system.

**Motion:** Prioritize one well-orchestrated page load with staggered reveals (`animation-delay`) over scattered micro-interactions. CSS-only preferred; use Motion library if React is in the stack. High-impact moments only.

**Backgrounds:** Atmosphere and depth over solid fills. Layer gradients, geometric patterns, or contextual effects.

**Avoid convergence:** Space Grotesk, Poppins, cookie-cutter card grids, hero-text-center-button layouts. Think outside the box on every render.

## Architecture Intent

The site is structured around three entry points:
- **Football Club** — sports-focused content (fixtures, squad, news)
- **Confluence Music** — music releases, artists, events
- **Confluence Clothing** — product/lookbook presentation

A shared landing page routes users to their area of interest. Sub-brand sections should feel distinct but connected — shared nav shell, divergent interior aesthetics.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 — config-free, driven by `@theme inline` in `globals.css`
- **Animation:** Motion (`motion/react`) — entrance animations; CSS `:has()` handles triptych panel hover expansion
- **Fonts:** Syne (display, extrabold) + Instrument Serif (italic body) via `next/font/google`

## Commands

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Route Structure

- `/` — Full-viewport triptych landing; three panels expand on hover and navigate to each brand
- `/football` — Confluence FC (acid lime `#B6FF00`)
- `/music` — Confluence Music (crimson `#E8302A`)
- `/clothing` — Confluence Clothing (warm tan `#C8BFA8`)

Each brand has its own `layout.tsx` mounting `BrandNav` (`src/components/BrandNav.tsx`) with a `← Confluence` back-link and section nav. The triptych CSS — panel classes, `:has()` hover expansion, background textures — all lives in `globals.css`.

## Design Tokens

Defined in `src/app/globals.css` under `@theme inline`:

| Token | Value | Use |
|---|---|---|
| `--color-void` | `#070707` | Global background |
| `--color-off-white` | `#F2EEE7` | Primary text |
| `--color-fc-accent` | `#B6FF00` | Football accent |
| `--color-music-accent` | `#E8302A` | Music accent |
| `--color-cloth-accent` | `#C8BFA8` | Clothing accent |
| `--font-display` | Syne | Headings, labels, UI |
| `--font-serif` | Instrument Serif | Italic body copy |
