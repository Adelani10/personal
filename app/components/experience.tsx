import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const data = [
  {
    id: 0,
    name: "TobTop",
    role: "Web Developer / Sales Manager",
    duration: "May 2020 - June 2022",
    bulletPoints: [
      "Developed the frontend of a minimalistic website that facilitated the growth in business by 40%.",
      "Oversaw the management of sales and expenditure on a daily basis through the web application.",
      "Created a reliable pattern of advertisement that doubled average sales per day",
    ],
  },
  {
    id: 1,
    name: "Terra",
    role: "Frontend Intern",
    duration: "March 2022 - July 2022",
    bulletPoints: [
      "Developed responsive, user-friendly web interfaces using React.js, HTML, CSS, and TypeScript to enhance user experience across multiple devices.",
      "Served as Team lead while delivering our capstone project with explicit consciousness of deadline and inclusive distribution of tasks.",
      "Participated in weekly code reviews and feedback sessions, improving coding proficiency and gaining insights into real-world development workflows.",
      "Utilized Git and GitHub for version control, ensuring smooth project collaboration and code consistency across the team.",
      "Documented frontend processes and provided onboarding support for new team members, contributing to knowledge sharing and team efficiency."
    ],
  },
  {
    id: 2,
    name: "Zuri",
    role: "Frontend Intern",
    duration: "July 2022 - October 2022",
    bulletPoints: [
      "Collaborated with designers and backend developers to implement UI features and improve cross-functional workflows within an Agile environment.",
      "Optimized application performance by refactoring code and leveraging tools such as Chrome DevTools, resulting in a 20% faster page load speed.",
      "Integrated RESTful APIs and handled state management with Context API to provide a seamless user experience.",
      "Worked with senior developers to create and maintain component libraries to improve code reusability and accelerate feature development.",
      "Conducted regular code reviews and participated in peer reviews to uphold code quality and best practices.",
      "Applied CSS framework, Tailwind for consistent styling, speeding up the design process while maintaining responsive layouts.",
    ],
  },
  {
    id: 3,
    name: "Upwork",
    role: "Freelance Fullstack Developer",
    duration: "June 2022 - June 2022",
    bulletPoints: [
      "Worked with my team to develop dynamic, responsive web applications using React, Node.js, Express, and MongoDB, ensuring optimal performance and usability.",
      "Designed and implemented RESTful APIs, facilitating seamless communication between frontend and backend for a robust user experience.",
      "Built full-stack projects using Spring Boot and React Native, incorporating authentication, data storage, and real-time updates for cross-platform functionality.",
      "Leveraged Next.js and Tailwind CSS to create modern, SEO-optimized, and visually appealing user interfaces.",
      "Integrated JWT and OAuth2 for secure user authentication and authorization, ensuring data privacy and system security.",
      "Collaborated with clients on Upwork to gather requirements, scope out projects, and deliver custom solutions on time and within budget.",
      "Created and deployed a shopping list management app with a Spring Boot backend and Next.js frontend, implementing features like item tracking, user history, and saved lists.",
      "Managed and optimized MongoDB and PostgreSQL databases to support high-traffic applications, improving data retrieval times and system performance."
    ]
  },
];

const Experience = () => {
  const [index, setIndex] = useState<number>(0);

  const { id, name, role, duration, bulletPoints } = data[index];
  return (
    <section className="py-16 md:px-20 lg:px-72 sm:px-12 flex flex-col gap-y-12">
      <div className="flex items-center gap-x-5">
        <h1 className="md:text-2xl text-xl lg:min-w-[0%] min-w-[60%] sm:max-w-[50%] font-semibold text-sky-300">
          02.{" "}
          <span className="md:text-3xl text-2xl text-gray-300 font-bold">
            Where I've worked
          </span>
        </h1>

        <hr className="lg:w-72 w-full border-b-[0px] translate-y-full border-gray-800" />
      </div>

      <div className="flex flex-col md:flex-row md:gap-y-0 gap-x-0 md:gap-x-4  gap-y-8">
        <div className="flex md:flex-col items-center overflow-scroll md:overflow-visible">
          {data.map((job) => {
            return (
              <div
                key={job.id}
                onClick={() => setIndex(job.id)}
                className={`text-sky-300 py-2 px-5 w-24 md:w-36 text-center ${
                  index === job.id
                    ? "border-sky-300  bg-gray-800"
                    : "border-gray-500"
                } transition-all ease-in-out duration-500 rounded-t-sm font-semibold hover:bg-gray-800 cursor-pointer border-b-2 md:border-b-0 md:border-l-2`}
              >
                {job.name}
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="gap-y-1 flex flex-col items-start">
            <h2 className="font-semibold text-xl">
              {role} <span className="text-sky-300">@{name}</span>
            </h2>

            <p className="text-sm">{duration}</p>
          </div>

          <div className="flex flex-col gap-y-3">
            {bulletPoints.map((point, index) => {
              return (
                <div key={index} className="flex items-center gap-x-2">
                  <FiChevronRight className="text-sky-300 text-2xl" />
                  <p>{point}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
