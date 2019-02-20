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
        link: '/blog/',
        // items: [
        //   { text: 'HTML', link: '/blog/HTML/' },
        //   { text: 'JavaScript', link: '/blog/JavaScript/' },
        //   { text: 'CSS', link: '/blog/CSS/' },
        //   { text: 'DOM', link: '/blog/DOM/' },
        //   { text: '前端', link: '/blog/FE/' },
        //   { text: 'Vue', link: '/blog/Vue/' },
        //   { text: '部署', link: '/blog/Deploy/' },
        //   { text: '正则表达式', link: '/blog/Regexp/' },
        //   { text: '兼容性', link: '/blog/Compatibility/' },
        //   { text: '操作系统', link: '/blog/System/' },
        //   { text: '其他', link: '/blog/Other/' }
        // ]
      },
      // {
      //   text: '专栏',
      //   items: [

      //   ]
      // },
      { text: '钢琴', link: '/paino/' },
      { text: '闲扯', link: '/chitchat/' },
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
            '/blog/JavaScript/promise',
            '/blog/JavaScript/prototype and constructor',
            '/blog/JavaScript/inherit']
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
        // react
        // {
        //   title: 'React',
        //   children: [
        //     '/blog/React/'
        //   ]
        // },
        // mongodb
        // {
        //   title: 'MongoDB',
        //   children: [
        //     '/blog/MongoDB/'
        //   ]
        // },
        // Deploy
        {
          title: '部署',
          children: [
            '/blog/Deploy/nssm',
            '/blog/Deploy/nginx'
          ]
        },
        // regexp
        // {
        //   title: '正则表达式',
        //   children: [
        //     '/blog/Regexp/common'
        //   ]
        // }
        // Compatibility
        // {
        //   title: '兼容性',
        //   children: [
        //     '/blog/Compatibility/'
        //   ]
        // }
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
      '/chitchat/': [{
        title: '闲扯',
        collapsable: false,
        children: ['2018总结', 'Reminder']
      }]
    }
  },
  // 浏览器兼容性
  evergreen: true
}