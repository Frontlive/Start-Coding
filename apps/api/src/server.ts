import fastify from 'fastify';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { instance } from './graphql';
import { webhooksPlugin } from './webhooks/webhooks.plugin';
import { dbPlugin } from './db.plugin';
import { container } from './di';

export const server = fastify().withTypeProvider<TypeBoxTypeProvider>();

server.register(dbPlugin);

server.route({
	url: '/graphql',
	method: ['GET', 'POST', 'OPTIONS'],
	handler: async (req, reply) => {
		const response = await instance.handleNodeRequest(req, {
			req,
			reply,
			container,
		});

		response.headers.forEach((value, key) => {
			reply.header(key, value);
		});

		reply.status(response.status);

		// ! This line I don't like. It works, but I don't believe it's the best way to do it.
		const textResponse = await response.text();

		reply.send(textResponse);

		return reply;
	},
});

server.register(webhooksPlugin);
