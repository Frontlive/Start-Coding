import { FancyReporter, WinstonReporter, default as consola } from 'consola';
import { env } from './config';

const Reporter = env.isDev ? FancyReporter : WinstonReporter;

export const logger = consola.create({
	reporters: [new Reporter()],
});
