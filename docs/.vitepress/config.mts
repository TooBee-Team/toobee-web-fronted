import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: "/base/",
  /*vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path
        }
      }
    }
  },
  */
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    ssr: {
      noExternal: ['vuetify']
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  },

  lastUpdated: true,

  title: "TooBee",
  description: "TooBee 服务器相关文档",
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/toobee.svg' }]],
  lang: 'zh-CN',
  cleanUrls: true,
  appearance: 'dark',

  themeConfig: {
    logo: { src: '/toobee.svg', width: 24, height: 24 },
    nav: [
      { text: '望舒仙岛', link: 'https://sunna.icu' },
      { text: '服务器文档', link: '/docs/' },
      { text: '更新日志与活动信息', link: '/changelogs/' },
    ],
    
    outline: { label: '页面导航' },

    sidebar: {
      '/docs/': [
        {
          text: '服务器说明',
          items: [
            { text: '基本信息', link: '/docs/index' },
            { text: '基本规则', link: '/docs/rules' },
            { text: '游戏特性', link: '/docs/features' },
            { text: '积分规则', link: '/docs/points' },
            { text: '独有进度', link: '/docs/advancements' },
          ]
        },
        {
          text: '命令帮助',
          items: [
            { text: '索引', link: '/docs/commands/index'},
            { text: '玩家操控', link: '/docs/commands/player'},
            { text: '登录', link: '/docs/commands/easyauth'},
            { text: '命令脚本', link: '/docs/commands/script'},
            { text: '玩家轨迹查询', link: '/docs/commands/tracker'}
          ]
        },
        {
          text: '技术性',
          items: [
            { text: '整合包通用信息', link: '/docs/technical/modpack'},
            { text: 'OpenGL 版补充说明', link: '/docs/technical/opengl'},
            { text: '服务器信息', link: '/docs/technical/info' },
            { text: '无法进服排查方案', link: '/docs/technical/unjoinable' },
          ]
        },
      ],
      '/changelogs/': [
        {
          text: '更新日志',
          items: [
            { text: '说明', link: '/changelogs/index' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fungus-00/toobee-web-fronted' },
      { icon: 'discord', link: 'https://discord.gg/YcJVpVKe8q' }
    ],

    footer: {
      message: 'Email: jkfungus@yandex.com',
      copyright: 'Copyright © 2025-present Fungus'
    },

    lightModeSwitchTitle: '切换至浅色背景',
    darkModeSwitchLabel: '切换至深色背景'
  }
})
