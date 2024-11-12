"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import React from "react";
import { FiFastForward } from "react-icons/fi";

const Side = () => {
  const { showSideBar, setShowSideBar, navData } = useAppContext();

  console.log(showSideBar)
  return (
    <aside
      className={` ${
        showSideBar ? "-translate-x-[100]" : "translate-x-[100%]"
      }  absolute h-full border z-50 transition-all ease-in-out duration-500 right-0 bottom-0 top-0 bg-sky-950 md:hidden w-3/4 `}
    >
      <div
        className={`relative flex justify-center flex-col items-center w-full h-full gap-y-16 `}
      >
        <button
          className="absolute text-sky-300 font-bold text-4xl top-5 left-8"
          onClick={() => setShowSideBar(false)}
        >
          <FiFastForward />
        </button>
        <div className=" gap-y-8 flex flex-col items-center gap-x-5">
          {navData.map((section) => {
            return (
              <Link
                onClick={() => setShowSideBar(false)}
                className="hover:text-sky-300 flex flex-col items-center  gap-y-1 tracking-widest gap-x-0"
                href={section.page}
                key={section.id}
              >
                {" "}
                <h1 className="text-sky-300">{`0${section.id}`}.</h1>
                <h1 className="">{section.name}</h1>
              </Link>
            );
          })}
        </div>

        <div className="bg-sky-300 w-1/2 rounded-md">
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="border border-sky-300 py-3 w-full px-4  text-sky-300 rounded-md bg-sky-950 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-500 ease-in-out"
          >
            <a href="resume.pdf" download target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Side;
