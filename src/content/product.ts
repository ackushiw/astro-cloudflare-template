/**
 * Single source of truth for site/product information.
 */
export const product = {
  name: 'Astro Cloudflare Starter',
  tagline: 'Modern, fast, static web template powered by Astro and Cloudflare',
  description:
    'A clean starter template built with Astro, Tailwind CSS, and Cloudflare deployment conventions.',
  contactEmail: 'contact@example.com',
  privacyEmail: 'privacy@example.com',
  repositoryUrl: 'https://github.com/example/astro-starter',
  copyrightHolder: 'Acme Corp',
} as const

export const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#about', label: 'About' },
] as const

export interface Feature {
  id: string
  title: string
  summary: string
}

export const features: readonly Feature[] = [
  {
    id: 'astro',
    title: 'Powered by Astro',
    summary: 'Zero JS by default, superfast static site generation.',
  },
  {
    id: 'cloudflare',
    title: 'Cloudflare Deployment',
    summary: 'Deploy instantly to Cloudflare Workers or Pages with Wrangler.',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS v4',
    summary: 'Utility-first styling with modern CSS variables and dark mode support.',
  },
]
