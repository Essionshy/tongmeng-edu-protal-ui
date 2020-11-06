module.exports = {
  /**
   * Plugins
   */

  plugins:[
    {src:'~/plugins/nuxt-swiper-plugin.js',ssr:false},
    {src:'~/plugins/vue-qriously-plugin.js',ssr:false},
    {src:'~/plugins/element-ui-plugin.js',ssr:false}
  ],

  /**
   * Css
   */

  css:[
      'swiper/dist/css/swiper.css',
      'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: '童蒙教育',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    transpile: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
