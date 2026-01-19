// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/plausible'],
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { async: true, src: 'https://www.zhcndoc.com/js/common.js' },
      ],
    },
  },
  site: {
    name: 'Nuxt Color Mode 中文文档',
  },
  ui: {
    fonts: false,
  },
  compatibilityDate: '2024-09-13',
  llms: {
    domain: 'https://nuxt-color-mode.zhcndoc.com',
  },
})
