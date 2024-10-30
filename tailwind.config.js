/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'red': '#FF0A00',
            'black': '#000000',
            'white': '#FFFFFF'
        }
    }
}  