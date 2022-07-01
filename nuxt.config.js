module.exports = {
    /*
     ** Headers of the page
     */
    buildModules: [
        '@nuxt/postcss8',
        // ...
    ],
    head: {
        title: 'rentry',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Real Estate Landing Page' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    css: [
        { src: '@/assets/css/main.css' }
    ],
    plugins: [
        { src: './plugins/swiper.js', ssr: false }
    ],
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        extractCSS: {
            allChunks: true
        },
    }
}