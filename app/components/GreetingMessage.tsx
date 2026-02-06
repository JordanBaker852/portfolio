import { RiArrowRightSLine } from "@remixicon/react";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: "500",
  subsets: ["latin"],
});

const GreetingMessage = () => {
    return(
        <div>
            <h4 className="text-lg/[27px]">Hello world! I am</h4>
            <h2 className={`text-5xl/[57.6px] ${firaCode.className} lg:text-6xl text-[#F8FAFC] my-2`}>Jordan Baker</h2>
            <div className="flex items-center text-indigo-500">
              <RiArrowRightSLine className="" />
              <h3 className="text-xl/[30px] lg:text-3xl">Fullstack Developer</h3>
            </div>
        </div>
    );
};

export default GreetingMessage;