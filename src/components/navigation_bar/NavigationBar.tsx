"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { logo, wave_one } from "@/consts/images";
import Image from "next/image";
import { navigationItems } from "@/consts/navigation_list";
import NavigationLinkButton from "../buttons/NavigationLinkButton";
import useOutsideClick from "../utils/useOutsideClick";
const NavigationBar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, () => setIsModalOpen(false));
  return (
    <nav className="w-full relative h-[100px] flex flex-row justify-evenly items-center">
      <Image
        src={wave_one}
        alt="bg"
        className=" w-full absolute top-0 md:top-[-60px]  select-none overflow-hidden "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onDragStart={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      />
      <div className="flex flex-row md:justify-evenly items-center w-full h-full z-50">
        <Image
          src={logo}
          alt="logo"
          className="w-24 h-24 cursor-pointer select-none"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />

        {navigationItems.map((element) => (
          <NavigationLinkButton
            key={element.name}
            name={element.name}
            hrefLink={element.hrefLink}
            className=" hidden md:flex"
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white w-[300px] rounded-xl shadow-sm p-2 h-[300px]"
            ref={navRef}
          >
            <div className="flex flex-col justify-center items-center text-black">
              <h2 className="text-lg font-bold mb-2 text-black">Navigation</h2>
              {navigationItems.map((element) => (
                <NavigationLinkButton
                  key={element.name}
                  name={element.name}
                  hrefLink={element.hrefLink}
                />
              ))}
            </div>
            {/* <button
              onClick={() => setIsModalOpen(false)}
              className="text-white bg-red-500 px-4 py-2 rounded"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
