"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("./schema"); // Your Pothos schema
const http_1 = require("http");
const yoga = (0, graphql_yoga_1.createYoga)({
    schema: schema_1.schema,
    logging: true,
});
const server = (0, http_1.createServer)(yoga);
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`GraphQL Yoga running at http://localhost:${PORT}/graphql`);
});
