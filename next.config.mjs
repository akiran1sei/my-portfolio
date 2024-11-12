/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lpxfluplifv7xzbr.public.blob.vercel-storage.com"],
  },
  webpack: (config, { isServer, dev }) => {
    // ace-buildsのソースマップを無効化
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.js$/,
      enforce: "pre",
      use: ["source-map-loader"],
    });

    return config;
  },
};

export default nextConfig;
