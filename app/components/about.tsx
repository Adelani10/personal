import Image from "next/image";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const About = () => {
  return (
    <section className="py-16 md:p-24 lg:p-48 sm:p-12 flex flex-col gap-y-12">
      <div className="flex items-center gap-x-5">
        <h1 className="text-2xl font-semibold text-sky-300">
          01. <span className="text-3xl text-gray-300 font-bold">About me</span>
        </h1>

        <hr className="w-72 border-b-[0px] translate-y-full border-gray-800" />
      </div>

      <div className="flex gap-x-3 flex-col md:justify-between md:flex-row gap-y-8 md:gap-y-0 items-start">
        <article className="md:max-w-[65%] w-full text-gray-300 space-y-3">
          <p>
            Hello! My name is Delani and I enjoy creating things that live on
            the internet. My interest in web and mobile development started back
            in 2022 when I got dangerously curious about how the web works.
          </p>

          <p>
            Fast-forward to today, I’m a creative, detail-oriented, customer
            focused software engineer, equipped with proven track record of
            creating and implementing successful web and mobile applications. I
            have also recently started writing about technology in general,
            which I find super interesting and awesome.
          </p>
          <p>
            My main focus these days is seeking organizations with a local or
            global reach where I can leverage my skills and build accessible,
            inclusive products and digital experiences.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>

          <div className="flex items-center text-sm md:text-[10px] md:font-bold lg:text-lg lg:gap-x-2 gap-x-3 lg:text-md">
            <div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Html / Css</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Tailwind / Bootstrap</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Javascript (ES6+)</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Typescript</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>React / Nextjs</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Java</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Spring Framework</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Databases (Sql, MongoDb)</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Docker</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FiChevronRight className="text-sky-300" />
                <p>Git / Github</p>
              </div>
            </div>
          </div>
        </article>

        <div className="w-72  md:mt-3 self-center md:self-start border-sky-200 border-2  relative h-72 rounded-md">
          <Image
            alt="Ade"
            fill
            src={"/profile1.jpg"}
            className="object-cover -translate-x-3 -translate-y-3 hover:-translate-y-5  hover:-translate-x-5 transition-all duration-500 ease-in-out  rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
