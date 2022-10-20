import { PrismaClient } from '@prisma/client';
import { env } from './config';

export const client = new PrismaClient({
	log: env.isDev ? ['query', 'info', 'warn'] : [],
});
