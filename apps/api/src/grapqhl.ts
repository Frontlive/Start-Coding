import { useAuth0 } from '@envelop/auth0';
import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';
import { pipe } from '@mobily/ts-belt';
import type { PrismaClient } from '@prisma/client';
import { lexicographicSortSchema, printSchema } from 'graphql';
import { rateLimitDirective } from 'graphql-rate-limit-directive';
import { createYoga, useExtendContext } from 'graphql-yoga';

import { env } from './config';
import { client } from './prisma';
import { schema as rawSchema } from './schema';
import type { Context } from './types';

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
		headers: JSON.stringify({
			Authorization: 'Bearer <token>',
		}),
	},
	context: (ctx) => ({
		...ctx,
		db: client,
	}),
	plugins: [
		useAuth0({
			domain: env.AUTH0_DOMAIN,
			audience: `${env.BASE_URL}/graphql`,
			extendContextField: 'auth0',
			preventUnauthenticatedAccess: env.isProd,
		}),
		useExtendContext(async (ctx: Context & { db: PrismaClient }) => {
			const user_id = ctx.auth0?.sub;
			const user = user_id
				? await ctx.db.user.findUnique({ where: { user_id } })
				: null;

			return { ...ctx, user };
		}),
		EnvelopArmorPlugin({
			maxDepth: { n: 5 },
			maxAliases: { n: 2 },
		}),
	],
});
