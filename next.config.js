/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'drive.google.com','ibb.co',
      'firebasestorage.googleapis.com'
    ]
  },
  env:{
    BACKEND_BASE_URL:process.env.BACKEND_BASE_URL
  }
}

module.exports = nextConfig;