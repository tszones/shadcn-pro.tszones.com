"use client";

import {
  Tree,
  Folder,
  File,
  CollapseButton,
} from "@/components/ui-pro/tree-view-api";

export const TreeViewDemo = () => {
  const elements = [
    {
      id: "1",
      isSelectable: true,
      name: "src",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "app.tsx",
        },
        {
          id: "3",
          isSelectable: true,
          name: "components",
          children: [
            {
              id: "20",
              isSelectable: true,
              name: "pages",
              children: [
                {
                  id: "21",
                  isSelectable: true,
                  name: "interface.ts",
                },
              ],
            },
          ],
        },
        {
          id: "6",
          isSelectable: true,
          name: "ui",
          children: [
            {
              id: "7",
              isSelectable: true,
              name: "carousel.tsx",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Tree
      className="rounded-md h-60 bg-background overflow-hidden p-2"
      initialSelectedId="21"
      elements={elements}
    >
      <Folder element="src" value="1">
        <File value="2">
          <div> app.tsx </div>
        </File>
        <Folder value="3" element="components">
          <Folder value="20" element="pages">
            <File value="21">
              <div>interface.ts</div>
            </File>
          </Folder>
        </Folder>
        <Folder value="6" element="ui">
          <File value="7">
            <div>carousel.tsx</div>
          </File>
        </Folder>
      </Folder>
      <CollapseButton elements={elements} />
    </Tree>
  );
};

