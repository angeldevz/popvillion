"use client";
import { ApolloProvider } from "@apollo/client";
import client from "@utils/apollo-client";
import { PropsWithChildren } from "react";

export function Content({ children }: PropsWithChildren) {
  return (
    <main>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </main>
  );
}
