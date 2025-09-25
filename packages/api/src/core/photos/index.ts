import { db } from "@db/index";
import { photosTable } from "./photos.sql";
import { eq } from "drizzle-orm";

export const fromCollectionId = (collectionId: string) => {
  return db
    .select()
    .from(photosTable)
    .where(eq(photosTable.collection_id, collectionId));
};

export * as Photos from "./index";