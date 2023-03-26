/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'loremflickr.com',
			'images.unsplash.com',
			'cdn.pixabay.com',
		],
	},
	reactStrictMode: true,
	transpilePackages: ['ui'],
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack', 'url-loader'],
		});

		return config;
	},
};

module.exports = nextConfig;
