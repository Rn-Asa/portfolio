import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import portfolio from './src/content/portfolio.json'

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'portfolio-html-metadata',
      transformIndexHtml(html) {
        const { seo } = portfolio.site
        const metadata = [
          `<title>${escapeHtml(seo.defaultTitle)}</title>`,
          `<meta name="description" content="${escapeHtml(seo.description)}" />`,
          `<meta name="author" content="${escapeHtml(portfolio.site.name)}" />`,
          '<meta property="og:type" content="website" />',
          `<meta property="og:title" content="${escapeHtml(seo.socialTitle)}" />`,
          `<meta property="og:description" content="${escapeHtml(seo.socialDescription)}" />`,
          `<meta property="og:image" content="${escapeHtml(seo.socialImage)}" />`,
        ].join('\n    ')

        return html.replace('<!-- PORTFOLIO_METADATA -->', metadata)
      },
    },
  ],
})
