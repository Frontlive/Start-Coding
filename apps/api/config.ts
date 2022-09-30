import { cleanEnv, num } from "envalid";
import { default as dotenv } from "dotenv";

dotenv.config();

export const env = cleanEnv(process.env, {
  PORT: num(),
});
