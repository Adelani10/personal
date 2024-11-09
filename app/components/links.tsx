import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
const data = [
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

const Links = () => {
  return (
    <div className="fixed md:flex pl-16 text-gray-400 flex-col hidden gap-y-8 left-0 bottom-0 items-center">
      <div className="flex flex-col gap-y-8 text-xl items-center">
        {data.map((icon) => {
          return (
            <Link href={icon.link} className="" key={icon.id}>
              {icon.tag}
            </Link>
          );
        })}
      </div>

      <hr className="border border-l h-28 border-gray-500" />
    </div>
  );
};

export default Links;
