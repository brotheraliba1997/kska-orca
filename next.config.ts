/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Disable turbo for video files
        '*.mp4': 'file',
      },
    },
  },
};

module.exports = nextConfig;
