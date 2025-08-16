/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '' : '',
  assetPrefix: isGithubPages ? '/' : '',
  images: {
    unoptimized: true
  },
  env: {
    CUSTOM_BASE_PATH: isGithubPages ? '' : '',
  }
};

module.exports = nextConfig;