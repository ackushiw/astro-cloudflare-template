# Astro Cloudflare Starter

A clean, modern, high-performance starter template built with Astro and Tailwind CSS v4, optimized for deployment on Cloudflare Workers and Pages.

## Overview

This starter template provides a fast, lightweight, and accessible foundation for building modern web applications and static sites. It includes pre-configured theme management (light/dark modes), reusable UI components, and seamless deployment to Cloudflare.

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Deployment:** [Cloudflare Workers / Pages](https://workers.cloudflare.com) via Wrangler
- **Language:** TypeScript
- **Formatting & Diagnostics:** Prettier with Astro plugin & Astro Check

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Development Server

Start the local development server:

```bash
pnpm dev
```

### 3. Build

Build the project for production:

```bash
pnpm build
```

### 4. Preview

Preview the production build locally:

```bash
pnpm preview
```

### 5. Deploy

Deploy to Cloudflare Workers / Pages using Wrangler:

```bash
pnpm deploy
```

## Project Structure

```text
├── public/              # Static public assets (favicons, icons, etc.)
├── src/
│   ├── assets/          # Project images and global visual assets
│   ├── components/      # Reusable components
│   │   ├── layout/      # Core layout elements (Header, Footer, ThemePicker, Wordmark)
│   │   └── ui/          # UI primitives (Button, Card, Badge, Separator, etc.)
│   ├── content/         # Site configuration and content models (product.ts, theme.ts)
│   ├── layouts/         # Page layout templates (BaseLayout.astro)
│   ├── pages/           # Astro page routes and API endpoints (index, 404, robots.txt)
│   └── styles/          # Global styles (global.css with Tailwind directives)
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── wrangler.jsonc       # Cloudflare deployment settings
```

## Responsive conventions

A few defaults here exist because the obvious thing is subtly wrong on phones.

- **Full-height layouts use `.min-h-app`, not `min-h-screen`.** `min-h-screen`
  is `100vh`, and on iOS Safari `vh` is the viewport with the toolbars _hidden_,
  so a `100vh` layout is taller than the screen and its bottom sits behind the
  tab bar. `.min-h-app` uses `svh` — the smallest the viewport gets — with a
  `100vh` fallback. (The fallback is often optimised out of the built CSS when
  every browser target supports `svh` — that is expected.)
- **A CSS fallback pair must be one hand-written rule.** Writing
  `min-h-[100vh] min-h-[100svh]` looks like progressive enhancement but is not:
  generated utilities are not emitted in the order you write the classes, so the
  fallback can come last and win. `.min-h-app` in `global.css` is the pattern to
  copy.
- **`viewport-fit=cover` is set, and `body` carries the horizontal safe-area
  insets.** Without `viewport-fit=cover` every `env(safe-area-inset-*)` resolves
  to `0`, so safe-area padding is inert. Components pinned to the top or bottom
  edge should add their own vertical inset.
- **Scale type and spacing with CSS; never with `transform: scale()`.** Scaling
  a layout to make it fit does not reflow it — the same line breaks just get
  smaller — and it overrides whatever text size the reader has chosen. Reach for
  fluid `clamp()` type, responsive spacing, and letting content reflow or
  scroll. If you do add a fluid type ramp, weight it on `vw`; `vh` weighting
  only makes sense for full-viewport screens that never scroll.

## Configuration

- **Site & Product Details:** Update `src/content/product.ts` to customize product info, navigation links, branding, and contact details.
- **Theme Configuration:** Adjust `src/content/theme.ts` for visual styling and color themes.
- **Cloudflare Settings:** Modify `wrangler.jsonc` to set up your project name, bindings, and custom domains.
