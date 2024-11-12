import React, { useState } from "react";
import ProjectCard from "../extras/projectCard";
import { useAppContext } from "@/context";

const Works = () => {
  const { prjData } = useAppContext();
  const [index, setIndex] = useState<number>(1)

  
  return (
    <section
      id="works"
      className="py-16 md:p-24 sm:p-12 flex flex-col gap-y-12"
    >
      <div className="flex items-center gap-x-5">
        <h1 className="md:text-2xl text-xl lg:min-w-[0%] min-w-[60%] sm:max-w-[50%] font-semibold text-sky-300">
          03.{" "}
          <span className="md:text-3xl text-2xl text-gray-300 font-bold">
            Some things I've built
          </span>
        </h1>

        <hr className="lg:w-72 w-full border-b-[0px] translate-y-full border-gray-800" />
      </div>

      <div className="flex flex-col md:flex-row gap-y-8">
        <div className="md:w-80 rounded-md h-72 border overflow-x-visible relative w-full">
          {prjData.map((prj) => {
            return <ProjectCard key={prj.id} prj={prj} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
