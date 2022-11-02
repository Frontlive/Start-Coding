import { builder } from '../../builder';

export const User = builder.prismaObject('User', {
	findUnique: (user) => ({ id: user.id }),
	fields: (t) => ({
		id: t.exposeID('id'),
		email: t.exposeString('email'),
		name: t.exposeString('name'),
		postedTasks: t.relation('posted_tasks'),
	}),
});
