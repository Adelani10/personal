"use client";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export interface ContextTypes {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  navData: navDataTypes[];
  iconData: iconDataTypes[];
  experienceData: experienceDataTypes[];
  prjData: prjDataTypes[];
  next: () => void;
  prev: () => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  handleScroll: (e: FormEvent, targetId: string) => void;
}

interface experienceDataTypes {
  id: number;
  name: string;
  role: string;
  duration: string;
  bulletPoints: any[];
}

export interface navDataTypes {
  id: number;
  name: string;
  page: string;
}

export interface prjDataTypes {
  id: number;
  name: string;
  description: string;
  link: string;
  live: string;
  image: string;
  tech: string[];
}

export interface iconDataTypes {
  id: number;
  name: string;
  tag: ReactNode;
  link: string;
}

const AppContext = createContext<ContextTypes | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const navData: navDataTypes[] = [
    {
      id: 1,
      name: "about",
      page: "#about",
    },
    {
      id: 2,
      name: "experience",
      page: "#experience",
    },
    {
      id: 3,
      name: "works",
      page: "#works",
    },
    {
      id: 4,
      name: "contact",
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
        "Documented frontend processes and provided onboarding support for new team members, contributing to knowledge sharing and team efficiency.",
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
      name: "Acehelp",
      role: "Frontend Developer",
      duration: "Nov 2024 - Present",
      bulletPoints: [
        "Worked with my team to develop dynamic, responsive web applications using React, Node.js, Express, and MongoDB, ensuring optimal performance and usability.",
        "Leveraged Next.js and Tailwind CSS to create modern, SEO-optimized, and visually appealing user interfaces.",
        "Worked on an education website with colleagues by developing session cards to display essential tutor details, booking status, and session-related information for an improved user experience.",
        "Implemented and maintained tutor guarantor settings, allowing tutors to add guarantors, and built an approval system in the admin dashboard to verify and approve guarantor details before tutors can offer services.",
        "Personally integrated a schedule calendar that allows users to view available time slots, track upcoming sessions, and manage their tutoring schedules with ease",
        "Personally improved the entire booking flow of the website by optimizing the process of scheduling, rescheduling, and canceling tutoring sessions to ensure a seamless experience for  both parents and tutors.",
        "Personally integrated the help and support chat feature, enabling parents and tutors to get real-time assistance and resolve issues efficiently.",
      ],
    },
  ];

  const prjData: prjDataTypes[] = [
    {
      id: 0,
      name: "Shoppingify",
      description:
        "This application allows users to create, manage, & store shopping lists efficiently. Built with Spring Boot/Nextjs, the app enables users to add, update, & delete items on their shopping lists with ease. Key features include user authentication, item categorization, & a responsive user interface for seamless interaction across devices.",
      link: "https://github.com/Adelani10/shoppingListFE",
      live: "https://shopping-list-fe-nu.vercel.app/",
      image: "/shoppingify.png",
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
      name: "IklassTutors",
      description:
        "Worked with a number of devs to build and maintain an education platform that connects parents with qualified tutors, enabling seamless tutor applications and bookings. Users can schedule, cancel, and manage appointments effortlessly. Built with a responsive interface, it ensures a smooth experience across devices while streamlining the tutoring process.",
      link: "https://github.com/AlexanderOba/Iklasstutors-web",
      live: "https://iklasstutors.vercel.app/",
      image: "/iklass.png",
      tech: ["Nextjs", "Tailwind", "Typescript", "MongoDb", "NodeJs"],
    },

    {
      id: 2,
      name: "martiful",
      description:
        "Crypto website that provides a seamless way to trade or convert any crypto asset directly into Naira. With real-time exchange rates and secure transactions, it offers users a simple, efficient bridge to liquidity in Nigeria. The platform’s streamlined process ensures fast conversions, empowering users to manage digital assets easily.",
      link: "",
      live: "https://martiful.vercel.app/",
      image: "/martiful.png",
      tech: ["Nextjs", "Tailwind", "Typescript"],
    },

    {
      id: 3,
      name: "Quizzical",
      description:
        "An Educative quiz application. Questions & answers fetched from an external source. On submit, users can see corrections of questions failed, as well as their total score for each section.",
      link: "https://github.com/Adelani10/quizGame",
      live: "https://test-your-general-knowledge.netlify.app/",
      image: "/quizup.png",
      tech: ["React", "Tailwind"],
    },

    {
      id: 4,
      name: "ClipFicks",
      description:
        "A full-stack video sharing app built with Spring Boot for the backend and React Native for the frontend. The app allows users to upload, view, and manage their video content seamlessly. Key features include: Authentication, Upload, Bookmarking, Personalized profile, responsive design",
      link: "https://github.com/Adelani10/clipFlicks",
      live: "https://expo.dev/preview/update?message=fixes&updateRuntimeVersion=1.0.0&createdAt=2024-09-29T15%3A55%3A18.016Z&slug=exp&projectId=1b9b1673-ffa7-49b0-9be8-fc3c6a952ae5&group=eaf028b7-73c6-40d5-8622-75dfbb42708b",
      image: "/clipFlicks.png",
      tech: [
        "React-Native",
        "Tailwind",
        "SpringBoot",
        "Typescript",
        "MongoDb",
        "Docker",
      ],
    },

    {
      id: 5,
      name: "Durkio",
      description:
        "NFT marketplace that allows users to buy, sell, and explore digital collectibles in sepolia ETH with ease. The platform integrates blockchain technology for secure transactions and features a user-friendly design for seamless browsing and trading.",
      link: "https://github.com/Adelani10/nftmarketplace",
      live: "https://nft-fe-umber.vercel.app/",
      image: "/marketplace.png",
      tech: ["Solidity", "Tailwind", "Typescript", "Nextjs"],
    },
  ];

  const [index, setIndex] = useState<number>(0);

  const next = () => {
    setIndex((prev) => (index === prjData.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (index === 0 ? prjData.length - 1 : index - 1));
  };

  const handleScroll = (e: FormEvent, targetId: string) => {
    e.preventDefault();

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
        navData,
        iconData,
        experienceData,
        prjData,
        next,
        prev,
        index,
        setIndex,
        handleScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
