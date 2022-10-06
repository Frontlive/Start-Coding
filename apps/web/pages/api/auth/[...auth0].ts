import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
	async login(req, res) {
		try {
			await handleLogin(req, res, {
				authorizationParams: {
					audience: 'http://localhost:4000/graphql',
					scope: 'openid profile email',
				},
			});
			//Add handler for unknown
		} catch (error: any) {
			res.status(error.status || 400).end(error.message);
		}
	},
});
