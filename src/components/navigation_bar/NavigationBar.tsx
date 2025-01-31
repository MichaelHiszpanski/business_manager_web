"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { logo, wave_one } from "@/consts/images";
import Image from "next/image";
import { navigationItems } from "@/consts/navigation_list";
import NavigationLinkButton from "../buttons/NavigationLinkButton";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { supabase } from "@/supabase/supabaseClient";
import UserButton from "@/supabase/UserButton";
import useOutsideClick from "@/utils/helpers/useOutsideClick";

const NavigationBar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, () => setIsModalOpen(false));

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isMobileSize = useMediaQuery({ maxWidth: 767 });

  const isDocsPage = pathname.startsWith("/docs");

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);
  const styleButtonsLinks =
    "text-colorSix shadow-lg shadow-white px-5 p-2 bg-colorFive rounded-xl overflow-hidden bg-opacity-75 border border-colorSix";
  return (
    <nav className="w-full z-50 fixed top-0  h-[100px] flex flex-row justify-evenly items-center">
      <Image
        src={wave_one}
        alt="bg"
        className=" w-full absolute top-0 md:top-[-60px]   select-none overflow-hidden "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onDragStart={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      />
      <div className="flex flex-row md:justify-evenly items-center w-full h-full z-50">
        <div className="p-5 rounded-full bg-gradient-to-r from-colorSix to-colorSeven ">
          <Image
            src={logo}
            alt="logo"
            className="w-24 h-24 cursor-pointer select-none"
            onClick={() => {
              if (isMobileSize) {
                setIsModalOpen(!isModalOpen);
              }
            }}
          />
        </div>

        {navigationItems.map((element) => (
          <NavigationLinkButton
            key={element.name}
            name={element.name}
            hrefLink={element.hrefLink}
            className={`hidden md:flex ${
              isDocsPage ? styleButtonsLinks : "text-black"
            }`}
          />
        ))}
        {isAuthenticated ? (
          <UserButton />
        ) : (
          <NavigationLinkButton
            name="Sign In"
            hrefLink="/sign-in"
            className={`hidden md:flex ${
              isDocsPage ? styleButtonsLinks : "text-black"
            }`}
          />
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          <div
            className="bg-gradient-to-r from-colorSix to-colorSeven w-[250px] rounded-full justify-center items-center flex flex-col shadow-sm  h-[250px] mt-[100px] "
            ref={navRef}
          >
            <div className="flex flex-col justify-center items-center text-black ">
              {navigationItems.map((element) => (
                <NavigationLinkButton
                  key={element.name}
                  name={element.name}
                  hrefLink={element.hrefLink}
                  className={` ${
                    isDocsPage ? "text-white" : "text-black"
                  } font-bold hover:underline mb-2"`}
                  onClick={() => setIsModalOpen(false)}
                />
              ))}

              {isAuthenticated ? (
                <UserButton />
              ) : (
                <NavigationLinkButton
                  name="Sign In"
                  hrefLink="/sign-in"
                  className={` ${isDocsPage ? "text-white" : "text-black"}`}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
