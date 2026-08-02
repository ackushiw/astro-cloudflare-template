/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    siteTheme?: {
      getMode: () => 'light' | 'dark' | 'system'
      getResolvedTheme: () => 'light' | 'dark'
      setMode: (mode: 'light' | 'dark' | 'system') => void
    }
  }
}

export {}
