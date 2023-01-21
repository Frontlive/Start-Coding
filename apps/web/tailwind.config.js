const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
		'./utils/**/*',
	],
	theme: {
		colors: {
			primary: colors.sky['700'],
			...colors,
		},
		extend: {},
	},
	plugins: [],
};
