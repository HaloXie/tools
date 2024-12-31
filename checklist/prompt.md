### 【开发前】

- [ ] 本迭代要解决什么问题，多问几个**为什么**
- [ ] 各实验的**MDE**是否足够？目前是否存在**优先级更高**，ROI 更高的需求？
- [ ] 在公司其他产品中是否存在类似的功能？可以进行代码和产品策略的**复用**，减少重复造轮子

### 【开发中】

- [ ] 是否存在重复工作量
- [ ] 是否存在频繁更新的可能性
  - [ ] 是否需要考虑独立配置
  - [ ] 是否需要保留 Prompt 版本
- [ ] 是否存在指定模型、参数
  - [ ] 是否指定账号、指定分组
  - [ ] 是否指定灰度比例
  - [ ] 是否存在模型性能问题，比如 Gmini 的模型存在性能瓶颈虽然他在图片题上优胜于 4o
- [ ] 是否经过 claude 等其他先进模型测算和精校、可能被认为攻击从而导致被拦截
  ```
  "message":"nodejs.Error: gpt-4mn-iii-ncus 请求chatGpt失败:{\"message\":\"The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To learn more about our content filtering policies please read our documentation: https://go.microsoft.com/fwlink/?linkid=2198766\",\"type\":null,\"param\":\"prompt\",\"code\":\"content_filter\",\"status\":400,\"innererror\":{\"code\":\"ResponsibleAIPolicyViolation\",\"content_filter_result\":{\"hate\":{\"filtered\":false,\"severity\":\"safe\"},\"jailbreak\":{\"filtered\":true,\"detected\":true},\"self_harm\":{\"filtered\":false,\"severity\":\"safe\"},\"sexual\":{\"filtered\":false,\"severity\":\"safe\"},\"violence\":{\"filtered\":false,\"severity\":\"safe\"}}}}\n    at Helper.chatgpt (/Users/justin/Desktop/solvely-public/app/extend/helper.js:286:13)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n
  ```
  ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35c1daa8-34d2-4707-8a20-3c54356e4a7b/e00468ea-8d2d-47a6-9922-b01c18708af6/image.png)
  ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35c1daa8-34d2-4707-8a20-3c54356e4a7b/856addc2-8793-407f-809a-e42ec7afef17/image.png)
- [ ] 提供的内容是否需要多模态、内容的准确性是否需要二次判断
  - [ ] 是否会存在 URL 地址的情况，可以尝试让 GPT 自行判断。注意 URL 地址可以被访问到
    - DEMO
      ```sql
      1. Carefully analyze the given question and its corresponding answer. The question may be presented as text content or as text with an accompanying URL.
      2. If a URL is provided, determine whether it needs to be accessed to fully understand the question. If necessary, load and analyze the content at the URL.
      ```
- [ ] 是否考虑多语言，建议直接指定具体语言，而不是让 GPT 自己判断
  - DEMO
    ```sql
    Rewrite the solution in a detailed style: Include thorough explanations, full derivations, and comprehensive coverage of concepts and formulas.
    Ensure that any tables included in the original solution are retained in the rewritten version.
    Here is my original solution:
    {originalAnswer}
    Present your solution in the original format without including information beyond the solution itself. Prepend each original title with three hashtags, e.g., ### Step X or ### Final Answer or ### Answer. Answer in {toLanguage}.
    ```
  - [ ] 是否存在指定内容需要再后端做二次判断，如果 “Final Answer” 等，最好使用特殊字符串，减少 GPT 识别误差
    <aside>
    💡
    
    识别误差包含带有传入内容包含 ### 等输出字符，需要额外关注
    
    </aside>

- [ ] 是否考虑流式、非流式、Assistant 等情况
  - [ ] 是否需要拆分 system、user prompt
- [ ] 输出的内容是否有格式要求比如 JSON、Markdown、Html、Latex 等，需要给定强格式说明且注意最好是强调一定是指定格式且不要自定义扩展字段
  - DEMO
    ```sql
    5. Format your response in the following JSON structure:

    {
      "questions": [
        {
          "question": "Your first generated question"
        },
        {
          "question": "Your second generated question"
        },
        {
          "question": "Your third generated question"
        }
      ]
    }

    CRITICAL REQUIREMENTS:
    - Strictly adhere to the provided JSON structure.
    - Do not add any additional properties or fields to the JSON.
    - The "questions" array must contain exactly 3 elements, no more and no less.
    - Each question should be a string value for the "question" key.
    - Do not include answers or any other information beyond the questions themselves.
    ```
- [ ] 输出的内容是否存在多小问等
  - DEMO
    ```sql
    4. Based on both the question and the answer, generate exactly three insightful questions that:
       - Help reinforce understanding of the main concept
       - Address potential misconceptions or common errors
       - Explore related ideas or applications of the concept
       Important: Each question should be focused on a single aspect or concept. Do not include multiple sub-questions within a single question.
    ```

### 【上线后】

- [ ] Token 统计
- [ ] 日志记录
