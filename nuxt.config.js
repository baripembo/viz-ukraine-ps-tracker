const routerBase = process.env.DEPLOY_ENV === 'WITH_SUBFOLDER'
  ? {
      router: {
        base: '/viz-ukraine-ps-tracker'
      }
    }
  : {}
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ukraine Private Sector Donations Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This interactive dashboard from the OCHA/UNDP Connecting Business initiative showing cash and in-kind contributions from businesses around the world intended to respond to the humanitarian crisis in Ukraine.' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@humdata' },
      { name: 'twitter:title', content: 'Ukraine Private Sector Donations Tracker' },
      { name: 'twitter:description', content: 'This interactive dashboard from the OCHA/UNDP Connecting Business initiative showing cash and in-kind contributions from businesses around the world intended to respond to the humanitarian crisis in Ukraine.' },
      { name: 'twitter:image', content: 'https://ocha-dap.github.io/viz-ukraine-ps-tracker/preview-img.png' },
      { name: 'twitter:image:alt', content: 'Contributions to the humanitarian crisis in Ukraine.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://data.humdata.org/images/icons/hdx.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap' }
    ],
    script: [
      // {
      //   src: 'https://apiv2.popupsmart.com/api/Bundle/368361',
      //   body: true,
      //   async: true
      // }
      // {
      //   src: 'http://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js',
      //   body: true
      // }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff', height: '5px' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/_custom.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/mixpanel.js' },
    { src: '~/plugins/hotjar.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-vue-select',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  buildModules: [
    [
      '@nuxtjs/gtm'
    ],
    // LINTING
    // Doc: https://github.com/nuxt-community/eslint-module
    // Comment out the below 3 lines to disable linting
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.externals = {
        moment: 'moment'
      }
    }
  },
  dev: process.env.NODE_ENV !== 'production',
  ...routerBase
}
