import type { APIGatewayProxyEventV2, Context } from "aws-lambda";
import { createYoga } from "graphql-yoga";
import { schema } from "@graphql/index";

const yoga = createYoga({ schema });

export async function graphqlHandler(
  event: APIGatewayProxyEventV2,
  context: Context
) {
  // Construct a Fetch API Request from Lambda event
  const request = new Request(
    `https://${event.requestContext.domainName}${event.rawPath}?${event.rawQueryString}`,
    {
      method: event.requestContext.http.method,
      headers: event.headers as Record<string, string>,
      body:
        event.body && event.isBase64Encoded
          ? Buffer.from(event.body, "base64").toString()
          : event.body,
    }
  );

  // 👇 use yoga.fetch instead of yoga.handleNodeRequest
  const response = await yoga.fetch(request, context);

  const headers: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  // Add explicit CORS for Function URL
  headers["Access-Control-Allow-Origin"] =
    "https://d3fu52h97rrvnu.cloudfront.net";
  headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization";
  headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS";

  return {
    statusCode: response.status,
    headers,
    body: await response.text(),
  };
}
