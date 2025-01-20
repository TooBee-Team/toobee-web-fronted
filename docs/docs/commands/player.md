---
lastUpdated: 2025-01-20T16:30:00+08:00
prev: false
next: false
---

# 玩家操控

这类命令以 `/player` 开头，用来操控玩家。这个功能来源于 Carpet 模组，本文参考了[官方文档相应章节](https://github.com/gnembon/fabric-carpet/wiki/Commands#player)与模组源代码。

普通玩家可以用命令操控服里所有的假人（本服假人的名字是青色的）以及自己，服务器OP（本服只有服主有）可以操控所有玩家。

::: warning :warning: 注意
本服的可用假人是固定的，请使用 `/bots` 命令查看。
:::

本文的参数命名规范与解释遵照 Minecraft Wiki 的[参数类型](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)章节，其专业名称将在中括号中标注，比如 [[integer](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#brigadier:integer)] 表示32位整数。

所有的命令均以 `/player <name>` 开头，后面跟上子命令与参数，其中 name 指代要操作的玩家的名字，一般不区分大小写。接下来逐一介绍各个参数的含义。

## `tag` 标签 {#tag}
这是本服独有命令，不属于地毯模组的功能，用来标记假人。标记的内容将会显示在玩家列表中，以 `#` 开头的灰色字处。可重复修改。

- `tag <标签>`

::: info 参数
- `[标签]` [string](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#brigadier:string) 指定标签内容，空字符串用来取消标签。注意无空格的纯英文或数字内容无需加引号，而一旦含有中文或空格则必须加英文引号。
:::

**例子**
- `player Steve tag TNT`
- `player Steve tag "三向 轰炸机"`
- `player Steve tag ""` 取消标签

## `spawn` 召唤 {#spawn}
召唤一个指定名字、与当前玩家的游戏模式相同的假人

- `spawn`
- `spawn at <坐标>`
- `spawn at <坐标> facing <旋转角>`
- `spawn at <坐标> facing <旋转角> in <维度>`

::: info 参数
- `<坐标>` [[vec3](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:vec3)] 指定假人召唤时的 xyz 三维坐标，可使用相对坐标
- `<俯仰角>` [[rotation](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:rotation)] 为俯仰角与水平角
- `<维度>` [[dimension](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:dimension)] 为维度的命名空间，如 `minecraft:overworld`, `toobee:lobby`
:::
::: tip :bulb: 提示
缺省的参数默认为玩家当前的坐标、旋转角与维度
:::

**例子**
- `/player Steve spawn at 14.9 ~-1 82.05 facing 24.6 -35 in minecraft:the_nether`

## `kill` 下线 {#kill}

**例子**
- `/player Steve kill`

## `stop` 停止 {#stop}
让假人不再移动并停止所有正在执行的动作。

## `sneak` 潜伏 {#sneak}

## `unsneak` 停止潜伏 {#unsneak}

## `sprint` 疾跑 {#sprint}

## `unsprint` 停止疾跑 {#unsprint}

## `look` 改变朝向 {#look}

- `look (north|south|east|west|up|down)`
- `look at <坐标>`
- `look <旋转角>`

::: info 参数
- `(north|south|east|west|up|down)` 严格看向朝北/南/东/西/上/下
- `<坐标>` [[vec3](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:vec3)] 指定对象看向的目标坐标，注意如果使用相对坐标，那么参照物是执行者而不是要被操控的玩家
- `<旋转角>` [[rotation](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:rotation)] 直接用来调整对象朝向，由俯仰角和水平角组成
:::

**例子**
- `/player Alex look east`
- `/player Alex look 0.0 -90.0` 和上面的效果是一样的
- `/player Alex look at 14.0 65.8 -25.7`

## `move` 移动 {#move}

::: info 参数
- `(forward|backward|left|right)` 朝前/后/左/右移动
:::

## `turn` 转动 {#turn}

::: info 参数
- `(left|right|back)` 向左/右/后转
- `<旋转角>` [[rotation](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:rotation)] 旋转一定角度
:::

## `hotbar` 选中物品 {#hotbar}
主手选中物品栏中的指定槽位，类似于PC玩家按下数字键的效果。

::: info 参数
`<槽位ID>` [1~9整数] 指定槽位ID
:::

## `use` 使用 {#use}
类似于PC玩家的右键操作，用来使用物品。

- `use`
- `use once`
- `use continuous`
- `use interval <游戏刻>`

### 动作类参数 {#action_argument}

好几个动作类命令共同使用这一套参数，遂单独拿来说。

::: info 参数
- `once` 动作执行一次，省略这个参数也具有相同效果
- `continuous` 无间隔连续执行（每刻执行一次）
- `<游戏刻>` [正整数] 每次动作执行间隔的游戏刻时长
:::

## `attack` 攻击/挖掘 {#attack}
类似PC玩家的左键操作，对着实体是攻击，对着方块是尝试挖掘。

参数见[动作类参数](#action_argument)。

::: tip :bulb: 提示
攻击行为最好不用 `continuous` 参数，否则可能不生效。反之，挖掘建议则用，这样可以保证无间隔持续挖掘。
:::

## `jump` 跳跃 {#jump}
参数见[动作类参数](#action_argument)。

## `swapHands` 主副手交换

参数见[动作类参数](#action_argument)。

## `drop` 丢弃一个物品 {#drop}

- `drop [once|continuous]`
- `drop interval <游戏刻>`
- `drop (all|mainhand|offhand)`
- `drop slot <ID>`

::: info 参数
- 一部分参数见[动作类参数](#action_argument)，使用这一部分参数后会丢弃主手对应的一个物品
- `all` 包括物品栏、盔甲栏和背包在内的所有槽位各丢弃一个物品
- `mainhand` 丢弃主手上的一个物品
- `offhand` 
- `<ID>` [0~40整数] 丢弃对应槽位ID上的一个物品。
:::

## `dropStack` 丢弃一组物品 {#dropStack}

语法和参数类似 [`drop`](#drop)，只不过是一次性丢掉整个槽位的物品。

## `mount` 乘骑
乘骑附近最近的一个实体。

- `mount`
- `mount anything`

::: info 参数
- `anything` (可选) 表示试图乘骑一切实体，无此参数则只乘骑可乘骑的实体，比如船、矿车、马、骆驼等。
:::

## `dismount` 取消乘骑

## `shadow` 投影
根据指定的玩家名召唤对应的假人，并继续执行他当前的操作。然而由于本服的假人是固定的，假人名严格区分于真玩家，这个命令在本服并没有什么卵用。
