import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql", // replace with your GraphQL endpoint
    headers: {
      // optional auth headers
      // Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
