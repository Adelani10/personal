"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export interface ContextTypes {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  navData: navDataTypes[]
  iconData: iconDataTypes[]
  experienceData: experienceDataTypes[]
}

interface experienceDataTypes {
    id: number;
    name: string;
    role: string;
    duration: string;
    bulletPoints: any[]
}

export interface navDataTypes {
    id: number;
    name: string;
    page: string;
}

export interface iconDataTypes {
    id: number;
    name: string;
    tag: ReactNode;
    link: string
}

const AppContext = createContext<ContextTypes | null>(null);

export const useAppContext = () => {
    const context = useContext(AppContext)
    if(!context) {
        throw new Error("useAppContext must be used within AppContextProvider")
    }
    return context
}

export const AppContextProvider = ({ children }: any ) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const navData: navDataTypes[] = [
    {
      id: 1,
      name: "About",
      page: "#about",
    },
    {
      id: 2,
      name: "Experience",
      page: "#experience",
    },
    {
      id: 3,
      name: "Work",
      page: "#works",
    },
    {
      id: 4,
      name: "Contact",
      page: "#contact",
    },
  ];
  const iconData: iconDataTypes[] = [
    {
      id: 1,
      name: "Github",
      tag: <FiGithub />,
      link: "https://github.com/Adelani10",
    },
    {
      id: 2,
      name: "LinkedIn",
      tag: <FiLinkedin />,
      link: "https://www.linkedin.com/in/adelani-bello-51776b236",
    },
    {
      id: 3,
      name: "Twitter",
      tag: <FiTwitter />,
      link: "https://twitter.com/laniplaydirty",
    },
    {
      id: 4,
      name: "Instagram",
      tag: <FiInstagram />,
      link: "https://www.instagram.com/laniplaydirty/profilecard/?igsh=aHZxdWN1bzZsOGNo",
    },
  ];
  const experienceData: experienceDataTypes[] = [
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
  return (
    <AppContext.Provider value={{ showSideBar, setShowSideBar, navData, iconData, experienceData }}>
      {children}
    </AppContext.Provider>
  );
};
