/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");
const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: [
      "media.graphassets.com",
      "localhost",
      "api-ap-northeast-1.hygraph.com",
    ], // <== Domain name
  },
};
module.exports = nextConfig;
