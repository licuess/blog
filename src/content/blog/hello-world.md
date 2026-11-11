---
title: 你好，世界
description: 博客的第一篇文章，介绍如何使用这个项目写作与发布。
pubDate: 2026-11-11
tags: [博客, 入门]
---

欢迎来到我的新博客！这篇文章会告诉你怎么开始写作。

## 如何新增文章

在 `src/content/blog/` 目录下新建一个 `.md` 文件，开头写上 frontmatter：

```md
---
title: 文章标题
description: 一句话简介
pubDate: 2026-11-12
tags: [标签1, 标签2]
---

正文从这里开始……
```

保存后，文章会自动出现在首页、文章列表和 RSS 里。

## 发布

把代码推送到 GitHub 的 `main` 分支，GitHub Actions 会自动构建并部署到 GitHub Pages。

> 想先写草稿？在 frontmatter 里加上 `draft: true`，文章就不会被发布。
