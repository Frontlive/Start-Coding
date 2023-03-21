import { builder } from './builder';
import type { PaginationArgs } from './types';

export const removeNull = <T>(arg: T | null | undefined) => {
	return arg ?? undefined;
};

export const PaginationInputType = builder.inputType('PaginationInput', {
	fields(t) {
		return {
			page: t.int({
				required: false,
				validate: { min: 1 },
				defaultValue: 1,
			}),
			perPage: t.int({
				required: false,
				defaultValue: 10,
				validate: { min: 1 },
			}),
		};
	},
});

export const NumberRangeInputType = builder.inputType('NumberRangeInput', {
	fields(t) {
		return {
			gte: t.field({ type: 'Int', required: false }),
			lte: t.field({ type: 'Int', required: false }),
		};
	},
});

export const DateRangeInputType = builder.inputType('DateRangeInput', {
	fields(t) {
		return {
			gte: t.field({ type: 'Date', required: false }),
			lte: t.field({ type: 'Date', required: false }),
		};
	},
});

export const mapPaginationFields = (
	{ page, perPage }: PaginationArgs | undefined = {
		page: 1,
		perPage: 10,
	},
) => ({
	skip: ((page ?? 1) - 1) * (perPage ?? 10),
	take: perPage ?? 10,
});
