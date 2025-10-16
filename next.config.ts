import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile local workspace packages
  transpilePackages: ["ui-kit"],
  turbopack: {
    // Ensure the workspace root is this app directory (avoids multiple lockfile confusion)
    root: __dirname,
  },
};

export default nextConfig;
