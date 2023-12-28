// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/app.scss'],
  sourcemap: true,

  webpack: {
    cssSourceMap: true,
  },

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/image',
    'nuxt-icon',
    '@pinia/nuxt',
    'nuxt-simple-sitemap',
    'dayjs-nuxt',
  ],

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      APP_VERSION: process.env.APP_VERSION,
      TURNSTILE_PUBKEY: process.env.TURNSTILE_PUBKEY,
      API_URL: process.env.API_URL,
      APP_URL: process.env.APP_URL,
    },
  },

  // ====================== Sitemap Loader Setting ====================== //
  site: {
    url: process.env.APP_URL,
  },
  
  sitemap: {
    exclude: ['/admin/**', '/auth/**'],
  },
  
  // ====================== DayJS Loader Setting ====================== //
  dayjs: {
    locales: ['en', 'id'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'id',
    defaultTimezone: 'Asia/Jakarta',
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
