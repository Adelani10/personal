"use client";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ prj }: any) => {

    const shiftAmt = (id: number) => {
        return id * 100
      }

  return (
    <div className={`absolute translate-x-[${shiftAmt(prj.id)}%] duration-300 ease-in-out transition-all top-0 bottom-0 left-0 right-0 w-full h-full`}>
      <div className="relative w-full h-full rounded-md ">
        <Image
          fill
          src={prj.image}
          className="rounded-md w-full h-full"
          alt="image"
        />

        <div className="absolute top-0 bottom-0 p-3 flex w-full flex-col justify-between space-y-2 text-gray-300 z-20">
          <h3 className="font-semibold text-xl text-white capitalize">
            {prj.name}
          </h3>

          <p className="text-xs tracking-tighter leading-4">
            {prj.description}
          </p>

          <div className="space-y-1">
            <div className="flex w-full font-semibold text-sm flex-wrap gap-x-1">
              {prj.tech.map((tech: string) => (
                <h3 key={tech}>
                  {prj.tech[prj.tech.length - 1] === tech
                    ? `${tech}.`
                    : `${tech},`}
                </h3>
              ))}
            </div>

            <div className="flex items-center text-sky-300 justify-between">
              <button className="text-lg">
                <FiGithub />
              </button>
              <button className="text-lg">
                <FiGithub />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full inset-0 bg-black opacity-70 rounded-md mix-blend-multiply " />
      </div>
    </div>
  );
};

export default ProjectCard;
