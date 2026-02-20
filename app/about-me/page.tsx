'use client'

import { RiArrowRightSFill } from "@remixicon/react";
import { useState } from "react";
import { CollapsibleFileTree } from "@/components/common/CollapsibleFileTree";
import personalInfo from "../data/aboutMePersonalInfo.json";

export default function AboutMe() {
  const [showAccordionBody, setShowAccordionBody] = useState<boolean>(false);

  const accordionHeaderImgRotate: string = showAccordionBody ? "rotate-90" : "rotate-0";
  const accordionHeaderStyles: string = showAccordionBody ? "text-[#F8FAFC] after:block" : "text-[#90A1B9] after:hidden";

  const accordionBodyVisibility: string = showAccordionBody ? "scale-y-full visible" : "scale-y-0";

  return (
    <main className="min-h-full">
      <div className="w-[17.5%] h-[calc(100dvh-112px)] border-r border-r-[#314147]">
        <button className={`flex gap-2 text-left w-full py-3 px-6 border-b border-b-[#314147] relative transition linear ${accordionHeaderStyles} 
          hover:cursor-pointer hover:after:block after:content-[""] after:w-full after:absolute after:left-0 after:top-0 after:h-full after:bg-white after:opacity-20`}
          onClick={() => setShowAccordionBody(prev => !prev)}>
          <RiArrowRightSFill className={`${accordionHeaderImgRotate} transition ease-in-out`} />
          <span>personal-info</span>
        </button>
        <div className={`${accordionBodyVisibility} p-3 transition ease-in-out border-b border-b-[#314147]`}>
          <CollapsibleFileTree items={personalInfo} />
        </div>
      </div>
    </main>
  );
};