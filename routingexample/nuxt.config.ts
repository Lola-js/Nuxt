// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:true,
  nitro: {
    plugins: ["~/server/index.js"]
  },
  runtimeConfig:{
    mongodbUri: process.env.MONGODB_URI
  },
  /*patron JAMstack
  nitro:{
    prerender: {
      routes:['/services', '/contact', '/about', '/']
    }
  }

  Hybrido
  routeRules:{
  '/':{ prepender: true},
  '/about': { ssr:true},
  '/services' :{ ssr:false}
  }

*/
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})