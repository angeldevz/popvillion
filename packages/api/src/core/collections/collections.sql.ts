import {
  boolean,
  integer,
  pgTable,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { createdAt, deletedAt, id, publicId, updatedAt } from "@utils/sql";
import { InferSelectModel } from "drizzle-orm";

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

export type Collection = InferSelectModel<typeof collectionsTable>;
