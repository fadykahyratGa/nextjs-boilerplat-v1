import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      moduleIds: "deterministic",
    };
    return config;
  },
};

export default nextConfig;
