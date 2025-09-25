import { builder } from "../builder";

export const Photo = builder.objectType("Photo", {
  fields: (t) => ({
    id: t.exposeID("id"),
    url: t.exposeString("url"),
  }),
});
