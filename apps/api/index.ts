import '@total-typescript/ts-reset';
import { env } from './src/config';
import { logger } from './src/logger';
import { writeFile } from 'node:fs/promises';
import { server } from './src/server';
import { schemaAsString } from './src/graphql';

const main = async () => {
	try {
		await writeFile('./schema.graphql', schemaAsString);
		server.listen({ port: env.PORT });

		logger.success(`🚀 Server ready at http://localhost:${env.PORT}`);
	} catch (err) {
		logger.error(err);

		process.exit(1);
	}
};

main().catch(logger.error);
