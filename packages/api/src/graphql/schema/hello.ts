import { builder } from "../builder";

// Example type
builder.queryType({
  name: "Hello",
  fields: (t) => ({
    hello: t.string({
      resolve: () => "Hello from Pothos GraphQL! Yey!",
    }),
  }),
});