/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/consulting',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/solutions',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
