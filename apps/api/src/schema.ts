import { builder } from './builder';

import './modules/auth/resolvers';

export const schema = builder.toSchema();
