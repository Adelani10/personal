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
import FadeInWhenVisible from "./components/extras/fadeInWhenVisible";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] overflow-y-scroll relative bg-black h-screen ">
      <Nav />
      <Side />
      <div className="h-full md:mx-16 px-6 text-gray-300 mt-20 md:px-0 font-inconsolata">
        <EmailDesign />
        <Links />

        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <About />
        </FadeInWhenVisible>
        
        <FadeInWhenVisible>
          <Experience />
        </FadeInWhenVisible>
        <Works />
        <FadeInWhenVisible>
          <Contact />
        </FadeInWhenVisible>
        <p className="text-center text-sm font-semibold text-gray-500">
          Developed by Bello Adelani, 2024.
        </p>
      </div>
    </div>
  );
}
