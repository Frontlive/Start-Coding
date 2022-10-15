import fp from 'fastify-plugin';

export const webhooksPlugin = fp(async (fastify, _opts) => {
	fastify.route({
		url: '/webhooks/post-register',
		method: 'POST',
		handler: async (_request, reply) => {
			return reply.send('OK');
		},
	});
});
