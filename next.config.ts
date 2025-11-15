import type { NextConfig } from "next";

// Use basePath for GitHub Pages deployment
// In production builds, use /my-profile to match the repository name
const basePath = process.env.NODE_ENV === "production" ? "/my-profile" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
