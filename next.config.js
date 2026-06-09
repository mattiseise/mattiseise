/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/caset/openclaw',
        destination: '/blog/openclaw-arkkitehtuuri',
        permanent: true,
      },
      { source: '/blogi', destination: '/blog', permanent: true },
      { source: '/blogi/:slug', destination: '/blog/:slug', permanent: true },
    ];
  },
};

module.exports = nextConfig;
