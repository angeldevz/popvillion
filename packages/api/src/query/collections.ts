import { builder } from "../builder";
import { Collections } from "../collections";

const Collection = builder.objectType("Collection", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    series: t.exposeString("series"),
    sticker: t.exposeString("sticker"),
    condition: t.exposeString("condition"),
    pictures: t.exposeStringList("pictures"),
    remarks: t.exposeString("remarks"),
    stocks: t.exposeInt("stocks"),
    price: t.exposeInt("price"),
    negotiable: t.exposeBoolean("negotiable"),
  }),
});

builder.queryField("collections", (t) =>
  t.field({
    type: [Collection],
    async resolve() {
      return Collections.all();
    },
  })
);
