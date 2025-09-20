"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("./schema");
const yoga = (0, graphql_yoga_1.createYoga)({ schema: schema_1.schema });
const graphqlHandler = async (event, context) => {
    const request = new Request("http://localhost/graphql", {
        method: event.httpMethod,
        headers: event.headers,
        body: event.body,
    });
    const response = await yoga.handle(request);
    return {
        statusCode: response.status,
        headers: Object.fromEntries(response.headers),
        body: await response.text(),
    };
};
exports.graphqlHandler = graphqlHandler;
