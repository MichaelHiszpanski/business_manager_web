"use client";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { userLogo, userLogo2 } from "@/consts/images";
import Image from "next/image";
import useOutsideClick from "@/utils/helpers/useOutsideClick";

const UserButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/");
      setMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navigateProfile = () => {
    router.push("/profile");
    setMenuOpen(false);
  };

  useOutsideClick(dropdownRef, () => setMenuOpen(false));

  if (!user) {
    return null;
  }

  return (
    <div className=" ">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex  hover:scale-125 transition-transform duration-300 ease-in-out
          items-center gap-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <Image
          src={userLogo2}
          alt="User"
          className="select-none overflow-hidden"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          onDragStart={(e) => e.preventDefault()}
          onClick={(e) => e.preventDefault()}
          height={55}
          width={55}
        />
      </button>

      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute border-2 border-colorSix bg-colorFive rounded-xl shadow-md transform -translate-x-1/2"
          style={{ width: "156px" }}
        >
          <button
            onClick={navigateProfile}
            className="w-full px-4 py-2 text-left text-colorSix font-mono font-semibold hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-colorSix font-mono font-semibold hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
