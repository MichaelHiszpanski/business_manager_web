"use client";
import React, { useState } from "react";
import NavigationBar from "../../src/components/navigation_bar/NavigationBar";
import { NextPage } from "next";
import Footer from "@/components/footer/Footer";
import { signIn } from "@/firebase/auth";
import CustomTextInput from "@/components/custom_text_input/CustomTextInput";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";

const SignIn: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn(email, password);

    console.log("LOGIN SUCCESS 1");
    if (result.success) {
      console.log("LOGIN SUCCESS 2");
      setTimeout(() => {
        router.push("/docs");
      }, 100);
    } else {
      console.error("Login failed:", result.error);
      setError(result.error ?? "An unexpected error occurred");
    }
  };

  return (
    <div className="w-full justify-center h-screen flex flex-col items-center">
      <NavigationBar />
      <div className="w-full h-full  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 font-orbitron_variable">
          Sign In
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center md:w-[600px] w-[90%]
           justify-center z-30 md:border border-gray-400 md:p-12 p-2 rounded-xl"
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
            className="bg-blue-500 md:w-full  w-full text-white px-4 py-2 rounded mt-2 font-orbitron_variable font-bold"
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
