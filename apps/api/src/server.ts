import fastify from 'fastify';
import { instance } from './grapqhl';
import { webhooksPlugin } from './webhooks/webhooks.plugin';

export const server = fastify();

server.route({
	url: '/graphql',
	method: ['GET', 'POST', 'OPTIONS'],
	handler: async (req, reply) => {
		const response = await instance.handleNodeRequest(req, {
			req,
			reply,
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
