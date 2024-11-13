"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ prj }: any) => {
  const { index } = useAppContext();

  const shiftAmt = (id: number) => {
    return id * 100;
  };

  return (
    <div
      style={{
        left: window.innerWidth < 1024 ? `${shiftAmt(prj.id)}%` : 0,
        transform:
          window.innerWidth < 1024 ? `translateX(-${index * 100}%)` : "none",
      }}
      className="absolute lg:static w-full h-full rounded-md ease-in-out transition-all duration-500 top-0 bottom-0 right-0"
    >
      <div className="relative lg:flex gap-x-8 w-full h-full lg:h-64 rounded-md   ">
        <Link href={prj.live} className="rounded-md lg:w-96  w-full h-full">
          <img
            src={prj.image}
            className="rounded-md w-full h-full"
            alt="image"
          />
        </Link>

        <div
          className={`absolute lg:static top-0 bottom-0 p-3 lg:p-0 flex w-full flex-col justify-between lg:justify-normal space-y-2 text-gray-300 z-20`}
        >
          <h3 className="font-semibold text-xl md:text-2xl text-white capitalize">
            {prj.name}
          </h3>

          <p className="text-xs md:text-sm tracking-tighter text-white lg:text-gray-300 leading-4">
            {prj.description}
          </p>

          <div className="gap-y-1 items-center flex flex-col md:flex-row md:gap-y-2">
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
              <button
                onClick={() =>
                  window.open(prj.link, "_blank", "noopener,noreferrer")
                }
                className="text-lg px-3"
              >
                <FiGithub />
              </button>

              <button
                onClick={() =>
                  window.open(prj.live, "_blank", "noopener,noreferrer")
                }
                className="text-lg px-3"
              >
                <IoOpenOutline />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full inset-0 bg-gray-600 lg:bg-black opacity-70 rounded-md mix-blend-multiply " />
      </div>
    </div>
  );
};

export default ProjectCard;
