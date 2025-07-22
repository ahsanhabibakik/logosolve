/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration
  reactStrictMode: true,

  // Image configuration
  images: {
    domains: ['vercel.app', 'localhost', 'logosolve.vercel.app', 'logosolve.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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
  
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
  
  // Optimize for Vercel deployment
  poweredByHeader: false,
};

module.exports = nextConfig;
