// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/image'],

  app: {
    head: {
      charset: 'utf-8',
      title: 'SAST Evento',
      meta: [
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-title", content: "SAST Evento" },
        { name: "application-name", content: "SAST Evento" },
        { name: "viewport", content: "width=device-width, viewport-fit=cover" },
      ]
    },
  },

  $production: {
    app: {
      baseURL: '/evento/',
      head: {
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/evento/favicon.ico' },
        ]
      }
    }
  }
})