export const graphqlAPI = new sst.aws.AppSync("GraphQLAPI", {
  schema: "packages/api/graphql/schema/index.graphql",
});

export const lambdaDS = graphqlAPI.addDataSource({
  name: "lambdaDS",
  lambda: "packages/api/lambda.main",
});

// Generic resolver for all queries
graphqlAPI.addResolver("*", {
  dataSource: lambdaDS.name,
});
