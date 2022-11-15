import {
	inputPaginationFields,
	prismaPaginationFields,
	removePaginationFields,
} from './../../utils/paginationFields';
import { builder } from '../../builder';
import { StatusEnum, Task } from './types';
import { removeNull } from '../../utils/removeNull';
import type { GetPothosInputType } from '../../types';

const AllTasksInput = builder.inputType('AllTasksInput', {
	fields: (t) => ({
		...inputPaginationFields(t),
		status: t.field({
			type: StatusEnum,
			required: false,
		}),
	}),
});

export type AllTasksInputType = GetPothosInputType<typeof AllTasksInput>;

builder.queryField('tasks', (t) =>
	t.prismaField({
		type: [Task],
		args: {
			input: t.arg({
				type: AllTasksInput,
				required: false,
			}),
		},
		async resolve(query, _parent, args, { db }, _info) {
			const mapped = Object.fromEntries(
				Object.entries(args.input ?? {}).map(([key, value]) => [
					key,
					removeNull(value),
				]),
			);

			return await db.task.findMany({
				where: removePaginationFields(mapped),
				...prismaPaginationFields(args.input),
				...query,
			});
		},
	}),
);

builder.queryField('task', (t) =>
	t.prismaField({
		type: Task,
		args: {
			id: t.arg.id({ required: true }),
		},
		resolve(query, _parent, args, { db }, _info) {
			return db.task.findUnique({
				where: { id: Number(args.id) },
				...query,
			});
		},
	}),
);
