/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Removed to enable dynamic routes on Vercel
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
