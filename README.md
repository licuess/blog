# licuess 的博客小店

基于 [Astro](https://astro.build) 的个人博客，电商商城风格（公告条、搜索栏、分类导航、商品卡片、商品详情页式的文章页），支持 Markdown 写作、RSS、深色模式，并通过 GitHub Actions 自动部署到 GitHub Pages。

上线地址：**https://licuess.github.io/blog/**

## 部署到 GitHub Pages

1. 把代码推送到本仓库 `licuess/blog` 的 `main` 分支。
2. 打开仓库 **Settings → Pages**，把 **Source** 设为 **GitHub Actions**。
3. 在 **Actions** 页面等待 “Deploy to GitHub Pages” 跑完，然后访问 https://licuess.github.io/blog/ 。

之后每次推送到 `main`，网站都会自动重新构建并发布。

> `astro.config.mjs` 会在 Actions 中根据仓库名自动设置 `site` 和 `base`（本仓库为 `/blog/`），无需手动修改。如果想要根路径地址 `https://licuess.github.io/`，请把仓库改名为 `licuess.github.io`。

## 本地开发

```bash
npm install
npm run dev      # 访问 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
```

## 写文章

在 `src/content/blog/` 下新建 `.md` 文件：

```md
---
title: 文章标题
description: 一句话简介
pubDate: 2026-11-12
tags: [标签]
draft: false   # 设为 true 则不发布
---

正文……
```

`tags` 会自动变成“商品分类”，出现在顶部分类导航和列表页侧栏。

## 自定义

- 店铺名称、描述、顶部公告、服务保障、GitHub 地址：`src/consts.ts`
- 关于页面：`src/pages/about.astro`
- 主题色：`src/styles/global.css` 里 `:root` 的 `--accent` 与 `--accent-2`
- 文章卡片：`src/components/PostCard.astro`（封面颜色和图标按文章 id 自动生成）
- 自定义域名：参见示例文章《给 GitHub Pages 博客绑定自定义域名》
