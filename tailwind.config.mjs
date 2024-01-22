/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-dark-purple': '#b300b3',
				'secondary-dark-purple': '#800080',
				'light-grey': '#e7e7e7',
				'semi-transparent-light-grey': '#e7e7e799',
				'vibrant-yellow': '#9f9f00',
				'deep-blue-black': '#15202b',
				'semi-transparent-secondary-dark-purple': '#80008099',
			  }
		},
	},
	plugins: [],
}
