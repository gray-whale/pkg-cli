import { defineConfig } from 'vitepress'
import {sidebar} from './sidebar'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "<%= name %>",
  description: "<%= name %>",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://avatars.githubusercontent.com/u/133242655?s=200&v=4",
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/home' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gray-whale/pkg-cli' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  outDir: './../site-dist',
})
