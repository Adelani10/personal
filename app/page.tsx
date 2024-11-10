"use client";

import About from "./components/about";
import EmailDesign from "./components/emailDesign";
import Hero from "./components/hero";
import Links from "./components/links";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black h-screen overflow-scroll ">
      <Nav />
      <div className="h-full md:mx-16 px-6 text-gray-300 mt-20 md:px-0 font-inconsolata">
        <EmailDesign />
        <Links />
        <Hero />
        <About />
      </div>
    </div>
  );
}
