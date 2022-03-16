/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    imdbkey: process.env.IMDBKEY
  },
  images: {
    domains: ['m.media-amazon.com']
  }
}
