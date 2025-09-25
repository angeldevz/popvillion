import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../web/src/generated/schema.graphql",
  documents: ["./src/**/*.graphql"],
  generates: {
    "../web/src/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true, // generate hooks
      },
    },
  },
};
export default config;
