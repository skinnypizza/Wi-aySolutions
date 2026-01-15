/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#00ADBB',
					dark: '#0097A7', // Un tono más oscuro para hover/focus
				},
				background: {
					light: '#F8F9FA', // Un blanco ligeramente más suave
					dark: '#1A202C', // Un gris carbón más estándar
				},
				text: {
					light: '#2D3748', // Gris oscuro para texto claro
					dark: '#E2E8F0',  // Gris claro para texto oscuro
				},
				accent: {
					light: '#E2E8F0', // Un acento sutil para fondos claros
					dark: '#2D3748',  // Un acento sutil para fondos oscuros
				},
			},
			fontFamily: {
				display: ['Source Sans 3', 'sans-serif'],
				body: ['Manrope', 'sans-serif'],
				brand: ['Nunito Sans', 'sans-serif'], // Fuente específica para la marca
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