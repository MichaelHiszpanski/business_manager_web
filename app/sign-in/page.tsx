"use client";
import React, { useState } from "react";
import NavigationBar from "../../src/components/navigation_bar/NavigationBar";
import { NextPage } from "next";
import Footer from "@/components/footer2/Footer";
import { signIn } from "@/firebase/auth";
import CustomTextInput from "@/components/text_input/CustomTextInput";
import Link from "next/dist/client/link";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full justify-center h-screen flex flex-col items-center">
      <NavigationBar />
      <div className="w-full h-full  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 font-orbitron_variable">
          Sing In
        </h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center md:w-[600px] w-3/4
           justify-center z-50 border border-gray-400 p-12 rounded-xl"
        >
          <CustomTextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderColor="border-colorSeven"
          />

          <CustomTextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderColor="border-colorSeven"
          />
          <button
            type="submit"
            className="bg-blue-500 md:w-full  bw-3/4 text-white px-4 py-2 rounded mt-2 font-orbitron_variable font-bold"
          >
            Sign In
          </button>
        </form>
        <div className="my-10 text-xl font-jost_variabler">
          Don`t have an account?
          <Link
            className=" font-orbitron_variable text-colorFour ml-5"
            href={"/sign-up"}
          >
            Sign-up
          </Link>
        </div>
      </div>
      <Footer isVisible={true} backgroudnColor="from-colorSix to-colorSeven" />
    </div>
  );
};

export default SignIn;
