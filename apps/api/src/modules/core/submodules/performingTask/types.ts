import { TaskDifficulty, TaskStatus } from '@prisma/client';
import { builder } from '../../../../builder';

export const TaskUser = builder.prismaObject('User', {
	findUnique: (t) => ({ id: t.id }),
	fields: (t) => ({
		id: t.exposeID('id'),
	}),
});

export const Task = builder.prismaObject('Task', {
	fields: (t) => ({
		id: t.exposeID('id'),
		title: t.exposeString('title'),
		description: t.exposeString('description'),
		difficulty: t.exposeString('difficulty'),
		rating: t.exposeInt('rating'),
		status: t.exposeString('status'),
		thumbnailUrl: t.exposeString('thumbnail_url'),
		author: t.relation('author', { type: TaskUser }),
	}),
});

export const StatusEnumType = builder.enumType(TaskStatus, {
	name: 'TaskStatus',
});
export const DifficultyEnumType = builder.enumType(TaskDifficulty, {
	name: 'TaskDifficulty',
});
