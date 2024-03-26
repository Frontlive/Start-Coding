module.exports = {
	root: true,
	extends: ['next/core-web-vitals', 'custom', 'plugin:storybook/recommended'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'react-hooks/exhaustive-deps': 'error',
	},
	ignorePatterns: ['tailwind.config.ts'],
};
