"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const builder_1 = require("./builder");
require("./query");
// Export a **GraphQLSchema**
exports.schema = builder_1.builder.toSchema();
