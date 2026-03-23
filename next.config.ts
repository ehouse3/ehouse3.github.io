import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // basePath: "/ehouse3.github.io", // root user site so omit
  output: "export", // static exports
  images: { unoptimized: true },
};

export default nextConfig;
