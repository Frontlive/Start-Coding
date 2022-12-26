/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
	reactStrictMode: true,
	experimental: {
    transpilePackages: ["ui"],
  },
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
