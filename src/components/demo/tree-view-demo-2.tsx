import { TreeView } from "@/components/ui-pro/tree-view";

const elements = [
    {
      id: "1",
      name: "components",
      children: [
        {
          id: "2",
          name: "extension",
          children: [
            {
              id: "3",
              name: "tree-view.tsx",
            },
            {
              id: "4",
              name: "tree-view-api.tsx",
            },
          ],
        },
        {
          id: "5",
          name: "dashboard-tree.tsx",
        },
      ],
    },
  ];

  export function TreeViewDemo_V2() {
    return (
      <TreeView
        elements={elements}
        initialSelectedId="3"
        initialExpendedItems={["1", "2"]}
      />
    );
  }
  