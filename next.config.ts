import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our own trusted, locally hosted SVG illustrations are used via next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
