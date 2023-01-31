import { builder } from './builder';

import './modules/auth/queries';

export const schema = builder.toSchema();
