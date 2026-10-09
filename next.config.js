/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    // Esitykset ovat staattisia sivuja public/esitykset/<slug>/index.html
    // (scripts/rakenna-esitys.py) — siisti osoite ilman index.html-päätettä.
    return [
      { source: '/esitykset/:slug', destination: '/esitykset/:slug/index.html' },
    ];
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
