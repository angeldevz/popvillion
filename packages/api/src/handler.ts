import { APIGatewayProxyHandler } from "aws-lambda";
import { createYoga } from "graphql-yoga";
import { schema } from "@graphql/index";

const yoga = createYoga({ schema });

export const graphqlHandler: APIGatewayProxyHandler = async (
  event,
  context
) => {
  const request = new Request("http://localhost/graphql", {
    method: event.httpMethod,
    headers: event.headers as any,
    body: event.body,
  });

  const response = await yoga.handle(request);

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers),
    body: await response.text(),
  };
};
