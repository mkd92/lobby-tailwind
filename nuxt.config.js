export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  // router: {
  //   extendRoutes(routes, resolve) {
  //     const indexIndex = routes.findIndex(route.name === 'index')
  //     let index = routes[indexIndex]
  //     routes[index] = {
  //       ...routes[index],
  //       components: {
  //         default: routes[index].component,
  //         top: resolve(__dirname, 'components/mainTop.vue')
  //       },
  //       chunkNames: {
  //         top: 'components/mainTop'
  //       }
  //     }
  //   }
  // },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
           { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap"}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebase.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        // Required:
        config: {
          development: {
            apiKey: "AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng",
            authDomain: "lobby-c8f1f.firebaseapp.com",
            databaseURL: "https://lobby-c8f1f.firebaseio.com",
            projectId: "lobby-c8f1f",
            storageBucket: "",
            messagingSenderId: "91079693744",
            appId: "1:91079693744:web:7e3ccb27356d7e87"
          },
          production: {
            apiKey: "AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng",
            authDomain: "lobby-c8f1f.firebaseapp.com",
            databaseURL: "https://lobby-c8f1f.firebaseio.com",
            projectId: "lobby-c8f1f",
            storageBucket: "",
            messagingSenderId: "91079693744",
            appId: "1:91079693744:web:7e3ccb27356d7e87"
          }
        },
        // The following options are optional:
        useOnly: ['auth','firestore','functions','storage','realtimeDb', 'messaging', 'performance'],
        customEnv: false,
        functionsLocation: 'us-central1',
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
