import DirectivePlugin from '@pothos/plugin-directives';
import SchemaBuilder from '@pothos/core';
import type { Context } from './types';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import PluginPrisma from '@pothos/plugin-prisma';
import { client } from './prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';

export const builder = new SchemaBuilder<{
	Context: Context;
	Scalars: {
		Date: { Input: Date; Output: Date };
		DateTime: { Input: Date; Output: Date };
	};
	Directives: {
		rateLimit: {
			locations: 'OBJECT' | 'FIELD_DEFINITION';
			args: { limit: number; duration: number };
		};
	};
	PrismaTypes: PrismaTypes;
}>({
	plugins: [DirectivePlugin, PluginPrisma],
	prisma: {
		client,
	},
});

builder.addScalarType('Date', DateResolver, {});
builder.addScalarType('DateTime', DateTimeResolver, {});

builder.prismaObject('Task', {
	findUnique: (task) => ({ id: task.id }),
	fields: (t) => ({
		id: t.exposeID('id'),
		title: t.exposeString('title'),
		description: t.exposeString('description'),
	}),
});

builder.prismaObject('User', {
	findUnique: (user) => ({ id: user.id }),
	fields: (t) => ({
		id: t.exposeID('id'),
		email: t.exposeString('email'),
		name: t.exposeString('name'),
		postedTasks: t.relation('posted_tasks'),
	}),
});

builder.queryField('allUsers', (t) =>
	t.prismaField({
		type: ['User'],
		async resolve(query, _parent, _args, _ctx, _info) {
			return await client.user.findMany({
				...query,
			});
		},
	}),
);

builder.queryType({});
