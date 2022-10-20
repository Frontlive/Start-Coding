import { timingSafeEqual } from 'node:crypto';
import fp from 'fastify-plugin';
import { Static, Type } from '@sinclair/typebox';
import { env } from '../config';

export const WebhookPayload = Type.Object({
	email: Type.String(),
	name: Type.String(),
	nickname: Type.String(),
	picture: Type.String(),
	user_id: Type.String(),
});

export const webhooksPlugin = fp(async (fastify, _opts) => {
	fastify.route<{
		Headers: { 'x-start-coding-auth'?: string };
		Body: Static<typeof WebhookPayload>;
	}>({
		url: '/webhooks/post-register',
		method: 'POST',
		schema: {
			body: WebhookPayload,
		},
		handler: async (request, reply) => {
			try {
				const secret = request.headers['x-start-coding-auth'];

				if (
					!secret ||
					!timingSafeEqual(Buffer.from(secret), Buffer.from(env.WEBHOOK_SECRET))
				) {
					return reply.status(401).send('Incorrect x-start-coding-auth header');
				}

				const payload = request.body;

				await fastify.db.user.create({
					data: {
						email: payload.email,
						name: payload.name,
						nickname: payload.nickname,
						picture: payload.picture,
						user_id: payload.user_id,
					},
				});

				return reply.status(200).send('OK');
			} catch (e) {
				return reply.status(500).send('Webhook error');
			}
		},
	});
});
