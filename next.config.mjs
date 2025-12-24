/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 画像設定の警告修正 (domains → remotePatterns)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lpxfluplifv7xzbr.public.blob.vercel-storage.com",
      },
    ],
  },

  // 2. Turbopackエラーを消すための設定
  // Next.js 16では experimental の中ではなく、外に出す必要があります
  turbo: {
    // 空のオブジェクトでOK
  },

  webpack: (config, { isServer, dev }) => {
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
