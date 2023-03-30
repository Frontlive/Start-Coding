import { cleanEnv, port, str } from 'envalid';
import { default as dotenv } from 'dotenv';

dotenv.config();

export const env = cleanEnv(process.env, {
	PORT: port(),
	DATABASE_URL: str(),
	AUTH0_DOMAIN: str(),
	BASE_URL: str(),
	WEBHOOK_SECRET: str(),
	FRONTEND_BASE_URL: str(),
});
