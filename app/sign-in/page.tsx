"use client";
import React, { useState } from "react";
import { NextPage } from "next";

import CustomTextInput from "@/components/CustomTextInput/CustomTextInput";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/supabase/supabaseAuth";
import { buttonDefaultStyle } from "@/consts/styles";

const SignIn: NextPage = () => {
  const router = useRouter();

  const [apiError, setApiError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const result = await signIn(userData.email, userData.password);

    if (result.success) {
      console.log("Sign-in successful!");
      router.push("/docs");
    } else {
      console.error("Sign-in failed:", result.error);
      setApiError(result.error ?? "An unexpected error occurred.");
    }
  };
  const validateInputs = () => {
    let isValid = true;
    const errorsList: any = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      errorsList.email = "Please enter a valid email address.";
      isValid = false;
    } else if (userData.email.trim() === "") {
      errorsList.email = "Email address cannot be empty.";
      isValid = false;
    }

    if (userData.password.trim() === "") {
      errorsList.password = "Password cannot be empty.";
      isValid = false;
    }

    setErrors(errorsList);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="w-full justify-center h-screen flex flex-col items-center bg-white">
      <div className=" h-full  flex flex-col items-center justify-center md:w-[600px] w-[90%]">
        <h1 className="text-2xl font-bold mb-4 font-orbitron_variable text-colorOne">
          Sign In
        </h1>
        {apiError && <p className="text-red-500 mb-4">{apiError}</p>}
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center 
           justify-center md:border border-gray-400 md:p-12 p-2 rounded-xl w-full"
        >
          <CustomTextInput
            placeholder="Enter Email"
            value={userData.email}
            onChange={handleInputChange}
            borderColor="border-colorSeven"
            name={"email"}
            label={"Email"}
            error={errors.email}
          />

          <CustomTextInput
            type="password"
            placeholder="Enter Password"
            value={userData.password}
            onChange={handleInputChange}
            borderColor="border-colorSeven"
            name={"password"}
            label={"Password"}
            error={errors.password}
          />
          <button type="submit" className={buttonDefaultStyle}>
            Sign In
          </button>
        </form>

        <div className="mt-4 text-xl font-jost_variabler text-colorOne flex :flex-row justify-center items-center w-full">
          <p className="w-full  md:text-end  text-center">Forgot password?</p>
          <Link
            className=" font-orbitron_variable text-colorFour md:ml-5 text-lg w-full text-center md:text-start"
            href={"/reset-password"}
          >
            Reset Password
          </Link>
        </div>
        <div className="mt-10 text-xl font-jost_variabler text-colorOne">
          Don`t have an account?
          <Link
            className=" font-orbitron_variable text-colorFour ml-5"
            href={"/sign-up"}
          >
            Sign-Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
