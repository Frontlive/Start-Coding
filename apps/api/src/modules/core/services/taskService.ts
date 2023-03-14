import { removeNull } from './../../../utils';
import { DB_SYMBOL } from '../../../dependencies/db';
import type { Deps } from '../../../di';
import { mapPaginationFields } from '../../../utils';
import { taskLocalStorage } from '../submodules/doingTask/queries';

export const makeTasksService = (ctx: Deps) => {
	const db = ctx[DB_SYMBOL];

	const { query, args } = taskLocalStorage.getStore() ?? {
		query: {},
		args: { page: 1, perPage: 10 },
	};

	return {
		async getTasks() {
			return db.task.findMany({
				...query,
				...mapPaginationFields(removeNull(args.pagination)),
				where: args.filter ?? {},
			});
		},
	};
};

export type TasksService = ReturnType<typeof makeTasksService>;
export const TASKS_SERVICE_SYMBOL = Symbol('TASKS_SERVICE_SYMBOL');
