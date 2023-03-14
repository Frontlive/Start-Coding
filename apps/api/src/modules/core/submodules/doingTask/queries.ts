import type { Prisma } from '@prisma/client';
import { TaskStatus } from '@prisma/client';
import { AsyncLocalStorage } from 'async_hooks';
import { builder } from '../../../../builder';
import type { PaginationArgs } from '../../../../types';
import { PaginationInputType } from '../../../../utils';
import { TASKS_SERVICE_SYMBOL } from '../../services/taskService';
import { Task } from './types';

export const taskLocalStorage = new AsyncLocalStorage<{
	query: {
		include?: Prisma.TaskInclude;
		select?: Prisma.TaskSelect;
	};
	args: {
		pagination?: PaginationArgs | undefined | null;
		filter?: Prisma.TaskWhereInput | undefined | null;
	};
}>();

const StatusEnumType = builder.enumType(TaskStatus, { name: 'TaskStatus' });

const TaskFilterInputType = builder.inputType('TaskFilterInput', {
	fields: (t) => {
		return {
			status: t.field({
				type: StatusEnumType,
				required: false,
				defaultValue: TaskStatus.ACTIVE,
			}),
		};
	},
});

builder.queryField('tasks', (t) =>
	t.prismaField({
		type: [Task],
		args: {
			pagination: t.arg({ type: PaginationInputType, required: false }),
			filter: t.arg({ type: TaskFilterInputType, required: false }),
		},
		resolve: async (query, _root, args, ctx, _info) => {
			return taskLocalStorage.run(
				{
					query,
					args: {
						pagination: args.pagination,
						filter: {
							status: args.filter?.status ?? TaskStatus.ACTIVE,
						},
					},
				},
				async () => {
					const tasksService = ctx.container.resolve(TASKS_SERVICE_SYMBOL);

					const allTasks = await tasksService.getTasks();

					return allTasks;
				},
			);
		},
	}),
);
