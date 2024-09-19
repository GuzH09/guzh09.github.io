/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
        'back-texture': "url('../src/assets/pattern.jpg')",
      },
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'courgette': ['Courgette', 'cursive'],
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography')
	],
}