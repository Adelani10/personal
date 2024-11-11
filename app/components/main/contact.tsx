import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    // <section id="contact" className="py-16 md:p-24 sm:p-12 flex flex-col gap-y-12">
    <section id="contact" className="py-16 md:px-20 md:pt-24 lg:px-72 sm:px-12 flex flex-col gap-y-12">
      <div className="flex gap-y-3 flex-col items-center ">
        <h1 className="md:text-2xl text-xl  font-semibold text-sky-300">
          04.{" "}
          <span className="text-sky-300 text-xl md:text-2xl font-bold">
            What's next?
          </span>
        </h1>

        <h3 className="text-3xl font-montserrat font-bold">Get in touch</h3>
      </div>

      <p className="text-center font-montserrat">
        I’m currently exploring new opportunities, and my inbox is always open!
        Whether you have a question, a potential role, or just want to say
        hello, I’d love to connect and will do my best to get back to you
        promptly.
      </p>

      <div className="bg-sky-300 w-28 h-12 self-center rounded-md">
        <button className="border w-full h-full bg-black rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-all duration-500 ease-in-out font-bold text-sky-300 border-sky-300">
          <Link href={"mailTo:harounadelani@gmail.com"}>Email me</Link>
        </button>
      </div>
    </section>
  );
};

export default Contact;
