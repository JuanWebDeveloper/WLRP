/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.themealdb.com', 'cdn.countryflags.com'],
  },
};

module.exports = nextConfig;
