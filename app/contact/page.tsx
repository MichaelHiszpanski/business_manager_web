"use client";
import React, { useState, useEffect } from "react";
import NavigationBar from "@/components/navigation_bar/NavigationBar";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import app from "@/firebase/firebase";
import Footer from "@/components/footer/Footer";

const Contact: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push("/sign-in");
      }
    });
    return unsubscribe;
  }, [auth, router]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="w-full justify-center flex flex-col items-center bg-colorEight">
      <NavigationBar />
      <div className="w-full min-h-screen "></div>
      <Footer isVisible={true} backgroudnColor="from-colorSix to-colorSeven" />
    </div>
  );
};

export default Contact;
