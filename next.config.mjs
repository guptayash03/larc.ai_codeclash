/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**'
      }
      // {
      // protocol: 'https',
      // hostname: 'lh3.googleusercontent.com',
      // port: ''
      // }
    ]
  }
}

export default nextConfig
