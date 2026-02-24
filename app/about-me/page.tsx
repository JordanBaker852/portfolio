'use client'

import { RiArrowRightSFill } from "@remixicon/react";
import { useState } from "react";
import { CollapsibleFileTree } from "@/components/common/CollapsibleFileTree";
import personalInfo from "../data/aboutMePersonalInfo.json";
import Editor from "@/components/common/Editor";
import { generateBioContent } from "@/lib/contentGeneratorContent";

export default function AboutMe() {
  const [showAccordionBody, setShowAccordionBody] = useState<boolean>(false);

  const accordionHeaderImgRotate: string = showAccordionBody ? "rotate-90" : "rotate-0";
  const accordionHeaderStyles: string = showAccordionBody ? "text-[#F8FAFC] after:block" : "text-[#90A1B9] after:hidden";

  const accordionBodyVisibility: string = showAccordionBody ? "scale-y-full visible" : "scale-y-0 hidden";



  return (
    <main className="min-h-full flex-[1_1_auto]">
      <div className="flex flex-col md:flex-row md:h-[calc(100dvh-116px)]">
          <div className="w-full flex-1 md:min-w-62.5 border-r border-r-[#314147]">
            <button className={`flex gap-2 text-left w-full py-3 px-6 border-b border-b-[#314147] items-center relative transition linear ${accordionHeaderStyles} 
              hover:cursor-pointer hover:after:block after:content-[""] after:w-full after:absolute after:left-0 after:top-0 after:h-full after:bg-white after:opacity-20`}
              onClick={() => setShowAccordionBody(prev => !prev)}>
            <RiArrowRightSFill className={`${accordionHeaderImgRotate} transition ease-in-out`} />
            <span>personal-info</span>
            </button>
            <div className={`${accordionBodyVisibility} p-3 transition ease-in-out border-b border-b-[#314147]`}>
              <CollapsibleFileTree items={personalInfo} />
            </div>
        </div>
        <div className="md:flex-4">
          <Editor content={generateBioContent()} />
        </div>
      </div>
    </main>
  );
};