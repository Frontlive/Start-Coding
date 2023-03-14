import { builder } from './builder';

import './modules/auth/queries';
import './modules/core/queries';

export const schema = builder.toSchema();
