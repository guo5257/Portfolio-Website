export const navItems = [
  { label: '家', href: '#home' },
  { label: '项目', href: '#projects' },
  { label: '服务', href: '#services' },
  { label: '关于我', href: '#profile' },
  { label: '联系我', href: '#contact' },
]

export const profileKeywords = ['视觉设计', '品牌表达', '互动体验']

export const brands = [
  { id: 'douyin', name: '抖音', note: '当前任职' },
  { id: 'kuaishou', name: '快手', note: '曾服务' },
  { id: 'baidu', name: '百度', note: '曾服务' },
  { id: 'pending-1', name: '待补充 01', note: 'BRAND SPACE', placeholder: true },
  { id: 'pending-2', name: '待补充 02', note: 'BRAND SPACE', placeholder: true },
]

export const projects = [
  {
    id: 'weibo-report',
    number: '01',
    title: '2024 我的微博播报',
    category: '活动视觉',
    year: '2024',
    image: '/images/weibo-behavior-report.png',
    description: '年度记忆的视觉表达',
  },
  {
    id: 'weibo-gift',
    number: '02',
    title: '2024 微博热搜新年礼盒',
    category: '活动视觉',
    year: '2024',
    image: '/images/weibo-hot-search-gift.png',
    description: '新年主题的礼盒视觉',
  },
  {
    id: 'china-ski',
    number: '03',
    title: 'China Ski · Milano Cortina 2026',
    category: '概念视觉',
    year: '2026',
    image: '/images/china-ski-2026.png',
    description: '冰雪主题视觉探索',
  },
  {
    id: 'spring-gift',
    number: '04',
    title: '开心年 · 新春礼盒',
    category: '活动视觉',
    year: '2026',
    image: '/images/weibo-spring-gift.png',
    description: '新春礼盒视觉设计',
  },
]

export const collageTiles = [
  { id: 'tile-1', projectId: 'weibo-report' },
  { id: 'tile-2', placeholder: 'VISUAL NOTE 01' },
  { id: 'tile-3', projectId: 'china-ski' },
  { id: 'tile-4', projectId: 'weibo-gift' },
  { id: 'tile-5', placeholder: 'VISUAL NOTE 02' },
  { id: 'tile-6', projectId: 'spring-gift' },
  { id: 'tile-7', placeholder: 'VISUAL NOTE 03' },
  { id: 'tile-8', placeholder: 'VISUAL NOTE 04' },
]

export const services = [
  {
    id: 'visual',
    number: '01',
    title: '视觉创意',
    en: 'VISUAL CONCEPT',
    detail: '从概念到完整视觉表达',
    previewProjectId: 'weibo-report',
  },
  {
    id: 'campaign',
    number: '02',
    title: '品牌活动',
    en: 'CAMPAIGN DESIGN',
    detail: '为传播场景建立鲜明识别',
    previewProjectId: 'weibo-gift',
  },
  {
    id: 'interactive',
    number: '03',
    title: '互动体验',
    en: 'INTERACTIVE EXPERIENCE',
    detail: '让内容与用户产生连接',
    previewProjectId: 'china-ski',
  },
]

// 替换为获得授权的真实客户评价后再对外发布。
export const testimonials = [
  {
    id: '01',
    quote: '这里预留客户对合作过程与成果的真实评价。',
    name: '客户姓名 / 品牌待补充',
    role: '项目角色待补充',
    placeholder: true,
  },
  {
    id: '02',
    quote: '这里预留另一位合作伙伴的真实反馈。',
    name: '客户姓名 / 品牌待补充',
    role: '项目角色待补充',
    placeholder: true,
  },
]

export const contactDetails = [
  { label: '电话', value: '待补充' },
  { label: '微博', value: '待补充' },
  { label: '微信', value: '待补充' },
  { label: '邮箱', value: '待补充' },
]
