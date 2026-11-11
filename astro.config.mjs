import { defineConfig } from 'astro/config';

// 在 GitHub Actions 中自动根据仓库名推导 site 和 base，无需手动修改。
// - 仓库名为 <用户名>.github.io  → 部署在根路径 /
// - 其他仓库名（如 my-blog）      → 部署在 /my-blog/
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = !!owner && repo?.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  // 默认用户名为 licuess；在 Actions 中以实际仓库所有者为准。
  site: `https://${owner || 'licuess'}.github.io`,
  base: owner && !isUserSite ? `/${repo}` : '/',
});
