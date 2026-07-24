import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Pin the workspace root — a lockfile in a parent dir otherwise confuses
  // Turbopack's root inference.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
