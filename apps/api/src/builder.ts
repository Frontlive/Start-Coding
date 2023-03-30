import DirectivePlugin from '@pothos/plugin-directives';
import SchemaBuilder from '@pothos/core';
import type { Context } from './types';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import PluginPrisma from '@pothos/plugin-prisma';
import { client } from './prisma';
import PluginValidation from '@pothos/plugin-validation';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import type { SearchString } from './scalarTypes';

export type BuilderContext = {
	PrismaTypes: PrismaTypes;
	Context: Context;
	Scalars: {
		SearchString: { Input: SearchString; Output: SearchString };
		Date: { Input: Date; Output: Date };
		DateTime: { Input: Date; Output: Date };
	};
	Directives: {
		rateLimit: {
			locations: 'OBJECT' | 'FIELD_DEFINITION';
			args: { limit: number; duration: number };
		};
	};
};

export const builder = new SchemaBuilder<BuilderContext>({
	plugins: [DirectivePlugin, PluginPrisma, PluginValidation],
	prisma: {
		client,
	},
});

builder.addScalarType('Date', DateResolver, {});
builder.addScalarType('DateTime', DateTimeResolver, {});

builder.scalarType('SearchString', {
	serialize: (s) => s.value,
	parseValue: (s: unknown) => {
		if (typeof s !== 'string') {
			throw new Error('SearchString must be a string');
		}

		return { value: s, type: 'SearchString' };
	},
});

builder.queryType({});
// builder.mutationType({});
// builder.subscriptionType({});
