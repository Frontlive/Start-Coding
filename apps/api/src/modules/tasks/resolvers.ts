import {
	inputPaginationFields,
	prismaPaginationFields,
	removePaginationFields,
} from './../../utils/paginationFields';
import { builder } from '../../builder';
import { StatusEnum, Task, DifficultyEnum } from './types';
import { removeNull } from '../../utils/removeNull';
import type { GetPothosInputType } from '../../types';

const tasksInput = builder.inputType('TasksInput', {
	fields: (t) => ({
		...inputPaginationFields(t),
		status: t.field({
			type: StatusEnum,
			required: false,
		}),
	}),
});

export type TasksInputType = GetPothosInputType<typeof tasksInput>;

builder.queryField('tasks', (t) =>
	t.prismaField({
		type: [Task],
		args: {
			input: t.arg({
				type: tasksInput,
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

			const where = removePaginationFields(mapped);

			return await db.task.findMany({
				where,
				...prismaPaginationFields(args.input),
				...query,
			});
		},
	}),
);

const taskInput = builder.inputType('TaskInput', {
	fields: (t) => ({
		id: t.field({
			type: 'Int',
			required: true,
		}),
	}),
});

export type TaskInputType = GetPothosInputType<typeof taskInput>;

builder.queryField('task', (t) =>
	t.prismaField({
		type: Task,
		args: {
			input: t.arg({
				type: taskInput,
				required: true,
			}),
		},
		resolve(query, _parent, args, { db }, _info) {
			return db.task.findUnique({
				where: args.input,
				...query,
			});
		},
	}),
);

const createTaskInput = builder.inputType('CreateTasksInput', {
	fields: (t) => ({
		title: t.string(),
		description: t.string(),
		thumbnail_url: t.string(),
		status: t.field({ type: StatusEnum }),
		difficulty: t.field({ type: DifficultyEnum }),
	}),
});

export type CreateTaskInputType = GetPothosInputType<typeof createTaskInput>;

builder.mutationField('createTask', (t) => {
	return t.prismaField({
		type: Task,
		args: {
			input: t.arg({
				type: createTaskInput,
				required: true,
			}),
		},
		resolve(query, _parent, args, { db, user }, _info) {
			return db.task.create({
				data: {
					...args.input,
					rating: 0,
					user: {
						connect: {
							id: user?.id,
						},
					},
				},
				...query,
			});
		},
	});
});

const updateTaskInput = builder.inputType('UpdateTasksInput', {
	fields: (t) => ({
		id: t.int({ required: true }),
		title: t.string({ required: false }),
		description: t.string({ required: false }),
		thumbnail_url: t.string({ required: false }),
		status: t.field({ type: StatusEnum, required: false }),
		difficulty: t.field({ type: DifficultyEnum, required: false }),
		rating: t.int({ required: false }),
	}),
});

export type UpdateTaskInputType = GetPothosInputType<typeof updateTaskInput>;

builder.mutationField('updateTask', (t) => {
	return t.prismaField({
		type: Task,
		args: {
			input: t.arg({
				type: updateTaskInput,
				required: true,
			}),
		},
		resolve(query, _parent, { input }, { db }, _info) {
			return db.task.update({
				where: {
					id: input.id,
				},
				data: {
					status: removeNull(input.status),
					description: removeNull(input.description),
					title: removeNull(input.title),
					thumbnail_url: removeNull(input.thumbnail_url),
					difficulty: removeNull(input.difficulty),
					rating: removeNull(input.rating),
				},
				...query,
			});
		},
	});
});

const deleteTaskInput = builder.inputType('DeleteTasksInput', {
	fields: (t) => ({
		id: t.int(),
	}),
});

export type DeleteTaskInputType = GetPothosInputType<typeof deleteTaskInput>;

builder.mutationField('deleteTask', (t) => {
	return t.prismaField({
		type: Task,
		args: {
			input: t.arg({
				type: deleteTaskInput,
				required: true,
			}),
		},
		resolve(query, _parent, { input }, { db }, _info) {
			return db.task.delete({
				where: {
					id: input.id,
				},
				...query,
			});
		},
	});
});
