/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/rails/**',
      },
      {
        protocol: 'https',
        hostname: 'wabisabi-app.herokuapp.com',
        pathname: '/rails/**',
      },
    ],
  },
};

module.exports = nextConfig;
