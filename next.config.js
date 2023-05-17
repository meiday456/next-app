/** @type {import("next").NextConfig} */
const StylelintPlugin = require("stylelint-webpack-plugin");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const nextConfig = {
  experimental: {
  },
  images: {
    domains: ["image.tmdb.org"],
    deviceSizes: [600, 1000, 1400, 2000, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = (phase, defaultConfig)=>{
  return withBundleAnalyzer(defaultConfig)
}
