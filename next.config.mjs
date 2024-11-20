/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1341980-4921589.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
