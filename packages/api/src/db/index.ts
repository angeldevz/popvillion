import "dotenv/config";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

export const db = drizzle(neon(process.env.DATABASE_URL!));
