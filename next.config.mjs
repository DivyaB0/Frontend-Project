/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false, // Disable build activity indicator
    buildActivityPosition: false, // Hide it completely
  },
  experimental: {
    nextScriptWorkers: false,
    disableNextJsDevTools: true, // Disable the Dev Tools
  },
};

export default nextConfig;