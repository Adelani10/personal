import Link from "next/link";
import React from "react";

const EmailDesign = () => {
  return (
    <div className="md:flex hidden flex-col text-gray-300 pr-16 fixed gap-y-8 bottom-0 right-0 items-center">
      {/* Email text written vertically */}
      <Link href={"mailTo:harounadelani@gmail.com"} className="flex flex-col">
        {"harounadelani@gmail.com".split("").map((char, index) => (
          <span key={index} className="leading-[9px] rotate-90 ">
            {char}
          </span>
        ))}
      </Link>

      <div className="border-l-2 h-28 border-gray-500"></div>
    </div>
  );
};

export default EmailDesign;
