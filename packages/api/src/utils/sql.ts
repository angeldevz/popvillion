import { integer, timestamp, varchar } from "drizzle-orm/pg-core";
import { v4 } from "uuid";

export const id = {
  get id() {
    return integer().primaryKey().generatedAlwaysAsIdentity();
  },
};

export const publicId = {
  get public_id() {
    return varchar({ length: 36 })
      .notNull()
      .$defaultFn(() => v4());
  },
};

export const createdAt = {
  get created_at() {
    return timestamp().notNull().defaultNow();
  },
};

export const updatedAt = {
  get updated_at() {
    return timestamp()
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => new Date());
  },
};

export const deletedAt = {
  get deleted_at() {
    return timestamp();
  },
};
