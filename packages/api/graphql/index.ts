import { createYoga } from "graphql-yoga";
import SchemaBuilder from "@pothos/core";

// Pothos schema
const builder = new SchemaBuilder<{ Context: {} }>({
  notStrict:
    "Pothos may not work correctly when strict mode is not enabled in tsconfig.json",
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => "Hello from Pothos + Yoga on AWS Lambda!",
    }),
  }),
});

const schema = builder.toSchema();

// Yoga server as Lambda handler
export const main = createYoga({ schema });
