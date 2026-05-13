/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crests.football-data.org",
      },
    ],
  },
  // Essa é a mágica que contorna o CORS usando o servidor da Vercel!
  async rewrites() {
    return [
      {
        source: '/api/futebol/:path*',
        destination: 'https://api.football-data.org/v4/:path*',
      },
    ]
  },
}

export default nextConfig
