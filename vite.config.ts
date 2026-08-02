import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    printWidth: 96,
    sortPackageJson: false,
    ignorePatterns: ['dist/', '.astro/', 'node_modules/'],
  },
})
