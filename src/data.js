// 精选作品按轮播顺序排列，图片位于 public/images/。
export const featuredWorks = [
  { id: 'featured-1', label: '2024 我的微博播报', image: '/images/weibo-behavior-report.png', aspect: 'wide' },
  { id: 'featured-2', label: '2024 微博热搜新年礼盒', image: '/images/weibo-hot-search-gift.png', aspect: 'wide' },
  { id: 'featured-3', label: 'China Ski · Milano Cortina 2026', image: '/images/china-ski-2026.png', aspect: 'wide' },
  { id: 'featured-4', label: '开心年 · 新春礼盒', image: '/images/weibo-spring-gift.png', aspect: 'wide' },
]

export const moreWorks = Array.from({ length: 12 }, (_, index) => ({
  id: `more-${index + 1}`,
  label: `作品 ${String(index + 1).padStart(2, '0')}`,
  image: '',
  aspect: ['portrait', 'square', 'wide', 'tall'][index % 4],
}))
