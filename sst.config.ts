/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "popvillion",
      region: "ap-southeast-1",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: input?.stage === "production" ? "aws" : "local",
    };
  },
  async run() {
    const infra = await import("./infra");

    return {
      SiteUrl: infra.website.url,
      GraphqlApiUrl: infra.graphqlAPI.url,
    };
  },
});
