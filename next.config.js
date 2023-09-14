/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'facegen-dev.s3.amazonaws.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'platform-lookaside.fbsbx.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
