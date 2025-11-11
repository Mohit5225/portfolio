import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/static_portfolio',
  assetPrefix: '/static_portfolio/',
};

export default nextConfig;
