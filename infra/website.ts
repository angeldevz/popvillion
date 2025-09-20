export const website = new sst.aws.StaticSite("Website", {
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
