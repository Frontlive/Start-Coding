import { builder } from '../../builder';

export const Task = builder.prismaObject('Task', {
	findUnique: (task) => ({ id: task.id }),
	fields: (t) => ({
		id: t.exposeID('id'),
		title: t.exposeString('title'),
		description: t.exposeString('description'),
	}),
});
