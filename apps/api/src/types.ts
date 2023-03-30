import type { Container } from './di';
import type { UserPayload } from '@envelop/auth0';
import type { User } from '@prisma/client';
import type { FastifyReply, FastifyRequest } from 'fastify';
import type { InputObjectRef } from '@pothos/core';

export type BaseContext = {
	req: FastifyRequest;
	reply: FastifyReply;
	container: Container;
	auth0?: UserPayload;
};

export type ContextExtension = {
	user: User | null;
};

export type Context = BaseContext & ContextExtension;

export type TimeStamps = {
	created_at: Date;
	updated_at: Date;
};

export type PaginationArgs = {
	page?: number | null | undefined;
	perPage?: number | null | undefined;
};

export type UnwrapInputObjectRef<T> = T extends InputObjectRef<infer C>
	? C
	: never;
