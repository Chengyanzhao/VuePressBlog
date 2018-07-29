// config docs at https://vuepress.vuejs.org/zh/config
module.exports = {
  dest: './dist',
  repo: 'https://github.com/Chengyanzhao/VuePress',
  title: 'Panda Cheng - Coding Workspace',
  description: 'This is a personal blog of Cheng.',
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
        items: [
          { text: 'HTML', link: '/blog/HTML/' },
          { text: 'JavaScript', link: '/blog/JavaScript/' },
          { text: '前端', link: '/blog/FE/' }
        ]
      },
      { text: '专栏', link: '/column/' },
      { text: '钢琴', link: '/paino/' },
      { text: '关于', link: '/about/' }
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    // 侧边栏
    sidebar: {
      // '/blog/': [{
      //   title: '博客',
      //   collapsable: false,
      //   children: ['./']
      // }],
      '/blog/FE/': [{
        title: '前端',
        collapsable: false,
        children: ['', 'browser-node-v8']
      }],
      '/column/': [{
        title: '专栏',
        collapsable: false,
        children: ['']
      }],
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
      }]
    }
  },
  // 浏览器兼容性
  evergreen: true
}