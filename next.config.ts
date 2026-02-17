import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mihcejdopdmirsctdixq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
