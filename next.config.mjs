/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// Only apply basePath for GitHub Pages deployment
// Set DEPLOY_TO_GITHUB_PAGES=true in GitHub Actions to enable
if (process.env.DEPLOY_TO_GITHUB_PAGES === 'true') {
  nextConfig.basePath = '/Website'
  nextConfig.assetPrefix = '/Website/'
}

export default nextConfig
