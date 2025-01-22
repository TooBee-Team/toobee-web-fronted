import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: "/base/",
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
          ]
        },
        {
          text: '命令帮助',
          items: [
            { text: '索引', link: '/docs/commands/index'},
            { text: '玩家操控', link: '/docs/commands/player'},
            { text: '登录', link: '/docs/commands/easyauth'},
            { text: '命令脚本', link: '/docs/commands/script'}
          ]
        },
        {
          text: '客户端',
          items: [
            { text: '整合包通用信息', link: '/docs/client/modpack'},
            { text: 'OpenGL 版补充说明', link: '/docs/client/opengl'},
            { text: 'Vulkan 版补充说明', link: '/docs/client/vulkan'}
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
      { icon: 'github', link: 'https://github.com/Fungus-00/toobee-web' },
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
