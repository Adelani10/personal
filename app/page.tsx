"use client";

import About from "./components/main/about";
import Contact from "./components/main/contact";
import EmailDesign from "./components/extras/emailDesign";
import Experience from "./components/main/experience";
import Hero from "./components/main/hero";
import Links from "./components/extras/links";
import Nav from "./components/nav/nav";
import Side from "./components/nav/sidebar";
import Works from "./components/main/works";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black h-screen overflow-scroll ">
      <Nav />
      {/* <Side /> */}
      <div className="h-full md:mx-16 px-6 text-gray-300 mt-20 md:px-0 font-inconsolata">
        <EmailDesign />
        <Links />

        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
        <p className="text-center text-sm font-semibold text-gray-500">
          Developed by Bello Adelani, 2024.
        </p>
      </div>
    </div>
  );
}
