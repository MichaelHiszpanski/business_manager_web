"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const UserButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

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
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex items-center gap-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <img
          src={user.user_metadata?.avatar_url || "/default-avatar.png"}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span>{user.user_metadata?.name || user.email}</span>
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-md w-48">
          <button
            onClick={() => router.push("/profile")}
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
