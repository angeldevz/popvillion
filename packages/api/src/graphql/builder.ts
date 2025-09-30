import SchemaBuilder from "@pothos/core";
import { Objects } from "./objects";

export const builder = new SchemaBuilder<{
  Objects: Objects;
}>({});

// define at least an empty object
builder.queryType({
  fields: (t) => ({
    _health: t.boolean({
      resolve: () => true,
    }),
  }),
});
