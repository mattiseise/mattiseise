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
    ];
  },
};

module.exports = nextConfig;
