"uce client"
import { useAppContext } from "@/context";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";



const Experience = () => {
  const [index, setIndex] = useState<number>(0);
  const {experienceData} = useAppContext()

  const { name, role, duration, bulletPoints } = experienceData[index];
  return (
    <section id="experience" className="py-16 md:px-20 md:pt-24 lg:px-72 sm:px-12 flex flex-col gap-y-12">
      <div className="flex items-center gap-x-5">
        <h1 className="md:text-2xl text-xl lg:min-w-[0%] min-w-[60%] sm:max-w-[50%] font-semibold text-sky-300">
          02.{" "}
          <span className="md:text-3xl text-2xl text-gray-300 font-bold">
            Where I've worked
          </span>
        </h1>

        <hr className="lg:w-72 w-full border-b-[0px] translate-y-full border-gray-800" />
      </div>

      <div className="flex flex-col md:flex-row md:gap-y-0 gap-x-0 md:gap-x-4  gap-y-8">
        <div className="flex md:flex-col items-center overflow-scroll md:overflow-visible">
          {experienceData.map((job) => {
            return (
              <div
                key={job.id}
                onClick={() => setIndex(job.id)}
                className={`text-sky-300 py-2 px-5 w-24 md:w-36 text-center ${
                  index === job.id
                    ? "border-sky-300  bg-gray-800"
                    : "border-gray-500"
                } transition-all ease-in-out duration-500 rounded-t-sm font-semibold hover:bg-gray-800 cursor-pointer border-b-2 md:border-b-0 md:border-l-2`}
              >
                {job.name}
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="gap-y-1 flex flex-col items-start">
            <h2 className="font-semibold text-xl">
              {role} <span className="text-sky-300">@{name}</span>
            </h2>

            <p className="text-sm">{duration}</p>
          </div>

          <div className="flex flex-col gap-y-3">
            {bulletPoints.map((point, index) => {
              return (
                <div key={index} className="flex items-center gap-x-2">
                  <FiChevronRight className="text-sky-300 text-2xl" />
                  <p>{point}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
