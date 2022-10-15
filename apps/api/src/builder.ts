import DirectivePlugin from '@pothos/plugin-directives';
import SchemaBuilder from '@pothos/core';
import type { Context } from './types';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';

export const builder = new SchemaBuilder<{
	Context: Context;
	Scalars: {
		Date: { Input: Date; Output: Date };
		DateTime: { Input: Date; Output: Date };
	};
	Directives: {
		rateLimit: {
			locations: 'OBJECT' | 'FIELD_DEFINITION';
			args: { limit: number; duration: number };
		};
	};
}>({
	plugins: [DirectivePlugin],
});

builder.addScalarType('Date', DateResolver, {});
builder.addScalarType('DateTime', DateTimeResolver, {});

const AuthInfo = builder
	.objectRef<{ sub: string | null }>('AuthInfo')
	.implement({
		description: 'Auth0 user info',
		fields: (t) => ({
			sub: t.exposeString('sub', { nullable: true }),
		}),
	});

builder.queryField('helloWorld', (t) =>
	t.field({
		type: 'String',
		description: 'Hello world',
		resolve: () => 'Hello World',
	}),
);

builder.queryField('now', (t) =>
	t.field({
		type: 'DateTime',
		description: 'Now',
		resolve: () => new Date(),
	}),
);

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

builder.queryType({});
