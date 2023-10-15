/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ca", "es"],
    defaultLocale: "en",
    domains: undefined,
    localeDetection: undefined,
  },
};

module.exports = nextConfig;
