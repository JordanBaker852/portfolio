import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

type Props = {
  items: FileTreeItem[]
};

export function CollapsibleFileTree({items}: Props) {
  const fileTree: FileTreeItem[] = items;

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger>
            <Button variant="ghost" size="sm" className="group hover:bg-accent hover:text-accent-foreground w-full justify-start transition-none"><ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" /><FolderIcon />{fileItem.name}</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="style-lyra:ml-4 mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="text-foreground w-full justify-start gap-2"
      >
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    );
  };

  return (
    <div className="flex flex-col gap-1">
      {fileTree.map((item) => renderItem(item))}
    </div>
  );
};