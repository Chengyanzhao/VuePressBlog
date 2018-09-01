// config docs at https://vuepress.vuejs.org/zh/config
module.exports = {
  base: '/VuePressBlog/',
  dest: './dist',
  repo: 'https://github.com/Chengyanzhao/VuePressBlog',
  title: 'Cheng',
  description: 'Just some codes.',
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
          { text: 'CSS', link: '/blog/CSS/' },
          { text: '前端', link: '/blog/FE/' },
          { text: 'Vue', link: '/blog/Vue/' },
          { text: '部署', link: '/blog/Deploy/' },
          { text: '正则表达式', link: '/blog/Regexp/' },
          { text: '兼容性', link: '/blog/Compatibility/' },
          { text: '操作系统', link: '/blog/System/' },
          { text: '其他', link: '/blog/Other/' }
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
      '/blog/HTML/': [{
        title: 'HTML',
        collapsable: false,
        children: ['', 'history-api']
      }],
      '/blog/JavaScript/': [{
        title: 'JavaScript',
        collapsable: false,
        children: ['', 'jsonp', 'hoisting', 'modules', 'array-unique']
      }],
      '/blog/CSS/': [{
        title: 'CSS',
        collapsable: false,
        children: ['', 'pseudo']
      }],
      '/blog/FE/': [{
        title: '前端',
        collapsable: false,
        children: ['', 'browser-node-v8']
      }],
      '/blog/Vue/': [{
        title: 'Vue记录',
        collapsable: false,
        children: ['', 'Record', 'history-api']
      }],
      '/blog/MongoDB/': [{
        title: 'MongoDB',
        collapsable: false,
        children: ['']
      }],
      '/blog/Deploy/': [{
        title: '部署',
        collapsable: false,
        children: ['', 'nssm', 'nginx']
      }],
      '/blog/Regexp/': [{
        title: '部署',
        collapsable: false,
        children: ['', 'common']
      }],
      '/blog/Compatibility/': [{
        title: '兼容性',
        collapsable: false,
        children: ['']
      }],
      '/blog/System/': [{
        title: '操作系统',
        collapsable: false,
        children: ['', 'macOS']
      }],
      '/blog/Other/': [{
        title: '其他',
        collapsable: false,
        children: ['', 'ali-oss']
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