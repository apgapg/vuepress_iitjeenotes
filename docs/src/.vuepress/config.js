const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'IIT JEE Notes',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    searchPlaceholder: 'Search...',
    repo: 'https://github.com/apgapg/vuepress_iitjeenotes',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    docsBranch: 'main',
    docsDir: 'docs/src',
    lastUpdated: 'Last Updated', // string | boolean
    logo: '/logo.png',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'About Me',
        link: 'https://apgapg.github.io/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Courses',
          collapsable: false,
          children: [
            '/guide/courses/projectile-motion',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
