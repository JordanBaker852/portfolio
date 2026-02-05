import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  experimental: {
    turbopackUseSystemTlsCerts: true
  },
};

export default nextConfig;
