/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**.vue",
    "./layouts/**.vue",
    "./pages/**.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient': 'radial-gradient(47.47% 47.47% at 49.91% 52.53%, #66ccff 0, hsla(0, 0%, 85%, 0) 100%)',
        'green-gradient': 'radial-gradient(47.47% 47.47% at 49.91% 52.53%, #20ffaf 0, hsla(0, 0%, 85%, 0) 100%)',
        'orange-gradient': 'radial-gradient(47.47% 47.47% at 49.91% 52.53%, #ffaf20 0, hsla(0, 0%, 85%, 0) 100%)',
        'yellow-gradient': 'radial-gradient(47.47% 47.47% at 49.91% 52.53%, #ffff20 0, hsla(0, 0%, 85%, 0) 100%)',
      }
    },
  },
  plugins: [],
}

