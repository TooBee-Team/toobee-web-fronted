---
lastUpdated: 2025-01-19T02:20:00+08:00
prev: false
next: false
---

# 命令索引
## 基础命令

- `/h` 展示命令帮助，替代原版 `/help` 的命令帮助
- `/kill` 自杀
- `/list` 列出当前在线玩家
- `/lobby` 返回/离开大厅
- `/sign` 每日积分签到
- `/w <玩家名> <消息文本>` 给某个玩家私发消息
- 登录的一系列命令详见[登录章节](./easyauth)

## Ledger 命令

这是用来查询玩家交互记录的功能
- `/lg i` 进入方块记录查询模式，再次输入关闭。左键方块查询该位置历史记录，右键查询邻近位置历史记录。
- `/lg player <玩家名>` 查询该玩家首次和最后一次进服时间
- `/lg page` 跳转到上一次查询记录的具体页码

## Carpet 命令

地毯命令的[英文官方文档](https://github.com/gnembon/fabric-carpet/wiki/Commands)
- `/distance <坐标> <坐标>` 给出两点之间的直线、圆柱和曼哈顿距离
- `/log <项目>` 订阅服务器信息日志，用法详见 [Carpet 官方文档](https://github.com/HeartyYF/fabric-carpet-Wiki-CN/wiki/Commands#%E7%94%A8%E6%B3%95log)
- `/player <玩家名> [动作]` 操控玩家与假人，具体用法见[玩家操控](player)
- `/player tag <标签>` 这是本服独有命令，给假人加注释，玩家列表能够看到，空标签取消注释
- `/profile entities|health [游戏刻]` 监测服务器运算分配，entities显示每种实体数量与每刻的运算时间，health显示各项目每刻的运算时间；游戏刻指定监测从开始到结束的时间，默认100

## 皮肤命令
- `/skin refresh` 刷新当前皮肤
- `/skin clear` 清除当前皮肤
- `/skin set mojang <皮肤名>` 使用 Mojang 官方皮肤，可用皮肤[在此](https://namemc.com/)查询
- `/skin set ely.by <用户名>` 使用 [ely.by](https://ely.by) 的皮肤
- `/skin set web classic|slim <URL>` 使用URL链接指向的皮肤文件，classic或slim样式设置手臂粗细

## 其它命令
- `/bots` 列出可用假人列表
- `/crawl` 匍匐爬行，按潜伏键站起来
- `/create` 切换到创造服
- `/plstyle switch default|animated` 切换列表样式（default为默认样式，animated稍微花哨一点），仅Java版可用
- `/run` 执行[脚本命令](./script)，详见有关章节
- `/sit` 原地坐下，按潜伏键站起来
- `/trans <旧玩家名>` 申请将旧账号的所有数据全部转移至当前账号
- `/trigger query` 查询自己的抽奖数据

## MCDReforged 命令
目前仅Java版玩家可使用这些命令
- `!!help` 查看MCDR专门的命令帮助
- `!!here` 广播自己的坐标并将自己高亮
- `!!info` 显示服务器信息
- `!!loc` 路标管理器，输入后即可查询具体语法
- `!!MCDR` 查看MCDR的版本信息
- `@@ <玩家名>` @某人
- `== <表达式>` 计算简单的算术表达式

## 基岩版独有命令
- `/geyser advancements` 查看进度信息
- `/geyser offhand` 切换主副手物品
- `/geyser statistics` 查看统计信息
- `/geyser tooltips` 显示或关闭高级提示框，相当于Java版的 `F3+H`
