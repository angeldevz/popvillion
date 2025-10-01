import { db } from "@db/index";
import { eq } from "drizzle-orm";
import { photosTable } from "./photos.sql";

export const fromCollectionId = async (collectionId: string) => {
  return db
    .select()
    .from(photosTable)
    .where(eq(photosTable.collection_id, collectionId));
};

export * as Photos from "./index";
