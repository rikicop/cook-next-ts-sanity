/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
