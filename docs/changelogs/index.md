# 2 期

## 近期计划 {#plan}

以下列出的是近两三个月内的安排，优先级递减，但实际执行时顺序可能有所调整。

0. 原QQ群的群主号被永久封禁，计划重建新群。并要求所有白名单玩家重新填写联系方式。
1. 试图修复猪灵偶尔不交易的bug（这已经是第四次修了，我太难了）
2. 村民优化，这个比较重量级，我可能会把它作为我的数学模型课程论文的论题。这一项预计至少得一个半月。
3. 可能考虑用 Rust 写一个独立的web服务器用来处理一些不需要从游戏直接获取的数据。

## 长期计划 {#prospect}

先暂时列出大饼，这些至少要到本年度7月份以后才能执行了。不一定保证完成，而且需要较长的周期，可以作为服务器未来发展的路线参考。

1. 重构镐和剑的抽奖
2. 进一步开源部分web项目
3. 网站展示游戏内聊天记录
4. 网站增加登录功能
5. 玩家可以通过网站发表评论、建议或漏洞报告
6. 服主可以在网站内发布提案和专门的计划列表（而不是目前一个简陋的页面）
7. 可以通过网站查看玩家统计数据
8. 考虑对QQ或微信群机器人的支持
9. 增加空岛维度
10. 在B站提供新人入门指南视频。

## 0.2.8
2025-05-06 (正在进行中)

1. 假人不再会触发*辛勤的建造者*成就
2. ViaVersion 不再产生发包限制
3. 给予管理员 techxun 以只读身份进入服务器的权限
4. 游戏运行时开启 JFR 记录器
5. 启用 Java 24 的对象头压缩功能
6. 客户端整合包更新至 1.21.5
7. 修复了服务器内存溢出崩溃的bug（1.21.5的漏洞，见[MC-296337](https://bugs.mojang.com/browse/MC-296337)）
8. 服务器意外崩溃前将自动记录栈追踪报告以便分析
9. 新增 `/message_filter` 命令以自动屏蔽非白名单在服内发送的消息，以防直播间被不怀好意的人爆破

## 0.2.7
2025-4-18

1. 增加防御以抵御恶意DDOS攻击
2. 把官网的后端 web 服务器内置到游戏模组中
3. 试图修复模组更新MCDR插件的一些问题
4. 将服务器及其模组、数据包等更新至1.21.5
5. 删减一些多余区块
6. 启用地毯的仙人掌扳手功能
7. 将优化模组从部分Kotlin代码转为纯Java编写
8. 更换了服务器贴图以跟网站一致
9. Java版本更新至24，处理了Java需获得特权以调用libpcap库的问题，[此处参考](https://www.cnblogs.com/chenxueqiang/p/13653623.html)
10. 拍摄了新的卫星地图，将将其展示在网页上，见首页。
11. 首页提供了指向群友制作的望舒仙岛网站的链接。
12. (*第4项后*) 修复了成就背景错误显示的bug
13. (*第4项后*) 修复了星币名称错误显示的bug

## 0.2.6
2025-04-09

1. (实验性) 制作了[服务端模组更新的MCDR插件](https://github.com/TooBee-Team/Resources-Updater)，不过还有些问题。
2. 从零重构了后端 Web 服务器，采用 WebSocket 协议实时更新主页数据，并可以显示MC服务器的进出流量了。
3. 杀死女巫和潜影贝将不被记录。
4. 创造服的地址改为 `2ob.top:45717`
5. 更改了监控面板的地址，见主页
6. 将 ViaVersion 的发包上限上调至 400 ppa
7. 增加了[区块备份](https://github.com/Passion-Never-Dissipate/Chunk_BackUp) MCDR 插件
8. 增加了[Bedrock Liteloader Handler](https://github.com/Elec-Glacier/liteloader_handler) MCDR 插件，使得基岩版玩家可以使用 MCDR 指令，但可能回退
9. 迎春活动结束
10. 修复了非白名单玩家可签到的bug
11. 修复了无法触发 *辛勤的建造者Ⅲ* 成就的bug
12. 修复了玩家在末地掉入虚空时意外触发 *向死而生* 成就的bug
13. 从QQ群帖子搬迁部分更新日志至此，并列出未来计划。

## 0.2.5
2025-03-09

1. 增加[成就系统](/docs/advancements)。
2. 展开迎春活动，签到自动领取奖励。
3. 新设的奖品均注册到数据库，且部分不可堆叠物品设有序列号可查。
4. 更新了客户端模组至 `1.21.4-v3`，并制作了[客户端整合包升级工具](https://github.com/TooBee-Team/Client-Modpacker)。
5. 点击音符盒将被记录。
6. 新增规定：修建村民工程或某些机器前需上报管理员。
7. 挂机玩家计算积分时按10%权重计入。
8. 活动期间潜伏挖掘以触发连锁挖矿。

## 0.2.4
2025-02-05

1. 服务器地址更改为2ob.top，基岩版和Java版均使用默认端口号
2. 官网地址改为https://toobee.top
3. 官网可以看到服务器的实时信息了（借助Spring Boot Web服务器和Unix Sock通信实现）
4. 修复了猪灵交易所无法工作的bug
5. 捡起一些垃圾物品的敌对生物仍然会消失，降低伪和平时的额外卡顿
6. 假人不再能抽奖，但目前仍可以被计算积分
7. 长时间挂机不动的（灰名）玩家，积分计算倍率降为十分之一
8. 修复了玩家进服和添加白名单时的某些bug
9. 筹划春节（或者说元宵节）活动奖品
10. 修复了抽奖时的错误或重复的提示信息。

## 0.2.3
2025-01-19

汇总了近一个月的内容，包含许多重磅更新
1. 将服务器版本更新至 1.21.4
2. 发行了本服专用[整合包](https://modrinth.com/modpack/toobee-client)
3. 搭建了本服官网，目前暂定为https://toobee.top:59524
4. 增加了命令脚本功能，见官网有关文档
5. 增加了对Where is it模组的服务端支持
6.. 调整了一系列帮助文档
7. Java 采用 Graalvm 虚拟机，并不再使用docker容器启动服务端
8. 调整了生存区的出生点位置防止卡住或落空
9. 修复了某些情况在大厅没有变为冒险模式的bug
10. 对1.21以上的版本向下兼容
11. Java版与基岩版现在皆可用默认端口连接服务器了
12. 服务器更新时删减了大量区块
13. 发布了新的卫星地图
14. 增加了ScalableLux与vmp优化模组
15. 修正了监控面板的服务器名称
16. 放置液体将不再计入积分
17. 元旦临时改了特性：死亡不掉落与幻翼不生成
18. 可以使用/me命令了
19. 更新了MCDR

## 0.2.2
2024-12-20

此次更新分两次进行，本次注重性能优化与细节调整
1. 更新了系统版本、MCDR版本、Java版本(23)
2. Java 虚拟机采用 ZGC 分代垃圾回收，加强内存释放的性能
3. 针对猪灵交易时做了针对性优化
4. 修复了优化模组的某些内存泄漏问题
5. 硬盘换为M.2固盘
6. 搭建了服务器数据记录网站，包含玩家在线数据、性能追踪等等，感兴趣的在群里询问
7. 启用了GCA中关于假人的bot命令
8. 增加了对基岩版1.21.51的支持

## 0.2.1
2024-12-02

1. 将优化模组单独拆了出来，并开源
2. 加大了优化力度，现在堆叠猪灵和监守者都会被优化
3. 假人和未睡觉的挂机玩家均不被计入要求睡觉的比例中
4. 现在只有放置方块和用桶放置完整液体时才会被计入“方块放置”积分项中，诸如在树叶中放水不被计入
5. 睡觉跳过夜晚的比例下调至40%
6. 加入了GCA模组
7. 修复了快捷潜影盒崩服的bug
8. 服务器内存上限扩大至8G
9. 红石改变方块状态再次不被记录

# 0.2.0
2024-11-20

1. 给服务器换回今年上半年的服务商，并将数据迁移至他的机子上
2. 将生存服版本更新到了1.21.3（工作量较大）
3. 将创造服版本更新到了1.21.3，归功于管理员
4. 亲自更新了快捷潜影盒的版本，但客户端没更新
5. 给servux模组提了一个issue
6. 恢复服务器部分被炸毁的地方
7. 启用了QQ频道，用来专门讨论一些事情