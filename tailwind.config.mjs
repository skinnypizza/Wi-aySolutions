/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta del Moodboard
        "primary": "#00ADBB",       // Turquesa
        "background-light": "#EEEEEE", // Blanco Humo
        "background-dark": "#222831",  // Gris Carbón
        "text-light": "#222831",
        "text-dark": "#EEEEEE",
        "contrast-accent": "#393E46" // Azul Grisáceo
      },
      fontFamily: {
        // Tipografía del Moodboard
        "display": ["Source Sans 3", "sans-serif"],
        "body": ["Manrope", "sans-serif"]
      },
      // Definición de nuestra animación
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        // Uso de la animación
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards'
      }
    },
  },
  plugins: [],
}