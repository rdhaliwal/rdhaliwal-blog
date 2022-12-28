/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals['node:fs'] = false;
    config.externals['node:path'] = false;

    return config;
  },
};

module.exports = nextConfig;
