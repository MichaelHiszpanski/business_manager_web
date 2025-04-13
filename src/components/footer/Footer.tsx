"use client";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  isVisible: boolean;
  backgroudnColor?: string;
  fontColor?: string;
}
const Footer: FC<Props> = ({
  isVisible,
  backgroudnColor,
  fontColor = "text-colorTwo",
}) => {
  return (
    <footer
      className={` w-full h-[85px] flex flex-col md:flex-row 
                items-center bg-gradient-to-r  ${backgroudnColor} justify-center md:justify-between 
                 text-[#808A9D] dark:text-darkSecondary z-40 transition-opacity duration-300 ${
                   isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                 }`}
    >
      <Link
        className={`${fontColor} select-none  font-orbitron_variable md:ml-10 cursor-pointer hover:scale-125 transition `}
        href={"https://www.open.ac.uk/"}
        target="_blank"
      >
        The Open University
      </Link>
      <Link
        className={`${fontColor} select-none font-jost_variable cursor-pointer"`}
        href={"https://dungeon-studio.vercel.app/"}
        target="_blank"
      >
        © 2024 Dungeon Studio. All rights reserved.
      </Link>
      <div className=" flex justify-center md:mr-16">
        <a
          href="https://nextjs.org/"
          className={`${fontColor} text-right  lg:text-left select-none hover:scale-125 transition  font-orbitron_variable cursor-pointer`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Next JS
        </a>
      </div>
    </footer>
  );
};
export default Footer;
