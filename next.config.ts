import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      // pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    };

    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });
    // config.resolve.fallback = {
    //   stream: require.resolve("stream-browserify"),
    //   crypto: require.resolve("crypto-browserify"),
    //   buffer: require.resolve("buffer/"),
    //   // Add other modules as needed
    // };
    return config;
  },
};

export default nextConfig;
