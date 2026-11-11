---
title: 给 GitHub Pages 博客绑定自定义域名
description: 三步把 yourname.github.io 换成你自己的域名。
pubDate: 2026-11-09
tags: [部署, GitHub]
---

默认地址不够个性？可以绑定自己的域名。

## 步骤

1. 在域名服务商处添加 DNS 记录：根域名用 `A` 记录指向 GitHub Pages 提供的 IP，`www` 子域名用 `CNAME` 指向 `<用户名>.github.io`。具体 IP 以 GitHub 官方文档为准。
2. 在仓库 **Settings → Pages → Custom domain** 填入你的域名并保存。
3. 修改 `astro.config.mjs`：把 `site` 改成你的域名，并将 `base` 设为 `'/'`。

## 注意

- 解析生效需要一些时间，请耐心等待。
- 建议勾选 **Enforce HTTPS**，让网站使用加密连接。
