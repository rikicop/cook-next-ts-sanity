/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: false,
  },
  extends: ["plugin:@next/next/recommended"],
};

module.exports = nextConfig;
