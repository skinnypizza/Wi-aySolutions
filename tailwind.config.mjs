/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Ignova Brand Colors
				primary: {
					DEFAULT: '#ff7f2f', // Energy/CTAs - Orange
					dark: '#e66a1a',
				},
				secondary: {
					DEFAULT: '#ad0034', // Depth - Deep Red
					dark: '#8a002a',
				},
				ignova: {
					dark: '#1e1e1e',      // Dark backgrounds
					light: '#e4e2dd',     // Light text on dark
					gray: '#757575',      // Muted text
					naive: '#e3e3e1',     // Naive.uno text color
				},
				// Gradient colors for easy access
				'gradient-start': '#ff7f2f',
				'gradient-end': '#ad0034',
			},
			fontFamily: {
				hoves: ['TT Hoves Pro', 'sans-serif'],       // Headings/Logo
				ailerion: ['Ailerion', 'sans-serif'],        // Display/Taglines
				codec: ['Codec Pro', 'sans-serif'],          // Naive.uno branding
				inter: ['Inter', 'system-ui', 'sans-serif'], // Body text
			},
			backgroundImage: {
				'ignova-gradient': 'linear-gradient(135deg, #ff7f2f 0%, #ad0034 100%)',
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
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 127, 47, 0.4)',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(255, 127, 47, 0.6)',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};