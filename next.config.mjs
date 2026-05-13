/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Adicione esta linha aqui!
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
}

export default nextConfig
