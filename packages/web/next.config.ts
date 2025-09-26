import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  turbopack: {},
  images: {
    unoptimized: true,
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days in seconds
  },
};

export default analyzer(nextConfig);
