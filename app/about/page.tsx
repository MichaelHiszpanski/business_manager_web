"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabase/supabaseClient";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ja } from "@/consts/images";
const About: NextPage = () => {
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
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="relative w-full flex flex-col items-center bg-gradient-to-tl from-colorOne via-colorFive to-colorGreen px-6 py-10 md:pt-[150px]">
      <div className="flex flex-col items-center text-center">
        <Image
          src={ja}
          alt="Profile Image"
          className="w-32 h-32 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6 text-colorTwo font-permanentMarker">
          Michael Hiszpanski
        </h1>
        <p className="text-lg mt-2 text-white font-jost_italic">
          Tech enthusiast with a passion for solving puzzles, both in code and
          in life.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="mt-10 bg-colorFive p-6 rounded-lg shadow-lg text-white md:w-2/3 text-center"
      >
        <h2 className="text-2xl font-bold mb-4 font-permanentMarker text-colorTwo">
          About Me
        </h2>
        <p className="text-lg font-orbitron_variable">
          Hello! I’m Michael, a passionate software developer pursuing my BSc in
          Computing. I have a strong foundation in software development,
          specializing in React, Next.js, and Flutter.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="mt-10 bg-colorThree p-6 rounded-lg shadow-lg text-white md:w-2/3 text-center"
      >
        <h2 className="text-2xl font-bold mb-4 font-permanentMarker text-colorTwo">
          Skills & Interests
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Cloud Technologies: Azure, AWS</li>
          <li>Web Development: React JS, Next.js</li>
          <li>Mobile App Development: Flutter</li>
          <li>Hobbies: Surfing, Hiking, Astrophysics</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
