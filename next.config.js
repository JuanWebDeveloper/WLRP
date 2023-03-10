/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.themealdb.com', 'cdn.countryflags.com'],
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
