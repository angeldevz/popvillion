import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createdAt, deletedAt, id, publicId, updatedAt } from "../utils/sql";

export type Condition = "Mint" | "Near Mint" | "7 to 8" | "Bad Box";

export const collectionTable = pgTable("collections", {
  ...id,
  ...publicId,
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  series: varchar({ length: 255 }),
  sticker: varchar({ length: 255 }),
  condition: varchar({ length: 255 }).notNull().$type<Condition>(),
  pictures: text("pictures").array().notNull(),
  remarks: varchar({ length: 255 }),
  price: integer().notNull(),
  ...createdAt,
  ...updatedAt,
  ...deletedAt,
});
