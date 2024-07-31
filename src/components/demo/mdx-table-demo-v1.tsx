import React from 'react';
import { MDXTable } from '@/components/ui-pro/mdx-table';

export function MDXTableDemo_V1() {
  return (
    <div>
      <MDXTable
        data={[
          {
            props: { value: "field" },
            type: { value: "type" },
            defaultValue: { value: "default Value" },
          },
          {
            props: { value: "id", required: true },
            type: { value: ["string"] },
            defaultValue: { value: "--" },
          },
          {
            props: { value: "name", required: true },
            type: { value: ["string"] },
            defaultValue: { value: "--" },
          },
          {
            props: { value: "children" },
            type: { value: ["TreeViewElement[]"] },
            defaultValue: { value: "--" },
          },
          {
            props: { value: "isSelectable" },
            type: { value: ["boolean"] },
            defaultValue: { value: "--" },
          },
        ]}
      />
    </div>
  );
}
