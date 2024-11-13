import { useAppContext } from "@/context";
import React from "react";

const Hero = () => {
  const {handleScroll} = useAppContext()
  return (
    <section className="">
      <div className=" py-16 md:p-24 sm:p-12 flex flex-col gap-y-12">
        <div className="flex flex-col md:gap-y-5 gap-y-3">
          <h2 className="text-sky-300 font-semibold">Hi, my name is</h2>
          <h2 className="sm:text-8xl text-6xl font-bold">Bello Adelani.</h2>
          <h2 className="sm:text-7xl text-3xl font-bold text-gray-500">
            I build things for the web.
          </h2>
          <p className="lg:max-w-[50%] text-gray-300 font-montserrat">
            I’m a software engineer specializing in building (and occasionally
            writing) exceptional digital experiences. Currently, I’m focused on
            building accessible, human-centered products.
          </p>
        </div>

        <div className="bg-sky-300 rounded-md md:max-w-72 max-w-[70%]">
          <button
          onClick={(e) => handleScroll(e, "works")}
            className="border border-sky-300 py-4 w-full px-2  text-sky-300 rounded-md bg-black hover:-translate-x-1 hover:-translate-y-1 
            transition-all duration-500 ease-in-out"
          >
            Check out my projects!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
