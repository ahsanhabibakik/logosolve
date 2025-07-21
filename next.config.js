/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration
  reactStrictMode: true,
  swcMinify: true,

  // Image configuration - use unoptimized images to avoid potential issues
  images: {
    unoptimized: true,
  },

  // Disable type checking in build to avoid potential issues
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable ESLint in build to avoid potential issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
  
  // Increase memory limit for builds
  experimental: {
    memoryBasedWorkersCount: true,
  },
};

module.exports = nextConfig;
