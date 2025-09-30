import {
  CollectionItem,
  collectionsTable,
  Condition,
} from "@core/collections/collections.sql";
import { db } from "@db/index";
import csv from "csv-parser";
import { createReadStream } from "fs";
import path from "path";

interface FormData {
  Timestamp: string | null;
  Available: string;
  Name: string;
  Series: string | null;
  Sticker: string | null;
  Condition: Condition;
  Pictures: string | null;
  Price: string;
}

type FormDataResult = Partial<CollectionItem> &
  Pick<CollectionItem, "name" | "condition">;

export async function collectionsSeeder() {
  const results: FormDataResult[] = [];
  createReadStream(path.join(__dirname, "form.csv"))
    .pipe(csv())
    .on("data", (data: FormData) => {
      const price = parseInt(data.Price.replace(/[^0-9.]/g, ""), 10);
      results.push({
        name: data.Name,
        series: data.Series,
        sticker: data.Sticker,
        condition: data.Condition,
        remarks: null,
        stocks: parseInt(data.Available),
        price,
        negotiable: price > 3000,
      });
    })
    .on("end", () => {
      db.insert(collectionsTable).values(results).execute();
      console.log("done adding data");
    });
}
