/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/bolaocopadomundo',
  
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
