import React from "react";

const Works = () => {
  return (
    <section className="py-16 md:p-24 sm:p-12 flex flex-col gap-y-12">
      <div className="flex items-center gap-x-5">
        <h1 className="md:text-2xl text-xl lg:min-w-[0%] min-w-[60%] sm:max-w-[50%] font-semibold text-sky-300">
          03.{" "}
          <span className="md:text-3xl text-2xl text-gray-300 font-bold">
            Some things I've built
          </span>
        </h1>

        <hr className="lg:w-72 w-full border-b-[0px] translate-y-full border-gray-800" />
      </div>
    </section>
  );
};

export default Works;
