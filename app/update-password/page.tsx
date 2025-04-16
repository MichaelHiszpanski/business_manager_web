"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabase/supabaseClient";
import CustomTextInput from "@/components/CustomTextInput/CustomTextInput";
import { buttonDefaultStyle } from "@/consts/styles";

const UpdatePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleSetSessionFromURL = async () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (error) {
          setError("Failed to authenticate with the provided token.");
        }
      } else {
        setError("Invalid or missing tokens. Please try again.");
      }
    };

    handleSetSessionFromURL();
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const { error } = await supabase.auth.updateUser({ password });
    if (!error) {
      setMessage("Password updated successfully!");
      setTimeout(() => router.push("/"), 3000);
    } else {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  const validateInputs = () => {
    let isValid = true;
    let error: string = "";

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@£$%^&*])(?=.*\d).{10,}$/;

    if (password.trim() === "") {
      error = "Password cannot be empty.";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      error =
        "Password must be at least 10 characters long, include at least one uppercase letter, one special character (!@£$%^&*), and one number.";
      isValid = false;
    }

    setError(error);
    return isValid;
  };

  return (
    <div className="w-full flex flex-col items-center h-screen pt-[300px] bg-white">
      <h1 className="text-2xl font-bold mb-4 font-orbitron_variable text-colorOne">
        Set New Password
      </h1>
      {message && (
        <p className="text-green-500 my-5 px-2 font-orbitron_variable">
          {message}
        </p>
      )}

      <form
        onSubmit={handleUpdatePassword}
        className="flex flex-col items-center md:w-[600px] w-[90%]
        justify-center md:border border-gray-400 md:p-12 p-2 rounded-xl "
      >
        <CustomTextInput
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          borderColor="border-colorSeven"
          name={"password"}
          label={"Password"}
          error={error}
        />
        <div className="h-2" />
        <button type="submit" className={buttonDefaultStyle}>
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
