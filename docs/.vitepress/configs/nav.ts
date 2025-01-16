import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端',
    items: [
      { text: 'ES6', link: '/fe/es6' },
      { text: 'JavaScript', link: '/fe/javascript' },
      { text: 'HTML', link: '/fe/html' },
      { text: 'CSS', link: '/fe/css' },
      { text: 'Web API', link: '/fe/web-api' },
      { text: 'TypeScript', link: '/fe/typescript' }
    ]
  },
  { text: '后端', link: '/be' },
  { text: '计算机', link: '/computer-science' },
  { text: '数据库', link: '/database' },
  { text: '工程化', link: '/engineering' },
  // { text: '测试', link: '/make-a-friend' },
  { text: '运维',
    items: [
      { text: 'Git', link: '/devops/git' },
    ]
  },
  { text: '交个朋友', link: '/make-a-friend' },
]