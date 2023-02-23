module.exports = {
	stories: ['../**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				cssLoaderOptions: {
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config) => {
		const imageRule = config.module.rules
			.filter((rule) => Object.keys(rule).length !== 0)
			.find((rule) => {
				console.log(rule);
				return rule.test.test('.svg');
			});
		imageRule.exclude = /\.svg$/;

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack', 'url-loader'],
		});

		return config;
	},
};
