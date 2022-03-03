/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old/:blah',
        destination: '/new:blah',
        permanent: false,
      },
      {
        source: '/legacy/:id*',
        destination: '/perform/:id*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
