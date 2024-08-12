import { pageTree } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { blocksPageTree } from '@/lib/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { LayoutTemplate } from "lucide-react"
import { GraduationCap } from "lucide-react"


export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
    tree={pageTree} 
    nav={{ title: 'Shadcn Pro' }}
    sidebar={{
      banner: (
        <RootToggle
          options={[
            {
              title: 'UI',
              description: 'A collection of reusable UI components',
              url: '/components/',
              icon: <GraduationCap />,
            },
            {
              title: 'Blocks',
              description: 'A collection of reusable blocks',
              url: '/blocks/',
              icon: <LayoutTemplate />,
            },
          ]}
        />
      ),
    }}
    >
      {children}
    </DocsLayout>
  );
}