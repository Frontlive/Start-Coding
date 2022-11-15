import DirectivePlugin from '@pothos/plugin-directives';
import SchemaBuilder from '@pothos/core';
import type { Context } from './types';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import PluginPrisma from '@pothos/plugin-prisma';
import { client } from './prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';

type SchemaCustomTypes = {
	Context: Context;
	Scalars: {
		Date: { Input: Date; Output: Date };
		DateTime: { Input: Date; Output: Date };
		File: { Input: File; Output: never };
	};
	Directives: {
		rateLimit: {
			locations: 'OBJECT' | 'FIELD_DEFINITION';
			args: { limit: number; duration: number };
		};
	};
	PrismaTypes: PrismaTypes;
	DefaultFieldNullability: true;
	DefaultInputFieldRequiredness: true;
};

export type TypesWithDefaults =
	PothosSchemaTypes.ExtendDefaultTypes<SchemaCustomTypes>;

export const builder = new SchemaBuilder<SchemaCustomTypes>({
	plugins: [DirectivePlugin, PluginPrisma],
	prisma: {
		client,
	},
	defaultFieldNullability: true,
	defaultInputFieldRequiredness: true,
});

builder.scalarType('File', {
	serialize: () => {
		throw new Error('Uploads can only be used as input types');
	},
});
builder.addScalarType('Date', DateResolver, {});
builder.addScalarType('DateTime', DateTimeResolver, {});

builder.queryType({});
