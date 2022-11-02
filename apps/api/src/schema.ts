import { builder } from './builder';

import './modules/auth/resolvers';
import './modules/tasks/types';
import './modules/users/resolvers';

export const schema = builder.toSchema();
