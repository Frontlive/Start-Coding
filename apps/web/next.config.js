/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'cdn.pixabay.com',
			'images.unsplash.com',
		],
	},
	reactStrictMode: true,
	transpilePackages: ["ui"],
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
