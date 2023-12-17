// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/i18n'
  ],
  i18n: {
    /* module options */
    vueI18n: './i18n/i18n.config.ts'
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  css: ['~/assets/css/main.css']
})
