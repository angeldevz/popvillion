import { Collections } from "@core/collections";
import { builder } from "../builder";
import { Photo } from "./photos";
import { Photos } from "@core/photos";

export const Collection = builder.objectType("Collection", {
  fields: (t) => ({
    id: t.exposeID("public_id"),
    name: t.exposeString("name"),
    series: t.exposeString("series"),
    sticker: t.exposeString("sticker"),
    condition: t.exposeString("condition"),
    remarks: t.exposeString("remarks"),
    stocks: t.exposeInt("stocks"),
    price: t.exposeInt("price"),
    negotiable: t.exposeBoolean("negotiable"),
    photo: t.field({
      type: [Photo],
      resolve: (collection) => {
        return Photos.fromCollectionId(collection.public_id);
      },
    }),
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
