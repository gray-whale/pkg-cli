import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pkg Cli",
  description: "组件开发工具",
  base: '/pkg-cli/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://avatars.githubusercontent.com/u/133242655?s=200&v=4",
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/home' }
    ],
    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '介绍', link: '/home.md' },
          { text: '命令', link: '/commands.md' },
          { text: '配置', link: '/config.md' },
          { text: '目录结构', link: '/directory.md' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gray-whale/pkg-cli' }
    ]
  },
  outDir: './../site-dist',
})
