import { ViteSSGOptions as _ } from 'vite-ssg'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-md'
import markdownItPrism from 'markdown-it-prism';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-md
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: 'markdown-wrapper',
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(markdownItPrism)
        md.use(markdownItLinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
  },
})
