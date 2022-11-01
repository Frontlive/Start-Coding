import fp from 'fastify-plugin';
import { client } from './prisma';

declare module 'fastify' {
	interface FastifyInstance {
		db: typeof client;
	}
}

export const dbPlugin = fp(async (fastify, _opts) => {
	fastify.decorate('db', client);
});
