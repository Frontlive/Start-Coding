import { removeNull } from '../../../utils';
import { DB_SYMBOL } from '../../../dependencies/db';
import type { Deps } from '../../../di';
import { mapPaginationFields } from '../../../utils';
import type {
	TasksArgs,
	TasksQuery,
} from '../submodules/performingTask/queries';
import type { Prisma } from '@prisma/client';
import { D } from '@mobily/ts-belt';
import { SearchString } from '../../../builder';

export const makeTasksService = (ctx: Deps) => {
	const db = ctx[DB_SYMBOL];

	return {
		async getTasks(query: TasksQuery, args: TasksArgs) {
			if (!args.filter) {
				return db.task.findMany({
					...query,
					...mapPaginationFields(removeNull(args.pagination)),
				});
			}

			const where = Object.entries(args.filter).reduce((acc, [key, value]) => {
				if (value instanceof SearchString) {
					return D.set(acc, key, { contains: value.string });
				}
				if (value) {
					return D.set(acc, key, value);
				}
				return acc;
			}, {} as Prisma.TaskWhereInput);

			return db.task.findMany({
				...query,
				...mapPaginationFields(removeNull(args.pagination)),
				where,
			});
		},
	};
};

export type TasksService = ReturnType<typeof makeTasksService>;
export const TASKS_SERVICE_SYMBOL = Symbol('TASKS_SERVICE_SYMBOL');
