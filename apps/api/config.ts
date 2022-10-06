import { cleanEnv, num, str } from 'envalid';
import { default as dotenv } from 'dotenv';

dotenv.config();

export const env = cleanEnv(process.env, {
	PORT: num(),
	DATABASE_URL: str(),
	AUTH0_DOMAIN: str(),
	BASE_URL: str(),
});
