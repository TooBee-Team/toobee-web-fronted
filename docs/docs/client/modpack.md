---
outline: deep
---

# 整合包通用信息

TooBee 服专用整合包，不是进服必须的，但推荐有一定经验的玩家使用，不推荐纯小白使用。请通过 [Modrinth](https://modrinth.com/modpack/toobee-client) 下载。本文只针对最新版整合包，请检查你的整合包版本是否为最新版，如果否请重新下载最新版。

游戏版本：1.21.5
子版本: 1

![在冰上](/modpack_show.png)

## 介绍 {#introduction}

### 基本信息 {#basic_info}

该整合包是为 TooBee 生存服务器提供的客户端整合包，但也可用于其它生存服。其注重于性能优化、功能辅助和体验增强，你可以自由地在其基础之上增加、删减或更新模组以满足额外需求，不过不保证兼容性。适用于包括生电和建筑玩家在内的绝大部分玩家，并提供了一些可选模组。其包含了许多最新发布、甚至未发布的模组（作者手动更新构建了个别未更新的模组）。

整合包分为两个版本，分别为基于 OpenGL 图形库的O版和基于 Vulkan 图形库的V版。O版能用光影以及绝大部分模组；V版不能用光影和某些模组，但流畅度更高（至少在我的Linux笔记本上是这样）。后面有详细说明。

**如果你不关心这么多，选择O版。**

::: :warning: 临时注
由于当前版本 Vulkan 模组尚未更新至1.21.5，故暂无 Vulkan 版而只有 Opengl 版。后文中用~~删除线~~标注的内容因包括 Vulkan 在内的某些模组因尚未及时更新版本而导致相应的功能暂时无法使用，而未来如果其更新将会移除删除线。
:::

囿于作者时间精力有限，整合包还有很多细节有待完善，后续再补充。你有任何想法或建议、或发现任何bug请联系作者，不过不一定有时间及时解决，因为作者在MC方面上的主业是服主以及开发服务端模组（本身的学业压力就很大）。

### 主要内容说明 {#contents}

整合包适配了TooBee服务器的服务端模组，理论上在其他生存服务器上也能良好运行。但是不论怎么说，**请注意这个整合包专门用于游玩服务器**，作者没有对单人世界或联机游戏做任何测试，尽管理论上可以正常游玩这些，部分功能可能需要你自己手动加模组（比如创世神和联机模组等）。

模组以及配置是作者精心挑选和调试的，尽可能保证良好的体验并且适用于大部分玩家。如果你觉得不适合你可以自己做调整，但是有bug记得和我说。整合包提供了一些没有默认添加的可选模组，另外也添加了一些资源包和光影包。

大部分模组的核心功能请自己摸索，可以去B站和MCMOD上找找有关教程。事实上模组的官方文档永远是最好的教程 :)

### 关于优化 {#optimization}

作者是在一台使用了 NVIDIA RTX3050 显卡和 Intel 13700H 处理器的 ThinkBook 16 笔记本上测试的，操作系统为 Arch Linux、桌面为 KDE，并基于 Wayland 启动MC，内存设为10G。因此以下所有内容仅代表在我的机子上的情况，我尚不清楚在其它地方比如Windows系统上的表现，你可以告诉我，之后补充到此文档中。

在我的机子上，V版的帧率比O版要流畅和稳定得多，这个差距在Windows上或许会缩小。总的来说整合包特别是O版的帧率表现始终令我不太满意，波动比较大，你可以把你的使用体验告诉我。

对于O版：如果你也感觉帧率有点低，优先考虑移除跟UI相关的模组，特别是 AutoHud，它动态显示物品栏，在我机子上测试时会略微降低FPS。此外在玩家看向大量实体时（比如面对猪人塔）可能会掉一半的帧率，V版没有这样的问题。

而V版在我的 Linux 机子上无法使用输入法，其他系统有待测试。V版无法使用光影，它不兼容的模组稍后列举。

另外游戏内UI缩放大小不一定适合你，请自行在 *视频设置* 界面内调整。

## :warning: HMCL 启动器用户注意事项 {#HMCL}

使用 [HMCL](https://hmcl.huangyuhui.net) 启动器的用户需注意：由于 issue [#3696](https://github.com/HMCL-dev/HMCL/issues/3696)，即 HMCL 暂时无法正确处理 Modrinth 整合包中的可选资源，所有提供的可选模组都会被自动下载。你需要参照相应版本的可选模组列表（[OpenGL](opengl#optional_mods) 或 [Vulkan](vulkan#optional_mods)），手动剔除不需要的模组，并在游戏版本设置中取消选择*检查资源完整性*。如果你选择直接加载所有的可选模组，请自行承担启动时所需的额外时间以及潜在的bug。HMCL 开发者声称计划在 2025 年 6 月发布的 3.6.13 版解决该问题。

## 两个版本模组差异表 {#version_difference}

### Vulkan版独有模组 {#vulkan_only_mods}
- Journey Map
- Vulkan Mod
- Bobby (可选)

### OpenGL版独有的模组 {#opengl_only_mods}
- Better Clouds (可选)
- Cube With Borders
- Fabrishot
- First Person (可选)
- Immediately Fast
- Iris
- Nvidium
- Reese Sodium Options
- Sodium
- Sodium Extra
- Xaeros Minimap
- Xaeros World Map
- Xaero Zoomout
- Distant Horizons (可选)
- WayFix (可选)

**注：**
1. Bobby 作为 Distant Horizon 的替代，Journey Map 作为 Xaero Map 的替代。
2. First Person 能和 Vulkan 放在一起运行，但是第一人称视角会被头部遮住导致没法正常用。

## 补充模组 {#supplementary_mods}

### 其它一些可以考虑的模组
这些模组没有预装到整合包里，感兴趣的请自行去MCMOD和Modrinth上搜索。

- *Lamb Dynamic Lights* 动态光源。由于有了Gamma工具我觉得不需要这玩意了哈哈。当然如果你享受那种沉浸式体验建议加上。
- *Reactive Music* 添加了许多优美的环境音乐，并且让您可以自定义音乐。由于文件太大了没有预装到整合包里。
- *Chat Tools* 聊天工具箱。跟整合包里的Chat Patches类似，因此没有加进来。你可以用这个替换Chat Patches。
- *Packet Fixer* 修复了因传输网络数据包异常而被踢出的一系列问题。不过这貌似需要服务端支持。
- *Tab Tweaks* 让你可以自定义修改玩家列表。其实我觉得TooBee服的列表已经挺好了。
- *Item Descriptions* 为所有方块、物品和实体添加了独特的描述。这些描述总结了物品的用途、来源或任何其他有用信息。
- *Fancy Menu* 让您以用户友好的方式个性化 Minecraft 的菜单。兼容性未知。
- *Modern UI* 现代化UI，整个重构了MC的UI系统，因此兼容性一坨。另外截至目前貌似尚未更新1.21.4
- *Inventory Hud+* 类似Durability Viewer，另外一直还能显示背包。我觉得显示背包有点挡视线而且这个模组闭源，就没加了。

### 很不错但尚未更新至1.21.5的模组

除了第一个模组外其它都曾在1.21.4整合包中存在过。

- Custom Block Highlight
- Detail Armor Bar
- Enhanced Block Entities
- Interactic
- Isometric Renders
- ModernFix
- ReplayMod
- VulkanMod

## 致谢 {#thanks}
- nvbie 为整合包做的测试
- techxun 为Masa系列模组做了部分配置

## 关于制作 {#fabrication}

这里简述作者如何制作和更新整合包的，这是一个比较复杂的流程，如果你有兴趣可以阅读。

事实上所有的模组和资源在早期基本都已经选好了，刚开始经历了一个痛苦、复杂而漫长的遴选和测试过程，并花了一整天手动填写完了 `modrinth.index.json` 的所有内容。现在我和 Anom 编写了专门的[自动化脚本](https://github.com/TooBee-Team/Client-Modpacker)来辅助完成一部分更新工作：

借助 Modrinth API 根据之前的 `modrinth.index.json` 自动抓取并重新生成一个新的文件，并检查一些项目的代码仓库或 Discord，看看开发者有无什么新的动向，对于非 Modrinth 资源也可使用这个脚本通过 URL 下载链接自动提取信息。然后把这份文件重新合并至之前的整合包内，将这份整合包导入进客户端加载并不断调试。接着借助 [KDiff3](https://apps.kde.org/kdiff3) 工具对比客户端加载过后的配置文件，检查每一条差异，将有效的变动文件合并进之前的整合包内。然后更新文档，更各种元信息。以上这些步骤要对 OpenGL 和 Vulkan 分别做两次，最后发布至 Modrinth 并记录 Changelog。
