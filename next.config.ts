import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: { resolve: { alias: any } }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": require("path").resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
