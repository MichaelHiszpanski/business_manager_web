"use client";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact?scrollTo=bottom");
  };
  return (
    <footer //
      className={` bottom-0 left-0 w-full h-[85px] flex flex-col md:flex-row 
                items-center bg-gradient-to-r  ${backgroudnColor} justify-center md:justify-between 
                 text-[#808A9D] dark:text-darkSecondary z-40 transition-opacity duration-300 ${
                   isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                 }`}
    >
      <button
        onClick={handleContactClick}
        className={`${fontColor} md:ml-16  select-none hover:scale-125 transition font-orbitron_variable`}
      >
        Contact
      </button>
      <p className={`${fontColor} select-none font-jost_variable"`}>
        © 2024 Dungeon Studio. All rights reserved.
      </p>
      <div className=" flex justify-center md:mr-16">
        <a
          href="https://nextjs.org/"
          className={`${fontColor} text-right  lg:text-left select-none hover:scale-125 transition  font-orbitron_variable`}
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
