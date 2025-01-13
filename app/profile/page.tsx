"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabase/supabaseClient";

const Profile: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push("/sign-in");
      }
    };

    checkAuth();

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setIsAuthenticated(true);
      } else {
        router.push("/sign-in");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="w-full justify-center flex flex-col items-center bg-colorEight">
      <div className="w-full min-h-screen "></div>
    </div>
  );
};

export default Profile;
