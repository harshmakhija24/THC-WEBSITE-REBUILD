import type { NextConfig } from "next";

const isBuild =
  process.argv.includes("build") ||
  process.env.NODE_ENV === "production" ||
  process.env.GITHUB_ACTIONS === "true";

const repoName = "THC-WEBSITE-REBUILD";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isBuild ? `/${repoName}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
