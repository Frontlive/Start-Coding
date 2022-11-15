import type { UserPayload } from '@envelop/auth0';
import type { PrismaClient } from '@prisma/client';
import type { FastifyReply, FastifyRequest } from 'fastify';

export type Context = {
	auth0?: UserPayload;
	req: FastifyRequest;
	reply: FastifyReply;
	db: PrismaClient;
};

export type GetPothosInputType<MaybePothosInput> =
	MaybePothosInput extends PothosSchemaTypes.InputObjectRef<infer InputType>
		? InputType
		: never;
