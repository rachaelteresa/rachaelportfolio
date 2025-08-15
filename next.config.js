/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/PinkPortfolio' : '',
  assetPrefix: isGithubPages ? '/PinkPortfolio/' : '',
  images: {
    unoptimized: true
  },
  env: {
    CUSTOM_BASE_PATH: isGithubPages ? '/PinkPortfolio' : '',
  }
};

module.exports = nextConfig;