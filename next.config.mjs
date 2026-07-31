/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  transpilePackages: ["@sanity/ui", "@sanity/vision", "sanity", "next-sanity"],
  allowedDevOrigins: [".monkeycode-ai.live"],
};

export default nextConfig;
