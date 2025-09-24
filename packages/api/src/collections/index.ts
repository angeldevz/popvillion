import { isNull } from "drizzle-orm";
import { db } from "../db";
import { collectionsTable } from "./collections.sql";

export const all = () => {
  return db
    .select()
    .from(collectionsTable)
    .where(isNull(collectionsTable.deleted_at));
};

export * as Collections from "./index";
