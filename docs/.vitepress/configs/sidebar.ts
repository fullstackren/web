import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/html/': [
    { text: 'Web 开发者路线', link: '/fe', collapsed: false,
      items: [
        { text: 'HTML 开发指南', link: '/fe/html/' },
        { text: 'HTML 元素', link: '/fe/html/element' },
        { text: 'HTML 全局属性', link: '/fe/html/global-attributes' },
        { text: 'HTML 属性', link: '/fe/html/attributes' },
      ]
    },
  ],
  '/fe/react/': [
    { text: '前端框架', link: '/fe/framework',
      items: [
        { text: 'React', link: '/fe/react' },
        // { text: 'Vue2', link: '/fe/vue2' },
        // { text: 'Vue3', link: '/fe/vue3' },
        // { text: 'Svelte', link: '/fe/svelte' },
        // { text: 'Angular', link: '/fe/angular' },
        // { text: 'Solid', link: '/fe/solid' },
      ]
    },
  ],
  //       { text: 'ES6', collapsed: false,
  //         items: [
  //           { text: 'ES6', link: '/fe/es6' },
  //         ]
  //       },
  //       { text: 'JavaScript', collapsed: false,
  //         items: [
  //           { text: '总览', link: '/fe/javascript' },
  //           { text: '基础知识', link: '/fe/javascript/basic' },
  //         ]
  //       },
  //       { text: 'HTML', link: '/fe/html' },
  //       { text: 'CSS', collapsed: false,
  //         items: [
  //           { text: '总览', link: '/fe/css' },
  //           { text: 'CSS', link: '/fe/css/css' },
  //           { text: 'Less', link: '/fe/css/less' },
  //           { text: 'Sass', link: '/fe/css/sass' },
  //         ]
  //       },
  //       { text: 'Web API', collapsed: false,
  //         items: [
  //           { text: '总览', link: '/fe/web-api' },
  //         ]
  //       },
  //       { text: 'TypeScript', collapsed: false,
  //         items: [
  //           { text: '总览', link: '/fe/typescript' },
  //         ]
  //       },
  //     ]
  //   },
  // ],
  '/be/': [
    {
      text: '后端', link: '/be/',
      items: []
    }
  ],
  '/engineering/': [
    {
      text: '工程化', link: '/engineering/',
      items: [
        { text: '总览', link: '/engineering' },
        { text: 'npm', link: '/engineering/npm' },
        { text: 'yarn', link: '/engineering/yarn' },
        { text: 'pnpm', link: '/engineering/pnpm' },
        { text: 'lerna', link: '/engineering/lerna' },
        { text: 'rollup', link: '/engineering/rollup' },
        { text: 'webpack', link: '/engineering/webpack' },
        { text: 'vite', link: '/engineering/vite' },
        { text: 'rspack', link: '/engineering/rspack' },
      ]
    }
  ],
  '/devops/': [
    {
      text: '运维', link: '/devops/',
      items: [
        { text: 'Git',
          items: [
            { text: 'Git', link: '/devops/git' },
            { text: 'Git常用命令', link: '/devops/git/git-command' },
          ]
        },
      ]
    }
  ]
}
