/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  distDir: 'dist',
  webpack: (config, { isServer }) => {
    // This rule will only be applied in client-side builds
    if (!isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
    }

    // Important: return the modified config
    return config;
  },
};
