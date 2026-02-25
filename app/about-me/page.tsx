'use client'

import { RiArrowRightSFill } from "@remixicon/react";
import { useState } from "react";
import { CollapsibleFileTree } from "@/components/common/CollapsibleFileTree";
import personalInfo from "../data/aboutMePersonalInfo.json";
import Editor from "@/components/common/Editor";
import { generateBioContent, generateLandingAboutMeContent } from "@/lib/contentGeneratorContent";

type AboutContent = {
  name: string | "default",
  content: string
};

export default function AboutMe() {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  const pages: AboutContent[] = [
    {
      name: "default",
      content: generateLandingAboutMeContent()
    },
    {
      name: "summary",
      content: generateBioContent()
    }
  ];

  const [pageContent, setPageContent] = useState<string>(pages.find(x => x.name == "default")?.content ?? "");

  const handlePageContentChange = (pageName: string) => {

    const page = pages.find(x => x.name == pageName);

    if (!page) return;

    setPageContent(page.content);
  };

  return (
    <main className="min-h-full flex-[1_1_auto]">
      <div className="flex flex-col md:flex-row md:h-[calc(100dvh-116px)]">
          <div className="w-full flex-1 md:min-w-62.5 border-r border-r-[#314147] group" data-open={accordionOpen} >
            <button className={`flex gap-2 text-left w-full py-3 px-6 border-b border-b-[#314147] items-center relative transition linear hover:cursor-pointer hover:after:block after:content-[""]
              after:w-full after:absolute after:left-0 after:top-0 after:h-full after:bg-white after:opacity-15 text-[#90A1B9] after:hidden group-data-[open=true]:text-[#F8FAFC] group-data-[open=true]:after:block`}
              onClick={() => setAccordionOpen(prev => !prev)}>
              <RiArrowRightSFill className={`transition ease-in-out group-data-[open=true]:rotate-90`} />
              <span>personal-info</span>
            </button>
            <div className={`p-3 transition ease-in-out border-b border-b-[#314147] scale-y-full visible group-data-[open=false]:scale-y-0 group-data-[open=false]:hidden`}>
              <CollapsibleFileTree onFileSelected={handlePageContentChange} items={personalInfo} />
            </div>
          </div>
          <div className="md:flex-4">
            <Editor content={pageContent} />
          </div>
      </div>
    </main>
  );
};