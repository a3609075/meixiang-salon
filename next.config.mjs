import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 本專案未安裝 ESLint，避免 next build 執行 lint 時中斷
  eslint: { ignoreDuringBuilds: true },
  // 明確指定工作區根目錄，避免上層殘留的 lockfile 造成誤判警告
  outputFileTracingRoot: path.join(import.meta.dirname),
};

export default nextConfig;
