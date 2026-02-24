'use client'

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RiArrowDropRightLine, RiFolder6Fill, RiMarkdownFill } from "@remixicon/react";
import { useState } from "react";

type ColourHex = `#${string}`;
type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[], colour: ColourHex };

type Props = {
  items: FileTreeItem[]
};

export function CollapsibleFileTree({items}: Props) {
  const fileTree: FileTreeItem[] = items;

  const [fileSelected, setFileSelected] = useState<string>("");

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name} className="group">
          <CollapsibleTrigger className="flex items-center group-data-[state=open]:text-[#F8FAFC] hover:bg-accent hover:text-accent-foreground hover:cursor-pointer w-full justify-start transition">
              <RiArrowDropRightLine className="mr-3 transition-transform group-data-[state=open]:rotate-90" />
              <RiFolder6Fill size="16" className="mr-2" color={fileItem.colour} fillRule="inherit" fillOpacity={100}/>{fileItem.name}
          </CollapsibleTrigger>
          <CollapsibleContent className="style-lyra:ml-4 mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    const colour: string = fileItem.name === fileSelected ? "text-[#F8FAFC]" : ""

    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className={`text-foreground w-full justify-start gap-2 hover:cursor-pointer ${colour}`}
        onClick={() => setFileSelected(prev => prev = fileItem.name)}
      >
        <RiMarkdownFill />
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