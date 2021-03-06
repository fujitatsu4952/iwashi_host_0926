export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
    src: '~/plugins/amplify.ts',
    mode: 'client'
  }, ],

  env: {
      // Cognito
     AUTH_IDEMTITY_POOL_ID: 'ap-northeast-1:7e29309e-3a86-4a60-b80d-b424fe6e0596',
     AUTH_REGION: 'ap-northeast-1',
     AUTH_USER_POOL_ID: 'ap-northeast-1_Vwc46lBKh',
     AUTH_USER_POOL_WEB_CLIENT_ID: '3e1vvi9qot77jbed16rao4mlna',
     // S3
     STORAGE_AWSS3_BUCKET: "iwashimidnight1011",
     STORAGE_AWSS3_REGION:  "ap-northeast-1",
     STORAGE_AWSS3_BASE_URL: "https://d1tf0an9f7owew.cloudfront.net",
     STORAGE_AWSS3_MASTER_BASE_URL: "https://d1tf0an9f7owew.cloudfront.net",
     // Master
     AWS_PROJECT_REGION: 'ap-northeast-1',
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {  
    stylus: [  
        '~/assets/stylus/_variables.styl',
        '~/assets/stylus/_transition.styl'
    ]  
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

}
