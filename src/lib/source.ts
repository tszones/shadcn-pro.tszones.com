import { map } from '../../.map';
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';


export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/components',
  rootDir: 'components',
  source: createMDXSource(map),
});


export const {getPage: getBlocksPage, getPages: getBlocksPages, pageTree: blocksPageTree} = loader({
  baseUrl: '/blocks',
  rootDir: 'blocks',
  source: createMDXSource(map),
});