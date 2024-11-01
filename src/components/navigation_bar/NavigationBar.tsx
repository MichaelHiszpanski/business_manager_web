"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { logo, wave_one } from "@/consts/images";
import Image from "next/image";
import { navigationItems } from "@/consts/navigation_list";
import NavigationLinkButton from "../buttons/NavigationLinkButton";
import useOutsideClick from "../utils/useOutsideClick";
import { signOut, getAuth } from "firebase/auth";
import app from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
const NavigationBar: FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, () => setIsModalOpen(false));

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth(app);

  const isMobileSize = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, [auth]);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
      setError("An unexpected error occurred while signing out.");
    }
  };

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
          onClick={() => {
            if (isMobileSize) {
              setIsModalOpen(!isModalOpen);
            }
          }}
        />

        {navigationItems.map((element) => (
          <NavigationLinkButton
            key={element.name}
            name={element.name}
            hrefLink={element.hrefLink}
            className=" hidden md:flex"
          />
        ))}
        {isAuthenticated ? (
          <button
            onClick={handleLogOut}
            className="md:flex hidden  rounded-xl font-bold hover:scale-110 select-none font-orbitron_variable text-xl"
          >
            Log Out
          </button>
        ) : (
          <NavigationLinkButton
            name="Sign In"
            hrefLink="/sign-in"
            className="md:flex hidden"
          />
        )}
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

              {isAuthenticated ? (
                <button
                  onClick={handleLogOut}
                  className="flex md:hidden  rounded-xl font-bold hover:scale-110 select-none font-orbitron_variable text-xl"
                >
                  Log Out
                </button>
              ) : (
                <NavigationLinkButton name="Sign In" hrefLink="/sign-in" />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
