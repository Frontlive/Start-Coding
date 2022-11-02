import { builder } from '../../builder';
import { User } from './types';

builder.queryField('allUsers', (t) =>
	t.prismaField({
		type: [User],
		async resolve(query, _parent, _args, { db }, _info) {
			return await db.user.findMany({
				...query,
			});
		},
	}),
);
