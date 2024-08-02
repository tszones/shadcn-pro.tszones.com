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
};
 
export default withMDX(config);