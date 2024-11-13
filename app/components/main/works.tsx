import React, { useState } from "react";
import ProjectCard from "../extras/projectCard";
import { useAppContext } from "@/context";

const Works = () => {
  const { prjData, prev, next } = useAppContext();
  

  return (
    <section
      id="works"
      className="py-16 md:p-24 sm:p-12 w-full flex flex-col gap-y-12"
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

      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-y-0">
        <div
          className={
            "shadow-sm lg:shadow-none xl:px-24 lg:space-y-12 shadow-sky-300 w-full rounded-md overflow-x-scroll h-72 md:overflow-x-hidden lg:h-full relative"
          }
        >
          {prjData.map((prj) => {
            return <ProjectCard key={prj.id} prj={prj} />;
          })}
        </div>

        <div className="lg:hidden flex justify-between text-sky-300 font-semibold">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Works;
