import { useAuth0 } from '@envelop/auth0';
import { createYoga } from 'graphql-yoga';
import { createApp } from 'h3';
import { createServer } from 'http';
import { makeSchema, objectType, queryField } from 'nexus';
import { env } from './config';
import { logger } from './logger';

const helloWorld = queryField('helloWorld', {
	type: 'String',
	resolve() {
		return 'Hello World';
	},
});

const authInfoType = objectType({
	name: 'auth0',
	definition(t) {
		t.string('sub');
	},
});

const authInfo = queryField('authInfo', {
	type: authInfoType,
	resolve(root, args, ctx) {
		console.log('AUTH0', ctx.auth0);
		return ctx.auth0;
	},
});

const schema = makeSchema({
	types: [helloWorld, authInfo],
	outputs: {
		schema: __dirname + '/schema.gql',
	},
});

const instance = createYoga({
	schema,
	plugins: [
		useAuth0({
			domain: env.AUTH0_DOMAIN,
			audience: `https://${env.BASE_URL}/graphql`,
			extendContextField: 'auth0',
			preventUnauthenticatedAccess: true,
			onError(error) {
				console.log(error.message);
			},
		}),
	],
});

const app = createApp();

app.use('/graphql', instance);

const server = createServer(app);

const main = async () => {
	try {
		server.listen(env.PORT, () => {
			logger.success(`Server is running on port ${env.PORT}`);
		});
	} catch (err) {
		logger.error(err);

		process.exit(1);
	}
};

main().catch(logger.error);
