/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // <-- Obligatorio para poder compilar en estático
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;