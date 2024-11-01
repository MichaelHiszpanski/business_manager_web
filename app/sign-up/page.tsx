"use client";
import React, { useState } from "react";
import NavigationBar from "../../src/components/navigation_bar/NavigationBar";
import { NextPage } from "next";
import Footer from "@/components/footer2/Footer";
import { signUp } from "@/firebase/auth";
import CustomTextInput from "@/components/text_input/CustomTextInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const result = await signUp(email, password);
      if (result.success) {
        router.push("/docs");
      } else {
        console.error("Login failed:", result.error);
        setError(result.error ?? "An unexpected error occurred");
      }
      console.log("User signed up successfully!");
    } catch (error: unknown) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="w-full  flex flex-col items-center h-screen relative">
      <NavigationBar />
      <div className="w-full h-full  flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4 font-orbitron_variable">
          Sign Up
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center md:w-[600px] w-[90%] z-30 md:border justify-center md:border-gray-400 p-2 md:p-12 rounded-xl"
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

          <CustomTextInput
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            borderColor="border-colorSeven"
          />
          <button
            type="submit"
            className="bg-blue-500 md:w-full  w-full text-white  p-2 md:p-4 rounded mt-2 font-orbitron_variable font-bold"
          >
            Sign Up
          </button>
        </form>
        <div className="my-10 text-xl font-jost_variabler">
          Already have an account?
          <Link
            className=" font-orbitron_variable text-colorFour ml-5"
            href={"/sign-in"}
          >
            Sign-in
          </Link>
        </div>
      </div>

      {/* <div
        className="absolute top-1/8 left-[200px] w-[400px] h-[700px] rounded-full -rotate-45 bg-gradient-to-l from-colorSix to-colorSeven"
        style={{
          filter: "blur(28px)",
          opacity: "0.8",
        }}
      ></div> */}
      <Footer isVisible={true} backgroudnColor="from-colorSix to-colorSeven" />
    </div>
  );
};

export default SignUp;
