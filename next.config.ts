import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
  allowedDevOrigins: ["http://localhost:3000", "192.168.1.15"],
};

export default nextConfig;
