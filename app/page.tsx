import { RiArrowRightSLine } from "@remixicon/react";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      
        <h1 className="sr-only">Jordan Baker</h1>
        <div className="w-full px-6 sm:p-0 sm:max-w-302.5 m-auto relative flex flex-col gap-19">
          <div>
            <h4 className="text-lg/[27px]">Hello world! I am</h4>
            <h2 className={`text-5xl/[57.6px] ${firaCode.className} lg:text-6xl text-[#F8FAFC] my-2`}>Jordan Baker</h2>
            <div className="flex items-center text-indigo-500">
              <RiArrowRightSLine className="" />
              <h3 className="text-xl/[30px] lg:text-3xl">Fullstack Developer</h3>
            </div>
          </div>
          <div>
            <p className="text-sm/[19.6px] text-wrap li text-left mb-2">// find my profile on Github:</p>
            <p className="text-sm/[19.6px] text-wrap text-left">
              <span className="text-indigo-500 mr-1">string</span>
              <span className="text-teal-400 mr-1">githubLink</span>
              <span className="mr-1">=</span>
              <a href="https://github.com/JordanBaker852" className="underline text-bold text-[#FFA1AD] break-all">"https://github.com/JordanBaker852"</a>
            </p>
          </div>
          <div className="absolute inset-0 z-10 sm:hidden">
            <img className="absolute -top-8 -left-4 blur-3xl" src="/green-background-blur.svg" alt="" />
            <img className="absolute bottom-0 -right-4 blur-3xl" src="/blue-background-blur.svg" alt="" />
          </div>
        </div>
    </>
  );
}
