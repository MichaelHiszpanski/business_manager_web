"use client";

import React, { useState } from "react";
import { resetPassword } from "@/supabase/supabaseAuth";
import CustomTextInput from "@/components/custom_text_input/CustomTextInput";
import Link from "next/link";
import { buttonDefaultStyle } from "@/consts/styles";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const result = await resetPassword(email);

    if (!result.success) {
      setError(`Failed to send password reset email: ${result.error?.message}`);
    } else {
      setMessage("Password reset email sent! Check your inbox.");
    }
  };

  const validateInputs = () => {
    let isValid = true;
    let error = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error = "Please enter a valid email address.";
      isValid = false;
    }

    if (email.trim() === "") {
      error = "Email address cannot be empty.";
      isValid = false;
    }

    setError(error);
    return isValid;
  };

  return (
    <div className="w-full flex flex-col items-center h-screen pt-[300px] bg-white">
      <h1 className="text-2xl font-bold mb-4 font-orbitron_variable text-colorOne">
        Forgot Password
      </h1>
      {message && (
        <p className="text-green-500 my-5 font-orbitron_variable">{message}</p>
      )}

      <form
        onSubmit={handlePasswordReset}
        className="flex flex-col items-center md:w-[600px] w-[90%]
        justify-center md:border border-gray-400 md:p-12 p-2 rounded-xl z-50"
      >
        <CustomTextInput
          placeholder="Enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          borderColor="border-colorSeven"
          name={"email"}
          label={"Email Address"}
          error={error}
        />
        <button type="submit" className={buttonDefaultStyle}>
          Send Reset Email
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
  );
};

export default ResetPassword;
