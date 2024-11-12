import React from "react";

const data = [
  {
    id: 0,
    name: "shoppingify",
    description:
      "This web application allows users to create, manage, and store shopping lists efficiently. Built with a Spring Boot backend and a Next.js frontend, the app enables users to add, update, and delete items on their shopping lists with ease. Key features include user authentication, item categorization, and a responsive user interface for seamless interaction across devices.",
    link: "https://github.com/Adelani10/shoppingListFE",
    live: "https://shopping-list-fe-nu.vercel.app/",
    image: "",
    tech: [
      "Nextjs",
      "Tailwind",
      "SpringBoot",
      "Typescript",
      "MongoDb",
      "Docker",
    ],
  },
  {
    id: 1,
    name: "shoppingify",
    description:
      "This web application allows users to create, manage, and store shopping lists efficiently. Built with a Spring Boot backend and a Next.js frontend, the app enables users to add, update, and delete items on their shopping lists with ease. Key features include user authentication, item categorization, and a responsive user interface for seamless interaction across devices.",
    link: "https://github.com/Adelani10/shoppingListFE",
    live: "https://shopping-list-fe-nu.vercel.app/",
    image: "",
    tech: [
      "Nextjs",
      "Tailwind",
      "SpringBoot",
      "Typescript",
      "MongoDb",
      "Docker",
    ],
  },
  {
    id: 2,
    name: "Musica",
    description:
      "A full-stack video sharing platform built with Spring Boot for the backend and React Native for the frontend. The app allows users to upload, view, and manage their video content seamlessly. Key features include: Authentication, Upload, Bookmarking, Personalized profile, responsive design",
    link: "https://github.com/Adelani10/shoppingListFE",
    live: "https://shopping-list-fe-nu.vercel.app/",
    image: "",
    tech: [
      "Nextjs",
      "Tailwind",
      "SpringBoot",
      "Typescript",
      "MongoDb",
      "Docker",
    ],
  },
  {
    id: 3,
    name: "ClipFicks",
    description:
      "A full-stack video sharing platform built with Spring Boot for the backend and React Native for the frontend. The app allows users to upload, view, and manage their video content seamlessly. Key features include: Authentication, Upload, Bookmarking, Personalized profile, responsive design",
    link: "https://github.com/Adelani10/clipFlicks",
    live: "None",
    image: "",
    tech: [
      "React-Native",
      "Tailwind",
      "SpringBoot",
      "Typescript",
      "MongoDb",
      "Docker",
    ],
  },
];

const Works = () => {
  return (
    <section id="works" className="py-16 md:p-24 sm:p-12 flex flex-col gap-y-12">
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
