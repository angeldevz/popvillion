import { photosSeeder } from "./photos";

type SeedHandler = () => Promise<void>;

const tables: SeedHandler[] = [photosSeeder];

async function seeder() {
  console.log("Seeding...");
  await Promise.all(
    tables.map(async (seed) => {
      try {
        await seed();
      } catch (e) {
        console.log(e);
      }
    })
  );
  console.log("Seeding complete!");
}

seeder();
