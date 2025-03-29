"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  const { setShowSideBar, navData, handleScroll } = useAppContext();

  return (
    <section className="h-20 fixed top-0 z-30 left-0 right-0 text-gray-300 md:mx-16 overflow-x-hidden px-6 md:px-0 bg-black flex items-center justify-between">
      
      <div className="flex items-center justify-center h-8 w-8 shadow-xl hover:scale-105 hover:shadow-[4px_4px_3px_0px_rgba(56,189,248,0.8)] rounded-md transition-all duration-300 ease-in-out">
        <p className="text-2xl h-full w-full font-bold bg-sky-300 text-black text-center rounded-md">
          A
        </p>
      </div>

      <div className="sm:flex items-center gap-x-8 hidden">
        <div className=" flex items-center md:gap-x-8 gap-x-5">
          {navData.map((section) => {
            return (
              <Link
              onClick={(e) => handleScroll(e, section.name)}
                className="hover:text-sky-300 capitalize"
                href={section.page}
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
            onClick={() => window.open("/new_resume.pdf", "_blank")}
            className="border border-sky-300 p-2 px-4  text-sky-300 rounded-md bg-black hover:-translate-x-1 hover:-translate-y-1 transition-all duration-500 ease-in-out"
          >
            <a href="new_resume.pdf" download target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>

      <button
        onClick={() => setShowSideBar(true)}
        className="sm:hidden text-sky-300 text-3xl"
      >
        <BiMenuAltRight />
      </button>
    </section>
  );
};

export default Nav;
