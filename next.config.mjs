// Add the withCloudflare adapter
import { withCloudflare } from '@cloudflare/next-on-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove standalone output as it's not needed with Cloudflare adapter
  // output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // This is important for Cloudflare compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs' module on the client to prevent this error on build:
      // https://github.com/vercel/next.js/issues/7755
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

// Export with Cloudflare adapter
export default withCloudflare(nextConfig);
