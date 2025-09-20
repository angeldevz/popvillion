import { builder } from "./builder";

import "./query";
// Export a **GraphQLSchema**
export const schema = builder.toSchema();
