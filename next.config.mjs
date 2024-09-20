import createMDX from 'fumadocs-mdx/config';
import { remarkInstall } from 'fumadocs-docgen';
import { remarkDocGen, fileGenerator } from 'fumadocs-docgen';


const withMDX = createMDX({
  include: ['./**/*.{md,mdx,json}'],
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [
      [remarkInstall],
      [remarkDocGen, { generators: [fileGenerator()] }]
    ],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack
  }) => {
    // docker 下 热更新
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config;
  },
};

export default withMDX(config);