/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/aidailynews',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
