import type { UserPayload } from '@envelop/auth0';
import type { FastifyReply, FastifyRequest } from 'fastify';

export type Context = {
	auth0?: UserPayload;
	req: FastifyRequest;
	reply: FastifyReply;
};
