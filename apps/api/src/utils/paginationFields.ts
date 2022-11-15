import { D } from '@mobily/ts-belt';
import type { InputFieldBuilder } from '@pothos/core';
import { builder, TypesWithDefaults } from '../builder';
import type { AllTasksInputType } from '../modules/tasks/resolvers';
import { removeNull } from './removeNull';

const CursorInput = builder.inputRef<{ id: number }>('CursorInput').implement({
	fields: (t) => ({
		id: t.int({ required: true }),
	}),
});

export const inputPaginationFields = (
	builder: InputFieldBuilder<TypesWithDefaults, 'InputObject'>,
) => ({
	cursor: builder.field({
		type: CursorInput,
		required: false,
	}),
	take: builder.int({
		required: false,
		defaultValue: 10,
		description: 'How many records you want?',
	}),
});

export const prismaPaginationFields = (
	input: AllTasksInputType | null | undefined,
) => ({
	cursor: removeNull(input?.cursor),
	take: removeNull(input?.take),
	skip: 1,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removePaginationFields = <R extends Record<keyof any, unknown>>(
	input: R,
) => {
	return D.deleteKeys(input, ['take', 'cursor']);
};
