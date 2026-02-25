import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
