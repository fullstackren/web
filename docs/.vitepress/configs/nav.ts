import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端',
    items: [
      { text: 'JavaScript', link: '/fe/javascript' },
      { text: 'HTML', link: '/fe/html' },
      { text: 'CSS', link: '/fe/css' },
      { text: '前端开发框架', link: '/fe/framework' },
      { text: 'Web APIs', link: '/fe/web-apis' },
      { text: 'TypeScript', link: '/fe/typescript' }
    ]
  },
  { text: '后端', link: '/be' },
  { text: '计算机',
    items: [
      { text: '前端', link: '/computer-science/fe' },
    ]
  },
  { text: '数据库', link: '/database' },
  { text: '工程化', link: '/engineering' },
  // { text: '测试', link: '/make-a-friend' },
  { text: '运维',
    items: [
      { text: 'Git', link: '/devops/git' },
      { text: 'Docker', link: '/devops/docker' },
    ]
  },
  { text: '交个朋友', link: '/make-a-friend' },
]