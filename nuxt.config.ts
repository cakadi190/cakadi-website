// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/app.scss'],
  sourcemap: true,

  webpack: {
    cssSourceMap: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "bootstrap/scss/functions";
            @import "bootstrap/scss/mixins";
            @import "~/assets/styles/core/variables";
            @import "~/assets/styles/core/variables-dark";`
          ,
        }
      }
    }
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
    layoutTransition: { name: 'layout', mode: 'out-in' },

    head: {
      title: 'Cak Adi Official Site',
      titleTemplate: (title) => {
        return title ? `${title} • Cak Adi Official Site` : 'Cak Adi Official Site';
      },
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico'
        },
      ],
      meta: [
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'twitter:image', content: '/images/og-image.jpg' },
      ]
    }
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
    subsets: ['latin', 'greek'],
    display: 'swap',
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
