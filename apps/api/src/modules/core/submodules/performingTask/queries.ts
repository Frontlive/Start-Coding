import type { Prisma } from '@prisma/client';
import { builder } from '../../../../builder';
import type { PaginationArgs, UnwrapInputObjectRef } from '../../../../types';
import { DateRangeInputType, PaginationInputType } from '../../../../utils';
import { TASKS_SERVICE_SYMBOL } from '../../services/taskService';
import { DifficultyEnumType, StatusEnumType, Task } from './types';

const TaskFilterInputType = builder.inputType('TaskFilterInput', {
	fields: (t) => {
		return {
			status: t.field({
				type: StatusEnumType,
				required: false,
			}),
			difficulty: t.field({ type: DifficultyEnumType, required: false }),
			title: t.field({ type: 'SearchString', required: false }),
			description: t.field({ type: 'SearchString', required: false }),
			created_at: t.field({ type: DateRangeInputType, required: false }),
			updated_at: t.field({ type: DateRangeInputType, required: false }),
		};
	},
});

type TasksFilter = UnwrapInputObjectRef<typeof TaskFilterInputType>;

export type TasksArgs = {
	pagination?: PaginationArgs | undefined | null;
	filter?: TasksFilter | undefined | null;
};

export type TasksQuery = {
	include?: Prisma.TaskInclude;
	select?: Prisma.TaskSelect;
};

builder.queryField('tasks', (t) =>
	t.prismaField({
		type: [Task],
		args: {
			pagination: t.arg({ type: PaginationInputType, required: false }),
			filter: t.arg({ type: TaskFilterInputType, required: false }),
		},
		resolve: async (query, _root, args, ctx, _info) => {
			const tasksService = ctx.container.resolve(TASKS_SERVICE_SYMBOL);

			return tasksService.getTasks(query, args);
		},
	}),
);
