import { db } from "@db/index";
import { and, eq, isNull } from "drizzle-orm";
import { collectionsTable } from "./collections.sql";

export const all = async () => {
  return db
    .select()
    .from(collectionsTable)
    .where(isNull(collectionsTable.deleted_at));
};

export const featured = async () => {
  return db
    .select()
    .from(collectionsTable)
    .where(
      and(
        isNull(collectionsTable.deleted_at),
        eq(collectionsTable.negotiable, true)
      )
    );
};

export const fromName = async (name: string) => {
  return db
    .select()
    .from(collectionsTable)
    .where(eq(collectionsTable.name, name))
    .then((items) => items[0]);
};

export * as Collections from "./index";
