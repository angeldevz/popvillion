import {
  index,
  pgTable,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { createdAt, deletedAt, id, publicId } from "@utils/sql";
import { InferSelectModel } from "drizzle-orm";

export const photosTable = pgTable(
  "photos",
  {
    ...id,
    ...publicId,
    collection_id: varchar({ length: 36 }).notNull(),
    url:  varchar({ length: 255 }).notNull(),
    ...createdAt,
    ...deletedAt,
  },
  (table) => [
    uniqueIndex("photos_public_id_idx").on(table.public_id),
    index("photos_collection_id_idx").on(table.collection_id),
  ]
);

export type Photo = InferSelectModel<typeof photosTable>;