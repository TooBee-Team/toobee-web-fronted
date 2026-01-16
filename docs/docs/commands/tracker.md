# 玩家轨迹查询

这些命令以 `/tk` 开头，用来查询玩家的位置记录。

服务器从2025年12月23日起记录所有玩家的移动轨迹，最快每半秒钟采样一次，每次记录玩家所处的维度、坐标、起始时间与原地不动的时长。位置记录并不是完全精确和连续的，而是动态采样：当玩家移动迅速，或者说坐标变化较大时（比如大于10m/s），采样会比较频繁（半秒钟一次）；当玩家移动缓慢时（小于2m/s），采样会相对稀少（几秒一次）。因此并非玩家经过的所有坐标都会被记录，但已经足够让人知道他经过了哪些地方。

此记录有多个用途：
- 追查嫌疑玩家的所经之地，用于推断其有无潜在违规行为。
- 如果机器被使用，可以推断使用者或曾经过此处的玩家，当机器损坏时尤为有用。
- 大数据可以针对玩家的运动轨迹预测一些行为，从而更好的辅助游戏。
- 玩家停留时间长的区域视为为热点地区，可以形成区域热力图，辅助服务器自动找出关键位置。

## 命令参数 {#arguments}

### `dim` 维度 {#arg:dim}

基于的维度。格式为[维度的命名空间](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:dimension)。默认为玩家当前维度。

**可选值**
- `minecraft:overworld` 主世界
- `minecraft:the_nether` 下界
- `minecraft:the_end` 末地
- `lobby:toobee` 大厅

其中 `minecraft:` 可省略。

### `pos` 坐标 {#arg:pos}

查询时的中心坐标。格式为 `x y z` [三维整数坐标](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:block_pos)。默认玩家当前坐标。

### `range` 半径 {#arg:range}

查询的范围是以维度 `dim` 内、以 `pos` 坐标为中心，半径长度为 `range` 的**正方体**。格式为1~256的整数。默认值16。

### `profile` 玩家档案 {#arg:profile}

指定追踪的一个玩家。格式为[玩家档案](https://zh.minecraft.wiki/w/%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B#minecraft:game_profile)，通常为玩家名（区分大小写）。默认为自己。

### `players` 玩家列表 {#arg:players}

指定追踪的多个玩家。格式同上，也是玩家档案。区别在于这个可以重复输入多个玩家。默认为空。

### `after` 起始时间 {#arg:after}

记录的起始时间。允许多种格式，下文详细解释。默认为空。

::: warning :warning: 注意
由于 Minecraft命令系统对特殊字符识别的限制（不能直接识别冒号），含有冒号的参数（即时间）必须用英文双引号包装起来。
:::

允许的日期格式，时间默认0时0分0秒。
- `yyyy-MM-dd` 年-月-日，如 `2025-12-23`。
- `MM-dd` 月-日，如 `12-23`，年份默认今年。

允许的时间格式（24小时制），日期默认今天。
- `"HH:mm:ss.SSS"` 时-分-秒-毫秒，如 `"12:34:56.789"`。
- `"HH:mm:ss"` 时-分-秒，如 `"12:34:56"`。毫秒默认000。
- `"HH:mm"` 时-分，如 `"12:34"`。秒默认00。

上述格式的时间日期也可以组合，中间用字符 `T` 拼接，两侧必须装引号，例如 `"2025-12-23T12:34:56.789"`，`"12-23T12:34"`。

::: warning :warning: 注意
年份数字长度必须为4，月、日、时、分、秒的长度必须为2，毫秒长度必须为3，不足者0补齐。
:::

允许的时长格式，标识从当前时刻起多久前。英文减号 `-` 开头，单位有 `d` 天、`h` 时、`m` 分、`s` 秒，皆可选且无视顺序。如 `-1d2h3m4s` 表示1天2小时3分4秒前, `-4s2h` 表示2小时4秒前。

### `before` 结束时间 {#arg:before}

记录的结束时间。格式同上。默认为空。

### `stay` 最小停留时长 {#arg:stay}

单位：秒。只显示停留时长大于等于这个秒数的记录，用于关注玩家长时间停留的区域。格式为大于等于0的整数，默认为0。

### `page` 页数 {#arg:page}

指定查询记录的页数。格式为int类型正整数。默认1。

### `size` 条数 {#arg:size}

指定一页展示多少条。格式为1~100的整数。默认16。

## 命令 {#commands}

对于可选参数，其可以省略。参数组合无视顺序。填写参数前需要先写下参数名。

### `details` 查询范围内轨迹详情 {#cmd:details}

显示一定范围内（默认当前维度、当前坐标、半径16）和时间段（默认无限制）各玩家的活动坐标、起始记录时间、停留时长。按时间降序。

可选参数：range, pos, dim, players, after, before, stay, page, size

**示例**
- `tk details`
- `tk details range 30`
- `tk details dim minecraft:overworld pos 3 -5 2 stay 10 range 30 after "2025-12-23T12:34:56.789" before -1d5h page 3 size 20`
- `tk details players Steve pos ~ ~10 ~ players Alex`

### `visit` 查询范围内访问记录 {#cmd:visit}

显示一定范围内（默认当前维度、当前坐标、半径16）和时间段（默认无限制）各玩家的最新访问时间。按最新时间降序。

可选参数：range, pos, dim, after, before, page, size

**示例**
- `tk visit`
- `tk visit range 50 size 30`
- `tk visit after "12-23"`

### `player` 查询玩家轨迹 {#cmd:player}

显示指定玩家（默认自己）的位置轨迹记录。按时间降序。

可选参数：profile, after, before, stay, page, size

**示例**
- `tk player`
- `tk player profile Steve after -12h`

### `stay` 查询范围内各玩家停留时长 {#cmd:stay}

统计一定范围内（默认当前维度、当前坐标、半径16）和时间段（默认无限制）各玩家的停留总时长。按停留时长降序。

可选参数：range, pos, dim, after, before, page, size

**示例**
- `tk stay`
- `tk stay range 100 after "12-23T10:00"`

### `page <页码>` 跳转页 {#cmd:page}

跳转到上一次查询结果的指定页码，当且仅当已经进行了一次查询后可用。