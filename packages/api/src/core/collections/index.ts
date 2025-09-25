import { eq, isNull } from "drizzle-orm";
import { collectionsTable } from "./collections.sql";
import { db } from "@db/index";

export const all = () => {
  return db
    .select()
    .from(collectionsTable)
    .where(isNull(collectionsTable.deleted_at));
};

export const fromName = (name: string) => {
  return db
    .select()
    .from(collectionsTable)
    .where(eq(collectionsTable.name, name))
    .then((items) => items[0]);
};

export * as Collections from "./index";
