
import { createReadStream } from "fs";
import path from "path";
import csv from "csv-parser";
import { Photo, photosTable } from "@core/photos/photos.sql";
import { Collections } from "@core/collections";
import { db } from "@db/index";

interface FormData {
  Name: string;
  Pictures1: string | null;
  Pictures2: string | null;
  Pictures3: string | null;
  Pictures4: string | null;
  Pictures5: string | null;
}

type FormDataResult = {
  name: string;
  url: string;
};

export async function photosSeeder() {
  const results: FormDataResult[] = [];
  createReadStream(path.join(__dirname, "form.csv"))
    .pipe(csv())
    .on("data", (data: FormData) => {
      if (data.Pictures1) {
        results.push({
          name: data.Name,
          url: data.Pictures1,
        });
      }
      if (data.Pictures2) {
        results.push({
          name: data.Name,
          url: data.Pictures2,
        });
      }
      if (data.Pictures3) {
        results.push({
          name: data.Name,
          url: data.Pictures3,
        });
      }
      if (data.Pictures4) {
        results.push({
          name: data.Name,
          url: data.Pictures4,
        });
      }
      if (data.Pictures5) {
        results.push({
          name: data.Name,
          url: data.Pictures5,
        });
      }
    })
    .on("end", async () => {
      const list: Partial<Photo>[] & Pick<Photo, "collection_id" | "url">[] =
        [];

      await Promise.all(
        results.map(async (data) => {
          const collection = await Collections.fromName(data.name);
          if (!collection) {
            return;
          }
          list.push({ collection_id: collection.public_id, url: data.url });
        })
      );

      db.insert(photosTable).values(list).execute();
      console.log("done adding data");
    });
}
