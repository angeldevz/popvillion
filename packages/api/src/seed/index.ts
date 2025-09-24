import { db } from "../db";
import { collectionsSeeder } from "./collections";

const tables = [collectionsSeeder];

async function seeder() {
  console.log("Seeding...");
  await Promise.allSettled(tables.map((seed) => seed()));
  console.log("Seeding complete!");
}

seeder();
