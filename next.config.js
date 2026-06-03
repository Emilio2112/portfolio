/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // Si tu API_URL también es externa (ej. Railway, Render, Heroku), añádela aquí también:
      // {
      //   protocol: 'https',
      //   hostname: 'tu-api-en-produccion.com',
      //   pathname: '/**',
      // },
    ],
  },
};

module.exports = nextConfig;
