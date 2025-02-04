"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ prj }: any) => {
  const { index } = useAppContext();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const shiftAmt = (id: number) => {
    return id * 100;
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        left: windowWidth < 1024 ? `${shiftAmt(prj.id)}%` : 0,
        transform: windowWidth < 1024 ? `translateX(-${index * 100}%)` : "none",
      }}
      className={`absolute w-full lg:h-64 lg:static h-full rounded-md ease-in-out transition-all duration-500 top-0 bottom-0 left-0 right-0`}
    >
      <div
        onClick={() => {
          if (typeof window !== undefined) {
            window.open(prj.live, "_blank");
          }
        }}
        className="flex flex-col cursor-pointer lg:flex-row lg:gap-x-8 gap-x-0 h-full w-full"
      >
        <div className="rounded-md lg:w-1/2 w-full h-[50%] lg:min-h-0 lg:h-full">
          <img
            src={prj.image}
            className="rounded-md w-full h-full"
            alt="image"
          />
        </div>

        <div
          className={` p-3 lg:p-0 flex flex-col h-[50%] lg:h-full w-full lg:w-1/2 justify-around lg:justify-normal space-y-2 lg:space-y-4 text-gray-300 z-20`}
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

            <div
              onClick={(e: any) => e.stopPropagation()}
              className="flex items-center text-sky-300 justify-between"
            >
              <Link
                href={prj.link}
                target="_blank"
                className="text-lg inline-block px-3"
              >
                <FiGithub />
              </Link>

              <Link
                href={prj.live}
                target="_blank"
                className="text-lg inline-block px-3"
              >
                <IoOpenOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute w-full h-full inset-0 bg-gray-600 lg:bg-stone-600 opacity-70 rounded-md mix-blend-multiply " /> */}
    </div>
  );
};

export default ProjectCard;
