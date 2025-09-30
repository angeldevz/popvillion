import { createdAt, deletedAt, id, publicId, updatedAt } from "@utils/sql";
import { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export type Condition = "Mint" | "Near Mint" | "7 to 8" | "Bad Box";

export const collectionsTable = pgTable(
  "collections",
  {
    ...id,
    ...publicId,
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }),
    series: varchar({ length: 255 }),
    sticker: varchar({ length: 255 }),
    condition: varchar({ length: 255 }).notNull().$type<Condition>(),
    remarks: varchar({ length: 255 }),
    stocks: integer().notNull().default(0),
    price: integer().notNull().default(0),
    negotiable: boolean().notNull().default(true),
    ...createdAt,
    ...updatedAt,
    ...deletedAt,
  },
  (table) => [uniqueIndex("collections_public_id_idx").on(table.public_id)]
);

export type CollectionItem = InferSelectModel<typeof collectionsTable>;
