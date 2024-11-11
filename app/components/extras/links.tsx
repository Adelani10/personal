import { useAppContext } from "@/context";
import Link from "next/link";
import React from "react";



const Links = () => {
  const {iconData} = useAppContext()
  return (
    <div className="fixed md:flex pl-16 text-gray-300 flex-col hidden gap-y-8 left-0 bottom-0 items-center">
      <div className="flex flex-col gap-y-8 text-xl items-center">
        {iconData.map((icon) => {
          return (
            <Link href={icon.link} className="" key={icon.id}>
              {icon.tag}
            </Link>
          );
        })}
      </div>

      <hr className="border border-l h-28 border-gray-500" />
    </div>
  );
};

export default Links;
