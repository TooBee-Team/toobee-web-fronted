---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
lastUpdated: 2025-01-18T01:12:49+08:00

hero:
  name: "好人服・诺金 (TooBee)"
  text: "MC 1.21.4 纯生存服\nIP地址:  2ob.top"
  tagline: "支持Java版与基岩版客户端，无需正版验证\n有白名单，QQ群:  786296062"
  image:
    src: /background.webp
    alt: TooBee 大厅
  actions:
    - theme: brand
      text: 基本信息
      link: /docs/
    - theme: alt
      text: 监控面板
      link: http://players.2ob.top:45713/server/TooBee/overview
    - theme: alt
      text: 客户端整合包
      link: https://modrinth.com/modpack/toobee-client

features:
  - title: 生电
    icon: 🏭
    details: 服务端核心为 Fabric，所有特性均遵循原版，完美支持生电
  - title: 高性能
    icon: ⚡
    details: 服务器使用i9-14900K CPU，且做了大量针对性优化，性能卓越
  - title: 维护活跃
    icon: 🛠️
    details: 服主是专业的模组开发者，维护服务器十分活跃，积极响应玩家诉求
  - title: 氛围和谐
    icon: ♥️
    details: 服内玩家相处和谐友好，所有行为均被永久记录，让熊孩子无处可逃
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/craftbukkit.webp',
    name: '好人菌 (CraftBukkit)',
    title: '好人服领袖',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/fungus.webp',
    name: '菌 (Fungus)',
    title: '服主',
    links: [
      { icon: 'github', link: 'https://github.com/Fungus-00' },
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/ap2000_.webp',
    name: '鹏 (ap2000_)',
    title: '服务商',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
]
</script>

<br />

<p style="text-align:center; line-height: 2.0;"><font size="14"><b>运 维 团 队</b></font></p>

<VPTeamMembers size="small" :members="members" />
