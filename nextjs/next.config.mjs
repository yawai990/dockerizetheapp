/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.unsplash.com ",
        port: "",
        pathname: "*",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
