import { getBlocksPage, getBlocksPages } from '@/lib/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { githubUrl } from '@/config/site';
import { DocsPageFooter } from '@/components/docs-page-footer';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getBlocksPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage 
    toc={page.data.exports.toc} 
    full={page.data.full}
    tableOfContent={{
      footer: (
        <DocsPageFooter page={page} />
      ),
    }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getBlocksPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getBlocksPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}