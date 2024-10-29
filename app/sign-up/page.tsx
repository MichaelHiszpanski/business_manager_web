"use client";
import React, { useState } from "react";
import NavigationBar from "../../src/components/navigation_bar/NavigationBar";
import { NextPage } from "next";
import Footer from "@/components/footer2/Footer";
import { signUp } from "@/firebase/auth";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      await signUp(email, password);
      console.log("User signed up successfully!");
    } catch (error: any) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="w-full justify-center flex flex-col items-center">
      <NavigationBar />
      <div className="w-full min-h-screen bg-colorSeven flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center w-1/2"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mb-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mb-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 mb-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer isVisible={true} />
    </div>
  );
};

export default SignUp;
