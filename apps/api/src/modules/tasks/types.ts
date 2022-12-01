import { Status, Difficulty } from '@prisma/client';
import { builder } from '../../builder';

export const StatusEnum = builder.enumType(Status, { name: 'Status' });
export const DifficultyEnum = builder.enumType(Difficulty, {
	name: 'Difficulty',
});

export const Task = builder.prismaObject('Task', {
	findUnique: (task) => ({ id: task.id }),
	fields: (t) => ({
		id: t.exposeID('id'),
		title: t.exposeString('title'),
		status: t.expose('status', {
			type: StatusEnum,
		}),
		description: t.exposeString('description'),
		user: t.relation('user'),
	}),
});
