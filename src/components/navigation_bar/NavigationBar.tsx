"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { logo, wave_one } from "@/consts/images";
import Image from "next/image";
import { navigationItems } from "@/consts/navigation_list";
import NavigationLinkButton from "../buttons/NavigationLinkButton";
import useOutsideClick from "../../utils/tools/useOutsideClick";
import { signOut, getAuth } from "firebase/auth";
// import app from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { supabase } from "@/supabase/supabaseClient";
import UserButton from "@/supabase/UserButton";
const NavigationBar: FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, () => setIsModalOpen(false));

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const auth = getAuth(app);

  // const isMobileSize = useMediaQuery({ maxWidth: 767 });

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setIsAuthenticated(!!user);
  //   });
  //   return unsubscribe;
  // }, [auth]);

  // const handleLogOut = async () => {
  //   try {
  //     await signOut(auth);
  //     setIsAuthenticated(false);
  //     router.push("/");
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //     setError("An unexpected error occurred while signing out.");
  //   }
  // };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isMobileSize = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);
  const handleNavigation = (href: string) => {
    router.push(href);
    setIsModalOpen(false);
  };
  // const handleLogOut = async () => {
  //   try {
  //     const { error } = await supabase.auth.signOut();
  //     if (error) throw error;

  //     setIsAuthenticated(false);
  //     router.push("/");
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //     setError("An unexpected error occurred while signing out.");
  //   }
  // };

  return (
    <nav className="w-full z-50 fixed top-0  h-[100px] flex flex-row justify-evenly items-center">
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
          <UserButton />
        ) : (
          <NavigationLinkButton
            name="Sign In"
            hrefLink="/sign-in"
            className="md:flex hidden"
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
              {/* <h2 className="text-lg font-bold mb-2 text-black">Navigation</h2> */}
              {navigationItems.map((element) => (
                <NavigationLinkButton
                  key={element.name}
                  name={element.name}
                  hrefLink={element.hrefLink}
                  className="text-black font-bold hover:underline mb-2"
                  onClick={() => setIsModalOpen(false)}
                />
              ))}

              {isAuthenticated ? (
                <UserButton />
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
