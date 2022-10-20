import { builder } from '../../builder';
import { AuthInfo } from './types';

builder.queryField('authInfo', (t) =>
	t.field({
		type: AuthInfo,
		description: 'Auth0 context info',
		resolve: (_parent, _input, ctx) => {
			return ctx.auth0;
		},
		nullable: true,
	}),
);
