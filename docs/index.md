---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TooBee"
  text: "MC 26.2 纯生存服\nIP地址:  2ob.top"
  tagline: "支持Java版与基岩版客户端，无需正版验证\n有白名单，QQ群:  456271391"
  image:
    src: /background.webp
    alt: TooBee 大厅
  actions:
    - theme: brand
      text: 基本信息
      link: /docs/
    - theme: alt
      text: 卫星地图
      link: https://map.toobee.top
    - theme: alt
      text: 监控面板
      link: https://plan.toobee.top

features:
  - title: 生电
    icon: 🏭
    details: 服务端核心为 Fabric，所有特性均遵循原版，完美支持生电
  - title: 高性能
    icon: ⚡
    details: 服务器做了大量针对性优化，性能卓越
  - title: 维护活跃
    icon: 🛠️
    details: 服主是专业的模组开发者，维护服务器十分活跃，积极响应玩家诉求
  - title: 氛围和谐
    icon: ♥️
    details: 服内玩家相处和谐友好，所有行为均被永久记录，让熊孩子无处可逃
---

<script setup>
import Basic from './components/Basic.vue'

import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/team/craftbukkit.webp',
    name: '好人菌 (CraftBukkit)',
    title: '好人服领袖',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/fungus.webp',
    name: '菌 (Fungus)',
    title: '服主、主要开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Fungus-00' },
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/ap2000_.webp',
    name: '鹏 (ap2000_)',
    title: '服务商',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/techxun.webp',
    name: 'techxun',
    title: '生电管理员',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/anom.webp',
    name: 'Anom',
    title: '辅助开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Anom71' },
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/QM_Binyu.webp',
    name: '秋漠・滨语 (QM_Binyu)',
    title: '综合管理员',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
]
</script>

<Basic />

<!-- <h2 style="text-align:center; line-height:2.0; font-size:250%;"><b>运 维 团 队</b></h2>

<VPTeamMembers size="medium" :members="members" /> -->
