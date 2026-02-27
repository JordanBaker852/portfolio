'use client'
import { useState } from "react";
import Editor from "@/components/common/Editor";
import { generateBioContent, generateLandingAboutMeContent, generateLikewizeDotNetContent, generateLikewizeFullStackContent } from "@/lib/contentGeneratorContent";
import Accordion from "@/components/common/Accordion";
import { CollapsibleFileTree } from "@/components/common/CollapsibleFileTree";
import personalInfo from "../data/aboutMePersonalInfo.json";

type AboutContent = {
  name: string | "default",
  content: string
};

export default function AboutMe() {

  const pages: AboutContent[] = [
    {
      name: "default",
      content: generateLandingAboutMeContent()
    },
    {
      name: "summary",
      content: generateBioContent()
    },
    {
      name: "full-stack-developer",
      content: generateLikewizeFullStackContent()
    },
    {
      name: "junior-dotnet-developer",
      content: generateLikewizeDotNetContent()
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
      <h1 className="sr-only">About me</h1>
      <div className="flex flex-col h-[calc(100dvh-116px)] md:flex-row">
          <Accordion>
            <CollapsibleFileTree onFileSelected={handlePageContentChange} items={personalInfo} />
          </Accordion>
          <div className="w-full overflow-auto md:flex-4">
            <Editor langauge="" content={pageContent} />
          </div>
      </div>
    </main>
  );
};