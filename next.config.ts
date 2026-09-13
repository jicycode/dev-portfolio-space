import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dev-portfolio-space",
  assetPrefix: "/dev-portfolio-space",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
