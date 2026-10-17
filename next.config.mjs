import path from "node:path";

// Plain JS on purpose: hosts without native SWC (old glibc, e.g. Hostinger) cannot load next.config.ts.
/** @type {import("next").NextConfig} */
const nextConfig = {
  // The git repo root is this folder; without it Turbopack picks up the parent lockfile.
  turbopack: { root: path.resolve(".") },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [40, 60, 75],
    // sources are capped at 2048px, so never ask the optimizer to upscale
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
