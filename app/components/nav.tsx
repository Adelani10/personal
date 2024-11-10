"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const data = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Experience",
  },
  {
    id: 3,
    name: "Work",
  },
  {
    id: 4,
    name: "Contact",
  },
];

const Nav = () => {
  return (
    <section className="h-20 fixed z-50 left-0 right-0 text-gray-300 md:mx-16 px-6 md:px-0 bg-black shadow-b-sm shadow-white flex items-center justify-between">

      <div className="flex items-center justify-center h-8 w-8 shadow-xl hover:scale-105 hover:shadow-[4px_4px_3px_0px_rgba(56,189,248,0.8)] rounded-md transition-all duration-300 ease-in-out">
        <p className="text-2xl h-full w-full font-bold bg-sky-300 text-black text-center rounded-md">
          A
        </p>
      </div>

      <div>
        <div className="sm:flex items-center gap-x-8 hidden">
          <div className=" flex items-center md:gap-x-8 gap-x-5">
            {data.map((section) => {
              return (
                <Link
                  className="hover:text-sky-300"
                  href={"/"}
                  key={section.id}
                >
                  <span className="text-sky-300">{`0${section.id}`}.</span>{" "}
                  {section.name}
                </Link>
              );
            })}
          </div>

          <div className="bg-sky-300 rounded-md">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="border border-sky-300 p-2 px-4  text-sky-300 rounded-md bg-black hover:-translate-x-1 hover:-translate-y-1 transition-all duration-500 ease-in-out"
            >
              <a href="resume.pdf" download target="_blank">
                Resume
              </a>
            </button>
          </div>
        </div>

        <button className="sm:hidden text-sky-300 text-3xl">
          <BiMenuAltRight />
        </button>
      </div>
    </section>
  );
};

export default Nav;
