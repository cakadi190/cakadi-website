// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/app.scss'],
  modules: ['@nuxtjs/google-fonts', 'nuxt-svgo', '@nuxt/image', 'nuxt-icon', '@pinia/nuxt'],
  sourcemap: true,

  runtimeConfig: {
    public: {
      APP_VERSION: process.env.APP_VERSION,
    },
  },

  // ====================== Pinia Loader Setting ====================== //
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // ====================== GFonts Loader Setting ====================== //
  googleFonts: {
    families: {
      Signika: true,
      'JetBrains Mono': true,
      Poppins: true,
    },
    display: 'swap',
    subsets: 'greek',
    preconnect: true,
    preload: true,
    useStylesheet: true,
    prefetch: true,
    download: true,
    base64: true,
    inject: true,
    overwriting: true
  }
});
