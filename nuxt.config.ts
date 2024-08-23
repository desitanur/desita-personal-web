// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      '@vueuse/motion/nuxt',
      '@formkit/auto-animate/nuxt',
      '@nuxt/content',
    ],
    devServer: {
        host: '0.0.0.0',
    },
    app: {
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },
});