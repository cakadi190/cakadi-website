// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/app.scss'],
  sourcemap: true,
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/image',
    'nuxt-icon',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      APP_VERSION: process.env.APP_VERSION,
      TURNSTILE_PUBKEY: process.env.TURNSTILE_PUBKEY,
      API_URL: process.env.API_URL,
      APP_URL: process.env.APP_URL,
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
