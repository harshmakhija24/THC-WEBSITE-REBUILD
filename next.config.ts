import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_ACTIONS === "1";
const repoName = "THC-WEBSITE-REBUILD";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
