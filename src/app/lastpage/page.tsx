// import "./lastpage.css";
import Link from "next/link";
import { Boxes } from "lucide-react";
import TransitionLink from "@/components/header/TransitionLink";

function LastPage() {
  return (
    <div className="bg-[#FFFCF9] text-[#333333] min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center">
          <Boxes strokeWidth={1} className="w-[200px] h-auto" />
        </div>
        <p className="text-[3rem] mt-8">
          Thank you for
          <br />
          checking out deCube!
        </p>
        <p className="text-base mt-8">
          Press the button below to get to the start of the site
        </p>
        <TransitionLink href="/">
          <button
            className="
              flex justify-center mx-auto mt-10 mb-5
              py-[0.8rem] px-[3rem] text-[1.2rem] font-bold
              text-white bg-[#6f472a] rounded-[15px]
              transition-colors duration-200 hover:bg-[#f2ceb4]
            "
          >
            deCube.com
          </button>
        </TransitionLink>
        <div className="mt-8" />
      </div>
    </div>
  );
}

export default LastPage;
