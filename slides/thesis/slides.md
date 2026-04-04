---
theme:  ..\..\theme\slidev-theme-frankfurt
colorSchema: auto
author: agiantii
date: 2025/12/27
transition: slide-left
title: 浙江传媒学院开题答辩
---

<br>

# 浙江传媒学院开题答辩


<br>

##  agiantii
<br>

#### 媒体工程学院
<!-- <img src="./assets/example/image.png" 
class="bottom-4 opacity-80 w-60% mx-auto block"
alt="alt text"/> -->
<!-- <div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div> -->
<!-- 居中 -->


<br>


---
section: 选题缘起
---
dd

<Toc />
---

# 选题介绍

<Item title="课题名称">
基于Slidev的智能幻灯片协作平台设计与开发
</Item>

- [介绍](http://ppt.agiantii.top)
<br>
<Item title="Slidev">
[Slidev] (slide + dev, /slaɪdɪv/) 是一个为开发者设计的基于 Web 的幻灯片制作工具。它帮助您以<span v-mark.circle.orange="1"> Markdown </span>的形式专注于编写幻灯片的内容，并制作出具有<span v-mark.underline.red="2">交互式演示功能的、高度可自定义</span>的幻灯片。

</Item>

- [Slidev-guide](https://cn.sli.dev/guide/)

---

# 选题意义
- 为什么选择用markdown制作PPT
  - 传统PPT制作较为复杂
  - 利用基于markdown的slidev简化制作流程,让制作者专注于内容本身
  - 同时相对于latex beamer等工具，markdown语法更为简单易用,且基于vue的slidev有更好的扩展性
- 为什么需要协作平台
  - 组会、团队项目等场景下，多人协作制作PPT，这样文本资源的统一管理和版本控制就显得尤为重要，同时因为一般的ppt制作也不需要git等复杂的版本控制工具，所以需要一个简单易用的协作平台
  - 同时将mardown所需要的图片、主体模板等资源进行统一放在云端上管理，方便多人使用
  - 利用AI能提升制作ppt的效率
- 市面上已经有了许多基于AI的ppt制作工具，做这个有什么意义
  - 无法方便地进行多人协作
  - 无法方便地进行文本资源的统一管理和版本控制
  - 诸如kimi、豆包等工具，所提供的模板和功能较为有限，有些时候需要自己的模板才方便，比如组会、毕设答辩报告等模板

---
section: 研究内容
---

# 国内研究现状
国内幻灯片制作工具领域的研究早期聚焦于传统PPT工具的功能拓展，如Microsoft PowerPoint的本土化模板开发、插件适配等，解决了通用场景下的基础制作需求，但未突破操作复杂度高、轻量化标记语言支持不足的核心问题。随着Markdown技术普及，国内研究逐步关注Slidev、Marp等轻量化框架，核心集中于单机版功能优化，如LaTeX公式渲染适配、本地资源管理等，尚未针对团队协作场景开展深度研究。

---


# 国外研究现状
国外轻量化幻灯片工具研究起步较早，Reveal.js、Marp、Slidev等开源框架均源于国外社区，核心成果集中于Markdown语法与幻灯片元素的映射优化，实现了LaTeX公式、代码高亮、Mermaid流程图的原生渲染，其中Slidev凭借插件化架构和热重载特性成为技术人员主流选择。

---


# 研究目标
本研究旨在基于Slidev框架设计并开发一款支持多人协作的智能幻灯片平台，整体目标是实现

- 协作制作
- 云端管理
- AI辅助
- 格式兼容

--- 
section: md渲染ppt的优势
--- 

# 代码高亮
<br>
```cpp 
int main(){
  int a,b;
  cin>>a>>b;
  cout<<a+b;
  return 0;
}
```

---

# mermaid 
<div class="grid grid-cols-4 gap-5 pt-4 -mb-6">
```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

```mermaid {scale: 0.5, alt: 'A simple sequence diagram'}
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction
```
</div>

--- 

# $latex$

$\LaTeX$ is supported out-of-box. Powered by [$\KaTeX$](https://katex.org/).

<div h-3 />

Inline $\sqrt{3x-1}+(1+x)^2$

---

# Shiki Magic Move

````md magic-move {lines: true}
```ts {*|2|*}
// step 1
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
```

```ts {*|1-2|3-4|3-4,8}
// step 2
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
```

```ts
// step 3
export default {
  data: () => ({
    author: {
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
  })
}
```

Non-code blocks are ignored.

```vue
<!-- step 4 -->
<script setup>
const author = {
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
}
</script>
```
````

---

# Clicks Animations

You can add `v-click` to elements to add a click animation.

<div v-click>

This shows up when you click the slide:

```html
<div v-click>This shows up when you click the slide.</div>
```

</div>

<br>

<v-click>

The <span v-mark.red="3"><code>v-mark</code> directive</span>
also allows you to add
<span v-mark.circle.orange="4">inline marks</span>
, powered by [Rough Notation](https://roughnotation.com/):

```html
<span v-mark.underline.orange>inline markers</span>
```

</v-click>

<div mt-20 v-click>

[Learn more](https://sli.dev/guide/animations#click-animation)

</div>

---
section: 技术方案
---
# ppt渲染
- 初步方案
  - 由于slidev依赖于vue，目前选择用用后端渲染，返回静态页面的形式进行展示
  通过docker容器化部署slidev，利用其内置的命令行工具进行ppt的渲染
- 备选方案
  - 考虑到服务器性能问题，后续可考虑将渲染任务分发到用户本地进行
  - 本地渲染，平台提供团队协作、AI辅助、资源管理等功能
---

# 多人协作制作

多人协作功能：采用“前端WebSocket+后端增量同步”的方案实现实时协同编辑，支持多用户同时在线编辑同一幻灯片文档，实时同步内容变更，确保各端数据一致性。


---

# 多人协作制作具体方案
<div class="w-80%">
```mermaid
sequenceDiagram
    participant U1 as 用户1（编辑者）
    participant U2 as 用户2（协作者）
    participant FE1 as 前端（用户1）
    participant FE2 as 前端（用户2）
    participant WS as WebSocket服务
    participant BE as 后端服务
    participant Redis as Redis缓存
    participant DB as 数据库（存储全量+增量记录）
    
    %% 前置：用户上线，WebSocket注册协作者信息到Redis
    U2->>FE2: 打开PPT协作页面
    FE2->>WS: 注册在线状态（文档ID+用户ID）
    WS->>Redis: 存储在线协作者列表（PPT007: [U001, U002]）
    
    %% 第一步：用户1编辑并发送变更
    U1->>FE1: 编辑PPT内容
    FE1->>FE1: 提取增量变更数据（仅变更部分）
    FE1->>WS: 实时推送增量变更数据
    WS->>BE: 转发变更数据
    
    %% 第二步：后端处理变更（先缓存，后持久化）
    BE->>Redis: 1. 缓存最新增量变更；2. 更新PPT全量快照（热点数据）
    BE->>DB: 异步持久化增量记录+更新全量数据（保证数据持久化）
    BE->>Redis: 获取该PPT的在线协作者列表
    Redis->>BE: 返回列表 [U001, U002]
    
    %% 第三步：后端精准广播变更
    BE->>WS: 按协作者列表广播增量变更数据
    WS->>FE2: 推送增量变更数据（仅推送给在线协作者）
    
    %% 第四步：用户2端实时刷新（优先读缓存）
    FE2->>Redis: （可选）拉取PPT最新全量快照（缓存命中，快速响应）
    Redis->>FE2: 返回最新全量快照+增量数据
    FE2->>FE2: 基于变更数据更新页面
    FE2->>U2: 实时展示最新PPT内容
    Note over U1,U2: 多用户端数据保持一致，Redis提升响应速度
```
</div>

---

# 云端资源管理
云端资源管理：基于云存储服务（基于OSS）实现幻灯片文档及相关资源的集中存储与管理，支持版本控制、权限管理及资源共享，方便团队成员统一访问与使用。

<!-- <div class="w-40%">
```mermaid
graph TB
    subgraph 底层存储层
        OSS[OSS云存储服务] -->|存储载体| Storage[PPT文档/素材资源存储]
    end
    
    subgraph 核心管理层
        Storage --> VCS[版本控制<br/>（历史版本/回滚）]
        Storage --> PM[权限管理<br/>（角色/访问范围）]
        Storage --> RS[资源共享<br/>（团队/外链）]
    end
    
    subgraph 上层应用层
        VCS & PM & RS --> UA[团队统一访问]
        UA --> CE[提升协作效率]
        UA --> DS[保障数据安全]
    end
```
</div> -->

---

# AI辅助功能
利用现有API，配置对应知识库，将slidev文本内容生成、图片生成等功能进行AI化，提升幻灯片制作效率。
```mermaid
flowchart LR
    start[开始：用户发起AI辅助请求] --> input[用户操作<br/>1. 选择PPT模板<br/>2. 输入制作主题]
    
    %% AI核心处理环节
    input --> AI[调用AI API（匹配专属知识库）]
    AI --> content[AI生成PPT内容<br/>（文本/排版/模板适配）]
    AI --> judge{是否需要AI生图配图?}
    
    %% AI生图+OSS存储分支
    judge -- 是 --> img_gen[AI生成配图（按主题/风格）]
    img_gen --> oss[上传图片到OSS云存储]
    oss --> url[OSS返回图片访问URL]
    url --> md_pre[将图片URL嵌入Markdown格式]
    
    %% 无需生图分支
    judge -- 否 --> md_pre[仅整理文字内容为Markdown格式]
    
    %% 最终输出
    content & md_pre --> merge[整合PPT内容+Markdown资源]
    merge --> render[返回给前端供Slidev的md渲染]
    render --> end1[AI辅助生成完成，用户可编辑/预览]
```
---
section: 结语
layout: center
class: "text-center"
---
## $Thanks$
