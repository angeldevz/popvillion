// scripts/dump-schema.ts
import { writeFileSync } from "fs";
import { printSchema } from "graphql";
import { schema } from "../schema"; // import your backend's schema

writeFileSync("../web/src/generated/schema.graphql", printSchema(schema));
