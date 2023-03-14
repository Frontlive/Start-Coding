import { useAuth0 } from '@envelop/auth0';
import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';
import { pipe } from '@mobily/ts-belt';
import { lexicographicSortSchema, printSchema } from 'graphql';
import { rateLimitDirective } from 'graphql-rate-limit-directive';
import { createYoga, useExtendContext } from 'graphql-yoga';

import { env } from './config';
import { DB_SYMBOL } from './dependencies/db';
import { schema as rawSchema } from './schema';
import type { BaseContext, Context } from './types';

const { rateLimitDirectiveTransformer } = rateLimitDirective();

const schema = pipe(rawSchema, rateLimitDirectiveTransformer);

export const schemaAsString = pipe(
	schema,
	lexicographicSortSchema,
	printSchema,
);

export const instance = createYoga<Context>({
	schema,
	maskedErrors: env.isProd,
	landingPage: env.isDev,
	graphiql: {
		title: 'API',
	},
	plugins: [
		useAuth0({
			domain: env.AUTH0_DOMAIN,
			audience: `${env.BASE_URL}/graphql`,
			extendContextField: 'auth0',
			preventUnauthenticatedAccess: env.isProd,
		}),
		useExtendContext(async (ctx: BaseContext) => {
			const user_id = ctx.auth0?.sub;
			const db = ctx.container.resolve(DB_SYMBOL);

			const user = user_id
				? await db.user.findUnique({ where: { provider_user_id: user_id } })
				: null;

			return { ...ctx, user };
		}),
		EnvelopArmorPlugin({
			maxDepth: { n: 5 },
			maxAliases: { n: 2 },
		}),
	],
});
