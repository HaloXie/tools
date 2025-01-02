# Prompt Engineering Checklist

## Quick Reference

### 【必查项】避免重复造轮子 [↗ 详细说明](#avoid-duplication)

> 💡 新手提示：
>
> 1. 先搜索已有方案，包括：公司文档、代码库、技术论坛
> 2. 和有经验的同事讨论，他们可能已经解决过类似问题
> 3. 参考成功案例，理解其设计思路和实现方法

- [ ] 本迭代要解决什么问题，多问几个**为什么** [↗ 问题分析方法](#problem-analysis)

  示例问题：

  - 为什么需要使用 AI 解决这个问题？是否有更简单的方案？
  - 用户真正的痛点是什么？现有方案的不足在哪里？
  - 这个功能是否足够通用，能否被其他项目复用？

- [ ] 各实验的**MDE**是否足够？目前是否存在**优先级更高**，ROI 更高的需求？ [↗ 效率评估](#efficiency-evaluation)

  评估方法：

  - 开发成本：所需人力、时间、资源
  - 预期收益：用户规模、业务价值、技术积累
  - 维护成本：后期维护、升级优化、问题处理

- [ ] 在公司其他产品中是否存在类似的功能？可以进行代码和产品策略的**复用** [↗ 复用指南](#reuse-guide)，复用检查项：

  - 通用组件：提示模板、工具函数、测试用例
  - 业务逻辑：处理流程、验证规则、优化策略
  - 工程实践：部署方案、监控配置、应急预案

- [ ] 是否有可复用的 prompt 模板和最佳实践？[↗ 模板库](#template-library)，常用模板示例：

  ```
  # 结构化输出模板
  You are a {role}.
  Your task is to {task_description}.
  Input format:
  {input_format}
  Output format:
  {output_format}
  Constraints:
  1. {constraint_1}
  2. {constraint_2}
  Example:
  Input: {example_input}
  Output: {example_output}
  ```

### 基础检查项 - 新手必看

- 需求分析基础 [↗ 详细指南](#requirement-analysis)

  - [ ] 【P0】业务目标明确 [↗ 目标定义](#goal-definition)

    > 💡 新手提示：使用 5W2H 方法分析需求
    >
    > - What：具体要做什么
    > - Why：为什么要做
    > - Who：服务哪些用户
    > - When：什么时候完成
    > - Where：在哪些场景使用
    > - How：如何实现
    > - How much：成本预算

  - [ ]【P1】基础可行性评估 [↗ 可行性分析](#feasibility-analysis)

    - 技术评估：模型能力是否满足基本需求
    - 资源评估：开发时间和人力是否充足
    - 成本评估：预期成本是否在预算范围内

  - [ ]【P1】基础风险识别 [↗ 风险管理](#risk-management)
    - 技术风险：模型稳定性、响应时间
    - 业务风险：用户接受度、业务影响
    - 安全风险：数据安全、隐私保护

- Prompt 基础开发 [↗ 设计指南](#prompt-design)

  - [ ]【P0】 基础模板设计 [↗ 模板指南](#template-guide)

    > 💡 新手提示：从最简单的模板开始

    - 角色定义：明确设定 AI 助手的角色
    - 任务描述：清晰描述要完成的任务
    - 输出格式：指定期望的输出格式
    - 基础示例：提供简单的输入输出示例

  - [ ]【P0】 基础功能开发 [↗ 功能开发](#function-dev)
    > 💡 新手提示：先实现核心功能
    - 实现基本对话流程
    - 添加必要的输入验证
    - 处理基本的异常情况
    - 确保输出格式规范

### 进阶检查项 - 经验提升

- 需求分析进阶 [↗ 详细指南](#requirement-analysis-advanced)

  - [ ]【P1】 深入目标分析 [↗ 目标定义](#goal-definition-advanced)

    - [ ]明确核心诉求（用户需求：具体场景和痛点；业务目标：预期效果；技术要求：实现约束）
    - [ ]定义成功指标（量化指标：具体数值；质量指标：评估标准；业务指标：ROI 衡量）
    - [ ]评估优先级（业务价值：收益评估；技术可行性：实现难度；资源投入：成本评估）
    - [ ]识别限制条件（技术限制：能力边界；资源限制：时间人力；风险限制：潜在问题）

  - [ ]【P2】进阶可行性评估 [↗ 可行性分析](#feasibility-analysis-advanced)

    > 💡 提示：建立评估矩阵，量化各维度可行性

    - [ ]评估技术实现难度和限制
    - [ ]分析资源需求和成本预算
    - [ ]评估时间周期和里程碑
    - [ ]考虑合规和安全要求

  - [ ]【P2】深入风险评估 [↗ 风险管理](#risk-management-advanced)
    > 💡 提示：使用风险矩阵评估影响程度和发生概率
    - [ ]识别技术风险（模型能力：是否满足任务要求；响应稳定性：输出一致性；性能瓶颈：系统限制）
    - [ ]评估业务风险（用户接受度：用户体验评估；业务影响：流程适配性；竞争风险：市场分析）
    - [ ]分析安全风险（数据安全：敏感信息保护；隐私安全：个人信息保护；合规风险：法规要求）
    - [ ]制定风险应对策略（预防措施：风险预防；监控方案：风险监控；应急预案：风险应对）

- Prompt 进阶设计 [↗ 设计指南](#prompt-design-advanced)

- [ ]【P1】 架构设计 [↗ 架构指南](#architecture-guide)

  - [ ]选择处理模式（提示模式：few-shot/zero-shot/CoT；任务分解：单步/多步链式；交互设计：单轮/多轮对话）
  - [ ]设计处理链路（上下文管理：历史维护/状态传递；模板设计：变量插值/动态生成；结果处理：格式规范/后处理）
  - [ ]规划扩展性（模板复用：场景迁移/参数配置；版本管理：模板迭代/效果跟踪；能力扩展：新增场景/功能增强）
  - [ ]优化设计方案（提示策略：减少 token/提高准确性；模板结构：清晰简洁/易于维护；处理流程：异常处理/降级方案）

- 基础验证测试 [↗ 测试指南](#verification)

  - [ ]【P0】 基础功能测试 [↗ 功能测试](#functional-testing)

    > 💡 新手提示：先验证核心功能

    - 基本对话：测试基本问答是否正常
    - 格式验证：检查输出格式是否符合要求
    - 异常处理：验证基本错误处理是否生效
    - 简单场景：覆盖主要使用场景

  - [ ]【P1】 基础性能验证 [↗ 性能评估](#performance-testing)
    > 💡 新手提示：关注基本性能指标
    - 响应时间：单次请求的响应速度
    - Token 用量：单次对话的 Token 消耗
    - 内存占用：程序运行的资源占用
    - 基本并发：简单并发请求测试

- 基础部署监控 [↗ 监控指南](#deployment)

  - [ ]【P0】 基础监控项 [↗ 监控方案](#monitoring-system)

    > 💡 新手提示：先监控核心指标

    - 可用性监控：服务是否正常响应
    - 错误监控：异常情况统计
    - 性能监控：基本响应时间
    - 成本监控：Token 使用量

  - [ ]【P1】 基础告警配置 [↗ 告警配置](#alert-config)
    > 💡 新手提示：设置必要的告警
    - 服务告警：服务不可用告警
    - 错误告警：严重错误告警
    - 性能告警：严重超时告警
    - 成本告警：成本超限告警

- 基础优化改进 [↗ 优化指南](#optimization)

  - [ ]【P1】 基础性能优化 [↗ 性能提升](#performance-optimization)
    > 💡 新手提示：从简单优化开始
    - 提示精简：减少无效内容
    - 结果缓存：缓存常用结果
    - 超时处理：添加超时机制
    - 错误重试：简单重试策略

### 进阶检查项 - 经验提升

3.  验证测试进阶 [↗ 测试指南](#verification-advanced)

    - [ ]【P1】 深入功能测试 [↗ 功能测试](#functional-testing-advanced)

      > 💡 提示：全面的测试覆盖

      - [ ]核心功能测试（提示效果：输出质量验证/一致性测试；场景覆盖：典型场景/边界场景；交互验证：对话完整性/上下文连贯性）
      - [ ]边界条件测试（输入边界：长度限制/特殊格式；状态边界：上下文限制/历史长度；异常边界：错误处理/超时处理）
      - [ ]异常处理测试（模型异常：响应超时/格式错误；系统异常：资源不足/服务中断；业务异常：场景不匹配/规则冲突）
      - [ ]准确性评估（输出质量：专业度/完整性；一致性：多轮稳定性/跨场景一致性；规范性：格式标准/风格统一）

    - [ ]【P2】深入性能测试 [↗ 性能评估](#performance-testing-advanced)
      > 💡 提示：系统性能极限评估
      - [ ]响应时间测试（首次响应：冷启动延迟/预热优化；完整响应：生成耗时/传输延迟；交互体验：往返延迟/流式响应）
      - [ ]并发能力测试（负载测试：阈值评估/稳定性验证；压力测试：极限承载/恢复能力；容量规划：资源评估/扩展建议）
      - [ ]资源使用评估（计算资源：CPU 利用率/内存占用；网络资源：带宽使用/连接数；存储资源：缓存效率/空间占用）
      - [ ]Token 效率分析（使用分析：消耗统计/使用分布；效率优化：提示精简/上下文压缩；成本优化：批处理/缓存策略）

4.  部署监控进阶 [↗ 监控指南](#deployment-advanced)

    - [ ]【P1】 监控体系建设 [↗ 监控方案](#monitoring-system-advanced)

      > 💡 提示：建立完整的监控体系

      - [ ]核心指标监控（性能监控：延迟分布/吞吐趋势；质量监控：准确率/满意度；资源监控：使用率/成本分析）
      - [ ]日志体系建设（系统日志：状态跟踪/性能分析；错误日志：异常诊断/问题定位；业务日志：行为分析/效果评估）
      - [ ]性能监控实现（实时监控：即时指标/状态检查；趋势分析：性能变化/容量预测；告警机制：阈值监测/智能预警）
      - [ ]业务指标跟踪（使用分析：场景覆盖/调用趋势；效果评估：目标达成/价值实现；反馈跟踪：问题收集/改进优化）

    - [ ]【P2】告警体系优化 [↗ 告警配置](#alert-config-advanced)
      > 💡 提示：建立智能告警体系
      - [ ]告警指标设置（性能告警：延迟超标/吞吐下降；质量告警：准确率异常/格式错误；资源告警：负载过高/成本超限）
      - [ ]监测规则配置（规则定义：阈值设置/判断逻辑；规则联动：组合条件/场景联动；抑制优化：告警收敛/优先级控制）
      - [ ]分级机制建立（等级定义：影响评估/优先级划分；升级流程：处理链路/责任分配；时限管理：响应要求/处理跟踪）
      - [ ]响应流程制定（通知机制：消息分发/确认反馈；处理流程：标准步骤/协作机制；跟踪机制：进度监控/效果验证）

5.  持续优化进阶 [↗ 优化指南](#optimization-advanced)

    - [ ]【P1】 深入性能优化 [↗ 性能提升](#performance-optimization-advanced)

      > 💡 提示：系统性能持续优化

      - [ ]响应优化（启动时间：冷启动优化；处理耗时：减少等待；交互延迟：往返优化）
      - [ ]并发优化（并发处理：提升吞吐；资源调度：优化分配；负载均衡：压力分散）
      - [ ]资源优化（内存使用：减少占用；CPU 利用：提高效率；缓存利用：优化命中）
      - [ ]Token 优化（提示精简：减少冗余；上下文优化：状态压缩；缓存复用：重用结果）

    - [ ]【P2】成本优化策略 [↗ 成本控制](#cost-optimization-advanced)
      > 💡 提示：系统成本精细化管理
      - [ ]Token 优化（提示压缩：减少字数；结果控制：限制长度；批处理：请求合并）
      - [ ]资源优化（模型选择：适配规格；并发控制：调度优化；资源回收：及时释放）
      - [ ]缓存优化（热点缓存：高频复用；结果缓存：重复利用；策略优化：提高命中）
      - [ ]效果评估（成本分析：投入产出；优化效果：提升程度；趋势预测：成本走向）

## 参考资料

### 需求分析指南 {#requirement-analysis}

1. 目标定义 {#goal-definition}

```sql
[Previous content about business goals]
```

2. 可行性分析 {#feasibility-analysis}

```sql
[Previous content about feasibility]
```

[Continue with all detailed content organized in the reference section...]

### Prompt 设计指南 {#prompt-design}

1. 架构指南 {#architecture-guide}

```sql
# 设计决策指南
[Previous content about architecture design]
```

[Continue with all design-related content...]

[Other sections follow the same pattern, moving all detailed content to reference section with proper anchors]

### 实践案例 {#case-studies}

1. 基础对话优化案例

```sql
# 场景：客服问答优化
原始 Prompt：
You are a customer service assistant. Help users with their questions.
When users ask questions, provide detailed and helpful answers.
Be polite and professional in your responses.

问题：
- 响应冗长
- Token 使用效率低
- 回答不够精准

优化 Prompt：
You are a customer service assistant.
Provide concise, accurate answers focusing on:
1. Direct solution
2. Key information
3. Next steps if needed
Format: [Solution][Key Info][Next Steps]

改进效果：
- Token 效率提升 40%
- 响应时间减少 50%
- 用户满意度提升 25%

经验总结：
1. 明确输出格式
2. 聚焦核心信息
3. 结构化响应
```

2. 多步骤任务案例

```sql
# 场景：文档摘要生成
需求：从长文档生成结构化摘要

解决方案：
Step 1: 文档分段
Prompt 1:
You are a document analyzer.
Divide the input text into logical sections.
Format: [Section 1]...[Section N]

Step 2: 关键信息提取
Prompt 2:
Extract key information from each section.
Focus on: main ideas, supporting facts, conclusions.
Format: [Main Point][Facts][Conclusion]

Step 3: 摘要生成
Prompt 3:
Generate a structured summary using the extracted information.
Format:
- Overview
- Key Points
- Conclusions

实现细节：
1. 使用 Chain 模式串联处理
2. 添加中间结果验证
3. 实现并行处理优化

效果评估：
- 准确率：95%
- 平均处理时间：3s
- Token 使用效率：85%
```

3. 性能优化案例

```sql
# 场景：高并发对话系统
问题：
- 响应延迟高
- 成本过高
- 质量不稳定

优化方案：
1. Prompt 优化
   Before:
   "Generate a detailed response about {topic}"
   After:
   "Provide key points about {topic}. Max 3 points."

2. 架构优化
   - 实现结果缓存
   - 添加预处理层
   - 使用批处理模式

3. 监控优化
   - 添加性能指标
   - 实现自动告警
   - 优化降级策略

效果对比：
指标      | 优化前  | 优化后  | 提升
响应时间   | 2s     | 0.5s   | 75%
成本      | $100/d | $40/d  | 60%
准确率    | 90%    | 95%    | 5%
```

### 常见问题 {#faq}

1. Prompt 设计问题

Q: 如何处理复杂的多步骤任务？
A: 推荐以下方法：

- 任务分解：将复杂任务拆分为多个简单步骤
- 链式处理：使用 Chain 模式串联各步骤
- 中间验证：每个步骤添加结果验证
- 错误处理：实现完整的异常处理机制
  ↗ 参考：[多步骤任务案例](#multi-step-case)

Q: 如何提高 Prompt 的稳定性？
A: 关键措施：

- 添加约束条件
- 使用结构化输出
- 提供明确示例
- 实现输入验证
  ↗ 参考：[稳定性优化指南](#stability-guide)

2. 性能优化问题

Q: 大规模处理时如何控制成本？
A: 建议采用：

- 实现结果缓存
- 优化 Token 使用
- 使用批处理模式
- 实现智能降级
  ↗ 参考：[成本优化指南](#cost-optimization)

Q: 如何处理长文本输入？
A: 可以通过：

- 文本分段处理
- 关键信息提取
- 并行处理优化
- 结果合并策略
  ↗ 参考：[长文本处理指南](#long-text-guide)

3. 质量保证问题

Q: 如何保证输出质量的一致性？
A: 建议措施：

- 明确质量标准
- 添加输出验证
- 实现自动测试
- 建立质量监控
  ↗ 参考：[质量控制指南](#quality-control)

Q: 如何处理异常情况？
A: 关键点：

- 完整的异常分类
- 清晰的处理策略
- 友好的错误提示
- 有效的恢复机制
  ↗ 参考：[异常处理指南](#error-handling)

4. 实践经验问题

Q: 如何选择合适的模型？
A: 考虑因素：

- 任务复杂度
- 性能要求
- 成本预算
- 质量要求
  ↗ 参考：[模型选择指南](#model-selection)

Q: 开发过程中如何进行效果评估？
A: 建议方法：

- 设置明确指标
- 进行对比测试
- 收集用户反馈
- 持续优化改进
  ↗ 参考：[效果评估指南](#evaluation-guide)
