// config docs at https://vuepress.vuejs.org/zh/config
module.exports = {
  base: '/',
  dest: './dist',
  repo: 'https://github.com/Chengyanzhao/VuePressBlog',
  title: 'Cheng',
  description: '记录一个代码搬运工从茂密到秃头的心酸之路。',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'bookmark', href: '/logo.ico' }]
  ],
  ga: 'UA-118983152-1',
  themeConfig: {
    repo: 'https://github.com/Chengyanzhao/VuePressBlog.git',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '博客',
        link: '/blog',
      },
      { text: '钢琴', link: '/paino/' },
      { text: '关于', link: '/about/' }
    ],
    // sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    displayAllHeaders: false,
    // 侧边栏
    sidebar: {
      '/blog/': [
        '/blog/',
        // html
        {
          title: 'HTML',
          collapsable: true,
          children: ['/blog/HTML/history-api']
        },
        // js
        {
          title: 'JavaScript',
          children: [
            '/blog/JavaScript/jsonp',
            '/blog/JavaScript/hoisting',
            '/blog/JavaScript/modules',
            '/blog/JavaScript/array-unique',
            '/blog/JavaScript/Promise',
            '/blog/JavaScript/prototype and constructor',
            '/blog/JavaScript/inherit',
            '/blog/JavaScript/事件循环与消息队列',
            '/blog/JavaScript/函数的去抖与节流',
          ]
        },
        // es6
        {
          title: 'ES6',
          children: [
            '/blog/ES6/1.let与const',
            '/blog/ES6/2.变量的解构赋值'
          ]
        },
        // css
        {
          title: 'CSS',
          children: [
            '/blog/CSS/pseudo',
            '/blog/CSS/font-face',
            '/blog/CSS/background',
            '/blog/CSS/border',
            '/blog/CSS/gradient',
            '/blog/CSS/transform',
            '/blog/CSS/transition']
        },
        // Net
        {
          title: 'Net',
          children: [
            '/blog/Net/HTTP协议'
          ]
        },
        // dom
        {
          title: 'DOM',
          children: [
            '/blog/DOM/attribute and property'
          ]
        },
        // fe
        {
          title: '前端',
          children: [
            '/blog/FE/browser-node-v8'
          ]
        },
        // vue
        {
          title: 'Vue',
          children: [
            '/blog/Vue/Record',
            '/blog/Vue/history-api'
          ]
        },
        // Node & Npm
        {
          title: 'Node/Npm',
          children: [
            '/blog/Node/nvm',
            '/blog/Node/npm命令',
          ]
        },
        // mongodb
        {
          title: 'MongoDB',
          children: [
            '/blog/MongoDB/',
            '/blog/MongoDB/query',
            '/blog/MongoDB/update',
            '/blog/MongoDB/数组更新操作'
          ]
        },
        // Deploy
        {
          title: '部署',
          children: [
            '/blog/Deploy/nssm',
            '/blog/Deploy/nginx'
          ]
        },
        // os
        {
          title: '操作系统',
          children: [
            '/blog/System/macOS'
          ]
        },
        // others
        {
          title: '其他',
          children: [
            '/blog/Other/ali-oss'
          ]
        }
      ],
      '/paino/': [{
        title: '钢琴',
        collapsable: false,
        children: [
          '',
          'textbook',
          'paino'
        ]
      }],
      '/about/': [{
        title: '关于',
        collapsable: false,
        children: ['']
      }],
    }
  },
  // 浏览器兼容性
  evergreen: true
}