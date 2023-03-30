import type { TasksService } from './modules/core/services/taskService';
import {
	makeTasksService,
	TASKS_SERVICE_SYMBOL,
} from './modules/core/services/taskService';
import { asFunction, asValue, createContainer } from 'awilix';
import type { DB } from './dependencies/db';
import { DB_SYMBOL, db } from './dependencies/db';

export type Deps = {
	[DB_SYMBOL]: DB;
	[TASKS_SERVICE_SYMBOL]: TasksService;
};

export const container = createContainer<Deps>();

container.register({
	[DB_SYMBOL]: asValue(db),
	[TASKS_SERVICE_SYMBOL]: asFunction(makeTasksService),
});

export type Container = typeof container;
