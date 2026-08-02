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

## Configuration

- **Site & Product Details:** Update `src/content/product.ts` to customize product info, navigation links, branding, and contact details.
- **Theme Configuration:** Adjust `src/content/theme.ts` for visual styling and color themes.
- **Cloudflare Settings:** Modify `wrangler.jsonc` to set up your project name, bindings, and custom domains.
