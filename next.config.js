/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.themealdb.com'],
    domains: ['cdn.countryflags.com'],
  },
  async rewrites() {
    return [
      {
        source: '/gastronomycountry/:id',
        destination: '/gastronomycountry',
      },
    ];
  },
};

module.exports = nextConfig;
