/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crests.football-data.org',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://api.football-data.org/v4/:path*`,
      },
    ]
  },
}

export default nextConfig
