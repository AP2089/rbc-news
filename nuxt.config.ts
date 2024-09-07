import { nodePolyfills } from 'vite-plugin-node-polyfills';

const isDevelopment = process.env.NODE_ENV === 'development';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: Number(process.env.APP_PORT),
    host: process.env.APP_HOST,
  },
  routeRules: {
    '/api/**': { proxy: { to: `${process.env.APP_URL_API}/**` } },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  ssr: true,
  compatibilityDate: '2024-09-04',
  devtools: {
    enabled: isDevelopment,
  },
  typescript: {
    strict: true,
  },
  experimental: {
    appManifest: false,
  },
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    'nuxt-easy-lightbox',
    'nuxt-easy-lightbox',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/_config.scss";
            @import "@/assets/styles/_utils.scss";
            @import "@/assets/styles/_mixins.scss";
          `,
        },
      },
    },
    plugins: [nodePolyfills()],
  },
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active',
    },
  },
  runtimeConfig: {
    public: {
      APP_ENV: process.env.APP_ENV,
      APP_HOST: process.env.APP_HOST,
      APP_PORT: process.env.APP_PORT,
      APP_URL: process.env.APP_URL,
      APP_URL_API: process.env.APP_URL_API,
      APP_LOCALES: process.env.APP_LOCALES,
      APP_DEFAULT_LOCALE: process.env.APP_DEFAULT_LOCALE,
    },
  },
  i18n: {
    locales: process.env.APP_LOCALES?.split(','),
    defaultLocale: process.env.APP_DEFAULT_LOCALE,
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
  },
});
