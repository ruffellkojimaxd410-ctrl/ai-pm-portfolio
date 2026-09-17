# AI 产品经理 · 个人网站

一个基于 **Apple 设计系统** 的单页个人作品集网站，用于 AI 产品经理求职展示。

参考设计：https://styles.refero.design/style/aecac5da-f397-4ddf-b71f-de1efc434cb8

## 目录结构

```
├── index.html              页面结构
├── assets/
│   ├── css/styles.css      样式（设计 token 集中在 :root）
│   └── js/
│       ├── data.js         👈 所有内容都改这里
│       └── main.js         渲染逻辑（一般不用动）
```

## 快速开始

### 本地预览

直接用浏览器打开 `index.html` 即可，或者启动一个本地服务器：

```bash
# 在项目目录下
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

### 修改内容

**只需编辑 `assets/js/data.js`** 一个文件：

- `name` / `nameEn` — 你的名字
- `title` / `eyebrow` / `tagline` — 职位与一句话介绍
- `github` / `email` — 你的链接
- `about` — 关于我
- `highlights` — 数字亮点（如 "5+ 年经验"）
- `projects` — 项目列表，每个项目一个对象，`github` 填对应仓库链接
- `skills` — 技能分类与标签
- `footerLinks` — 页脚链接

### 新增一个项目

在 `projects` 数组里追加一条即可：

```js
{
  title: "项目名称",
  category: "分类",
  desc: "项目简介",
  tags: ["标签1", "标签2"],
  github: "https://github.com/你的用户名/仓库名",
  emoji: "🚀",          // 封面图标
  color: "#e8f1fb",     // 封面底色
}
```

## 部署到 GitHub Pages

1. 把项目推到 GitHub 仓库
2. 仓库 `Settings` → `Pages` → 选择分支（如 `main`）+ 根目录 `/ (root)`
3. 保存后即可通过 `https://用户名.github.io/仓库名` 访问

## 设计规范要点（Apple 设计系统）

- 画布底色 `#f5f5f7`，主文本 `#1d1d1f`
- 蓝色仅用于填充按钮 `#0071e3`，描边/链接用 `#0066cc`
- 按钮与标签全圆角 `980px`，卡片/图片 `8px`
- 不用阴影，靠发丝线边框与表面色差分层次
- 大留白、居中排版、区块交替底色
