import { default as consola, BasicReporter } from "consola";

export const logger = consola.create({
  reporters: [new BasicReporter()],
});
