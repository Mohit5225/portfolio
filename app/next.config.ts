import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Remove basePath and assetPrefix for dev testing at root
  // basePath: '/static_portfolio',
  // assetPrefix: '/static_portfolio/',
};

export default nextConfig;