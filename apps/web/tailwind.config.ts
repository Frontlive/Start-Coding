import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				purple: {
					dark: 'rgb(var(--color-purple-dark) / <alpha-value>)',
					mid: 'rgb(var(--color-purple-mid) / <alpha-value>)',
					light: 'rgb(var(--color-purple-light) / <alpha-value>)',
				},
				blue: {
					dark: 'rgb(var(--color-blue-dark) / <alpha-value>)',
				},
				magenta: {
					mid: 'rgb(var(--color-magenta-mid) / <alpha-value>)',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;