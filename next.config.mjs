/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  transpilePackages: ["@sanity/ui", "@sanity/vision", "sanity", "next-sanity"],
  allowedDevOrigins: [".monkeycode-ai.live"],
};

export default nextConfig;
