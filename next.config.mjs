/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const useProjectPath = process.env.PAGES_PROJECT_SITE === 'true';
const basePath = useProjectPath && repository ? `/${repository}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;