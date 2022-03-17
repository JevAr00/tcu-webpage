module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/login',
				destination: '/api/auth/login',
				permanent: true,
			},
			{
				source: '/logout',
				destination: '/api/auth/logout',
				permanent: true,
			},
		];
	},
};
