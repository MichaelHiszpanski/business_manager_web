"use client";
import React, { FC } from "react";
import { wave_one } from "@/consts/images";
import Image from "next/image";
import { navigationItems } from "@/consts/navigation_list";
import NavigationLinkButton from "../buttons/NavigationLinkButton";
const NavigationBar: FC = () => {
  return (
    <nav className="w-full relative h-[100px] flex flex-row justify-evenly items-center">
      <Image
        src={wave_one}
        alt="bg"
        className="w-full absolute top-0 select-none"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onDragStart={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      />
      <div className="flex flex-row justify-evenly items-center w-full h-full z-50">
        {navigationItems.map((element) => (
          <NavigationLinkButton
            key={element.name}
            name={element.name}
            hrefLink={element.hrefLink}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
