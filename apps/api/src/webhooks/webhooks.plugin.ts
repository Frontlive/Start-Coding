import { timingSafeEqual, createHmac } from 'node:crypto';
import { Static, Type } from '@sinclair/typebox';
import { D } from '@mobily/ts-belt';
import { env } from '../config';
import type { FastifyPluginAsync } from 'fastify';

export const WebhookPayload = Type.Object({
	email: Type.String(),
	name: Type.String(),
	nickname: Type.String(),
	picture: Type.String(),
	user_id: Type.String(),
});

export const webhooksPlugin: FastifyPluginAsync = async (fastify, _opts) => {
	fastify.addHook('preHandler', (request, reply, next) => {
		const hmacFromServer = request.headers['x-start-coding-auth'];

		const body = request.body;

		const hmac = createHmac('sha256', env.WEBHOOK_SECRET)
			.update(JSON.stringify(body))
			.digest('hex');

		if (
			!hmacFromServer ||
			typeof hmacFromServer !== 'string' ||
			!timingSafeEqual(Buffer.from(hmacFromServer), Buffer.from(hmac))
		) {
			return reply.status(401).send('Incorrect x-start-coding-auth header');
		}

		return next();
	});

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
				const body = request.body;

				await fastify.db.user.create({
					data: D.selectKeys(body, [
						'email',
						'name',
						'nickname',
						'picture',
						'user_id',
					]),
				});

				return reply.status(200).send('OK');
			} catch (e) {
				return reply.status(500).send('Webhook error');
			}
		},
	});

	fastify.route<{
		Headers: { 'x-start-coding-auth'?: string };
		Body: Static<typeof WebhookPayload>;
	}>({
		url: '/webhooks/post-login',
		method: 'POST',
		schema: {
			body: WebhookPayload,
		},
		handler: async (request, reply) => {
			try {
				const body = request.body;

				await fastify.db.user.update({
					where: {
						email: body.email,
					},
					data: D.selectKeys(body, ['name', 'nickname', 'picture', 'user_id']),
				});

				return reply.status(200).send('OK');
			} catch (e) {
				return reply.status(500).send('Webhook error');
			}
		},
	});
};
