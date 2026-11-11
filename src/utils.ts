const EMOJIS = ['📘', '🛍️', '🎁', '🧭', '💡', '📦', '✨', '🔥'];

/** 根据文章 id 生成稳定的封面色相和图标（无需准备封面图）。 */
export function coverOf(id: string) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) % 360;
  return { hue: h, emoji: EMOJIS[h % EMOJIS.length] };
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}
