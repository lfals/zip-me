/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#0D0D0D'
			},
			textColor: {
				primary: 'rgb(29 78 216)'
			}
		}
	},
	plugins: []
};
