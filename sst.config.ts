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
    const site = new sst.aws.StaticSite("Website", {
      path: "packages/web",

      // For production deploy
      // build config (instead of buildCommand / buildOutput)
      build: {
        command: "pnpm build",
        output: "out",
      },

      // For local dev (`sst dev`)
      dev: {
        command: "pnpm dev", // runs Next.js dev server
        url: "http://localhost:3000", // Next.js default port
      },
    });

    return {
      SiteUrl: site.url,
    };
  },
});
