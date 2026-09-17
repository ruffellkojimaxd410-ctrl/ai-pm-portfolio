/* ==========================================================================
   站点内容配置 —— 改这一个文件即可更新整站内容
   --------------------------------------------------------------------------
   把下面的占位内容替换成你自己的信息即可。
   ========================================================================== */

const SITE = {
  // 基本信息
  name: "你的名字",
  nameEn: "Your Name",
  title: "AI 产品经理",
  eyebrow: "AI 产品经理 · 求职中",
  tagline: "用 AI 打造真正好用的产品。",
  github: "https://github.com/your-github-username",   // 👈 改成你的 GitHub 主页
  email: "yourname@example.com",                        // 👈 改成你的邮箱

  // 关于我
  about: "我是一名专注于 AI 领域的产品经理，相信好的产品源于对用户与技术的双重理解。这里收录了我的项目作品与技能，欢迎了解。",

  // 关于我 —— 数据亮点（数字 + 标签）
  highlights: [
    { num: "N+", label: "AI 项目经验" },
    { num: "N+", label: "产品从 0 到 1" },
    { num: "N+", label: "行业方向" },
  ],

  // 项目列表 —— 每个项目点击后跳转到 GitHub
  // 字段：title 标题 / category 分类 / desc 描述 / tags 标签 / github 链接 / emoji 封面图标 / color 封面底色
  projects: [
    {
      title: "AI 知识库问答助手",
      category: "LLM 应用 · RAG",
      desc: "基于大模型与检索增强（RAG）构建的企业知识库问答产品，支持多文档、多轮对话与引用溯源。",
      tags: ["LLM", "RAG", "Prompt", "产品设计"],
      github: "https://github.com/your-github-username/your-repo",
      emoji: "🤖",
      color: "#e8f1fb",
    },
    {
      title: "AI Agent 工作流平台",
      category: "Agent · 自动化",
      desc: "面向非技术用户的 Agent 编排平台，通过可视化工作流让业务团队自助搭建 AI 自动化流程。",
      tags: ["Agent", "工作流", "低代码", "用户研究"],
      github: "https://github.com/your-github-username/your-repo",
      emoji: "⚙️",
      color: "#eef2f7",
    },
    {
      title: "数据分析 · 智能洞察工具",
      category: "数据 · AI 分析",
      desc: "用自然语言查询数据并自动生成洞察报告，降低数据分析门槛，帮助团队快速做决策。",
      tags: ["NL2SQL", "数据分析", "可视化"],
      github: "https://github.com/your-github-username/your-repo",
      emoji: "📊",
      color: "#e6edf7",
    },
  ],

  // 技能 —— 按分类分组
  skills: [
    {
      group: "AI 能力",
      items: ["LLM / 大模型", "Prompt Engineering", "RAG", "Agent", "AI 评测 / Evaluation", "AI 应用落地"],
    },
    {
      group: "产品能力",
      items: ["需求分析", "用户研究", "产品设计", "PRD 撰写", "数据分析", "A/B 测试", "增长"],
    },
    {
      group: "工具",
      items: ["Figma", "Axure", "SQL", "Python", "Notion", "Jira", "飞书"],
    },
    {
      group: "软技能",
      items: ["项目管理", "跨团队协作", "英文读写", "技术沟通"],
    },
  ],

  // 联系区块
  contactTitle: "让我们一起打造好产品",
  contactSub: "对 AI 产品感兴趣？欢迎通过邮件或 GitHub 联系我。",

  // 页脚链接
  footerLinks: [
    { label: "GitHub", url: "https://github.com/your-github-username" },
    { label: "邮箱", url: "mailto:yourname@example.com" },
    { label: "回到顶部", url: "#top" },
  ],

  // 版权
  copyright: "© 2025 · AI 产品经理",
};
