/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'gray-100': '#D0D0D1',
            'gray-200': '#969696',
            'gray-300': '#808080',
            'black-100': '#161617',
            'black-200': '#2D2D2F',
            'black-300': '#1F2022',
            'blue': '#4573FD',
            'green': '#1FAB71',
            'white': '#ffffff',
        }
    },
    plugins: [],
}