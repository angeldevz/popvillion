"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
// Example type
builder_1.builder.queryType({
    name: "Hello",
    fields: (t) => ({
        hello: t.string({
            resolve: () => "Hello from Pothos GraphQL! Yey!",
        }),
    }),
});
