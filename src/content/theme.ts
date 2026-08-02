export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = Exclude<ThemeMode, 'system'>

export const THEME_STORAGE_KEY = 'starter-theme'

export interface ThemeConfig {
  label: string
  backgroundImage?: string
  primary: string
  wallpaperPosition: string
  themeColor: string
}

export const siteThemes: Record<ResolvedTheme, ThemeConfig> = {
  light: {
    label: 'Light',
    backgroundImage: '',
    primary: '#2563eb',
    wallpaperPosition: 'center',
    themeColor: '#ffffff',
  },
  dark: {
    label: 'Dark',
    backgroundImage: '',
    primary: '#3b82f6',
    wallpaperPosition: 'center',
    themeColor: '#09090b',
  },
}
