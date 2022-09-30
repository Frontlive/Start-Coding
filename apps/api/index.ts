import { createServer } from "@graphql-yoga/node";
import { makeSchema, queryField } from "nexus";
import { env } from "./config";
import { logger } from "./logger";

const helloWorld = queryField("helloWorld", {
  type: "String",
  resolve() {
    return "Hello World";
  },
});

const schema = makeSchema({
  types: [helloWorld],
  outputs: {
    schema: __dirname + "/schema.gql",
  },
});

const server = createServer({
  port: env.PORT,
  schema,
});

const main = async () => {
  try {
    const instance = await server.start();

    logger.success(`Server is running on port ${env.PORT}`);
  } catch (err) {
    logger.error(err);

    process.exit(1);
  }
};

main().catch(logger.error);
