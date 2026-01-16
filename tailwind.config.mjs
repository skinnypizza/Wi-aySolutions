/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#007B88',
					dark: '#006670', // Un tono más oscuro para hover/focus
				},
				'accent-light': '#EEEEEE', // Blanco humo
				'accent-soft': '#393646', // Azul grisáceo
				'complementary-mint': '#A3F7BF',
				'complementary-gold': '#C5A158',
				// Alias para el sistema de diseño
				'background-light': '#EEEEEE',
				'background-dark': '#222831',
				'text-light': '#222831',
				'text-dark': '#EEEEEE',
			},
			fontFamily: {
				display: ['Source Sans Pro', 'sans-serif'], // Para títulos (headings)
				body: ['Manrope', 'sans-serif'], // Para texto de cuerpo
				brand: ['Nunito Sans', 'sans-serif'], // Para el logotipo o marca
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
			},
		},
	},
	plugins: [],
};