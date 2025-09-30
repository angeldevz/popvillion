// scripts/dump-schema.ts
import { schema } from "@graphql/index"; // import your backend's schema
import { mkdirSync, writeFileSync } from "fs";
import { printSchema } from "graphql";
import path from "path";

const outPath = "../web/src/generated/schema.graphql";

console.log(outPath);
// make sure the directory exists
mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, printSchema(schema));
