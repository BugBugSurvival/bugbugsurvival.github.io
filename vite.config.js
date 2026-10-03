import { readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import { blocks } from './src/render.js'

// Replaces `<!-- @name -->` in every page with the matching block from
// src/render.js. Editing anything under src/data restarts the dev server.
function siteBlocks() {
  return {
    name: 'site-blocks',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const path = ctx.path.replace(/index\.html$/, '')
        return html.replace(/<!--\s*@([\w-]+)\s*-->/g, (_, name) => {
          if (!blocks[name]) throw new Error(`Unknown block <!-- @${name} --> in ${ctx.path}`)
          return blocks[name](path)
        })
      },
    },
  }
}

// Production output: strip comments, Vite's same-origin `crossorigin` attributes
// and indentation from HTML (<pre> and <script> contents are left untouched),
// and drop macOS .DS_Store files that Finder leaves in public/.
function tidyHtml() {
  return {
    name: 'tidy-html',
    apply: 'build',
    closeBundle() {
      for (const file of readdirSync('dist', { recursive: true })) {
        if (file.endsWith('.DS_Store')) rmSync(join('dist', file))
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const kept = []
        return html
          .replace(/\s+crossorigin(?=[\s>])/g, '')
          .replace(/<(pre|script)\b[\s\S]*?<\/\1>/g, (m) => `\u0000${kept.push(m) - 1}\u0000`)
          .replace(/<!--[\s\S]*?-->/g, '')
          .replace(/>\s+(?=<|\u0000)/g, '>')
          .replace(/(\u0000\d+\u0000)\s+(?=<)/g, '$1')
          .replace(/\s{2,}/g, ' ')
          .replace(/\u0000(\d+)\u0000/g, (_, i) => kept[i])
          .trim()
      },
    },
  }
}

export default defineConfig({
  plugins: [siteBlocks(), tidyHtml()],
  build: {
    modulePreload: { polyfill: false },
    rolldownOptions: {
      input: {
        home: 'index.html',
        notFound: '404.html',
      },
    },
  },
})
