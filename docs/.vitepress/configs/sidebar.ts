import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/javascript/': [
    {
      items: [
        { text: 'JavaScript', link: '/fe/javascript' },
        { text: 'ES6', link: '/fe/javascript/es6' },
        { text: '代码防炸秘籍：try/catch/finally', link: '/fe/javascript/try-catch-finally' },
      ]
    },
    { text: 'Web 开发者路线', link: '/fe' },
  ],
  '/fe/web-apis/': [
    { 
      items: [
        { text: 'Web API', link: '/fe/web-apis' },
        { text: 'Canvas API', collapsed: false,
          items: [
            { text: 'Canvas', link: '/fe/web-apis/canvas' } 
          ]
        },
        {
          text: '串讲', collapsed: false,
          items: [
            { text: '前端 Observer APIs，建议在脑海中先留个痕', link: '/fe/web-apis/observer-apis'}
          ]
        }
      ]
    },
    { text: 'Web 开发者路线', link: '/fe' },
  ],
  '/fe/framework/': [
    {
      items: [
        { text: '前端开发框架', link: '/fe/framework' },
        { text: 'React', link: '/fe/framework/react' },
        { text: 'Vue3', link: '/fe/framework/vue3' },
        { text: 'Vue2', link: '/fe/framework/vue2', collapsed: false,
          items: [
            { text: 'Vue2 源码解析之规划篇', link: '/fe/framework/vue2-source-code' },
            { text: 'Vue2 源码解析之初衷', link: '/fe/framework/vue2-source-code-why' },
            { text: 'Vue2 源码解析之整体架构', link: '/fe/framework/vue2-source-code-architecture' },
            { text: 'Vue2 源码解析之响应式系统', link: '/fe/framework/vue2-source-code-responsive' },
            { text: 'Vue2 源码解析之虚拟 DOM 与 Diff 算法', link: '/fe/framework/vue2-source-code-vdom-diff' },
            { text: 'Vue2 源码解析之模板编译', link: '/fe/framework/vue2-source-code-template-compile' },
            { text: 'Vue2 源码解析之组件系统', link: '/fe/framework/vue2-source-code-component-system' },
            { text: 'Vue2 源码解析之扩展功能与周边工具', link: '/fe/framework/vue2-source-code-extended-tools' },
            { text: 'Vue2 源码解析之总结与进阶', link: '/fe/framework/vue2-source-code-summary-advanced' }, 
          ]
        },
        { text: 'Svelte', link: '/fe/framework/svelte' },
        { text: 'Solid', link: '/fe/framework/solid' },
        { text: 'Angular', link: '/fe/framework/angular' },
      ]
    },
    { text: 'Web 开发者路线', link: '/fe' },
  ],
  '/fe/html/': [
    { 
      items: [
        { text: 'HTML', link: '/fe/html/' },
        { text: 'HTML 元素', link: '/fe/html/element' },
        { text: 'HTML 全局属性', link: '/fe/html/global-attributes' },
        { text: 'HTML 属性', link: '/fe/html/attributes' },
      ]
    },
    { text: 'Web 开发者路线', link: '/fe' },
  ],
  '/fe/css/': [
    { 
      items: [
        { text: 'CSS', link: '/fe/css' },
        { text: 'Less', link: '/fe/css/less' },
        { text: 'Sass', link: '/fe/css/sass' },
      ]
    },
    { text: 'Web 开发者路线', link: '/fe' },
  ],
  '/fe/typescript/': [
    {
      items: [
        { text: 'TypeScript', link: '/fe/typescript' },
      ]
    },
    { text: 'Web 开发者路线', link: '/fe' },
  ],
  '/be/': [
    {
      text: '后端', link: '/be/',
      items: []
    }
  ],
  '/computer-science/': [
    { text: '计算机', link: '/computer-science',
      items: [
        { text: '前端基础知识', link: '/computer-science/fe' }
      ] 
    }
  ],
  '/engineering/': [
    {
      text: '工程化', link: '/engineering/',
      items: [
        { text: '模块化', link: '/engineering/module' },
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
