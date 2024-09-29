import createMDX from 'fumadocs-mdx/config';
import { remarkInstall } from 'fumadocs-docgen';
import { remarkDocGen, fileGenerator } from 'fumadocs-docgen';
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

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
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}


export default withMDX(config);