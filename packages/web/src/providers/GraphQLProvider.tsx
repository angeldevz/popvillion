'use client';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { PropsWithChildren, useMemo } from "react";

export function GraphQLProvider({ children }: PropsWithChildren) {
  const client = useMemo(
    () =>
      new ApolloClient({
        link: new HttpLink({
          uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, // replace with your GraphQL endpoint
          headers: {
            // optional auth headers
            // Authorization: `Bearer ${token}`,
          },
        }),
        cache: new InMemoryCache(),
      }),
    []
  );
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
