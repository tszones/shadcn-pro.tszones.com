import createMDX from 'fumadocs-mdx/config';
 
const withMDX = createMDX({
    include: ['./**/*.{md,mdx,json}'],
  });
 
/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
};
 
export default withMDX(config);