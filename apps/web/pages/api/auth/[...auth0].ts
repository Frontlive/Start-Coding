import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { isServerErrorWithStatusAndMessage } from '../../../utils/apiRoutes/isServerErrorWithStatusAndMessage';

export default handleAuth({
	async login(req, res) {
		try {
			await handleLogin(req, res, {
				authorizationParams: {
					audience: 'http://localhost:4000/graphql',
					scope: 'openid profile email',
				},
			});
		} catch (error: unknown) {
			if (isServerErrorWithStatusAndMessage(error)) {
				res.status(error.status || 400).end(error.message);
			}
		}
	},
});
