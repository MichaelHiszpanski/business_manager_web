"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import CustomTextInput from "@/components/CustomTextInput/CustomTextInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/supabase/supabaseAuth";
import { buttonDefaultStyle } from "@/consts/styles";

const SignUp: NextPage = () => {
  const router = useRouter();

  const [apiError, setApiError] = useState<string | null>(null);

  const [userData, setUserData] = useState<any>({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState<any>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const result = await signUp(userData.email, userData.password);

    if (result.success) {
      console.log("Sign-up successful!");
      router.push("/docs");
    } else {
      console.error("Sign-up failed:", result.error ?? "Unknown error");
      setApiError(
        result.error || "An unexpected error occurred. Please try again."
      );
    }
  };

  const validateInputs = () => {
    let isValid = true;
    const errorsList: any = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userData.email.trim() === "") {
      errorsList.email = "Email address cannot be empty.";
      isValid = false;
    } else if (!emailRegex.test(userData.email)) {
      errorsList.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (userData.password.trim() === "") {
      errorsList.password = "Password cannot be empty.";
      isValid = false;
    }

    if (userData.passwordConfirm.trim() === "") {
      errorsList.passwordConfirm = "Confirm password cannot be empty.";
      isValid = false;
    } else if (userData.passwordConfirm !== userData.password) {
      errorsList.passwordConfirm =
        "Your confirmation password has to match a password";
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
    <div className="w-full  flex flex-col items-center h-screen relative bg-white">
      <div className="w-full h-full  flex flex-col items-center justify-center ">
        <h1 className="text-2xl mt-24 font-bold mb-4 font-orbitron_variable text-colorOne">
          Sign Up
        </h1>
        {apiError && <p className="text-red-500 mb-4">{apiError}</p>}
        <form
          onSubmit={handleSignUp}
          className="flex flex-col  items-cent§er md:w-[600px] w-[90%]  md:border justify-center md:border-gray-400 p-2 md:p-12 rounded-xl"
        >
          <CustomTextInput
            placeholder="Email"
            value={userData.email ?? ""}
            name="email"
            onChange={handleInputChange}
            borderColor="border-colorSeven"
            label={"Email"}
            error={errors.email}
          />

          <CustomTextInput
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleInputChange}
            borderColor="border-colorSeven"
            name={"password"}
            label={"Password"}
            error={errors.password}
          />

          <CustomTextInput
            type="password"
            placeholder="Confirm Password"
            value={userData.passwordConfirm}
            onChange={handleInputChange}
            borderColor="border-colorSeven"
            name="passwordConfirm"
            label={"Confirm Password"}
            error={errors.passwordConfirm}
          />
          <button type="submit" className={buttonDefaultStyle}>
            Sign Up
          </button>
        </form>
        <div className="my-10 text-xl font-jost_variabler text-colorOne">
          Already have an account?
          <Link
            className=" font-orbitron_variable text-colorFour ml-5"
            href={"/sign-in"}
          >
            Sign-In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
