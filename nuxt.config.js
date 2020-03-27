
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/pc_reset.css',
    //  '@/assets/css/common.less',
    'element-ui/lib/theme-chalk/index.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/ElementUI',
      ssr: true
    },
    '~/plugins/i18n.js',
    '~/plugins/headerNav.js'
  ],
  router: {
    middleware: 'i18n'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        [ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
      ] 
    },
    styleResources:{
      less:'./assets/css/common.less'
    }
  },
  vendor: ['element-ui']
}
