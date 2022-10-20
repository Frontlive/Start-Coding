import { builder } from '../../builder';

export const AuthInfo = builder
	.objectRef<{ sub: string | null }>('AuthInfo')
	.implement({
		description: 'Auth0 user info',
		fields: (t) => ({
			sub: t.exposeString('sub', { nullable: true }),
		}),
	});
