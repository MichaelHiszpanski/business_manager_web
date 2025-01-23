"use client";

import React, { useState } from "react";
import { supabase } from "@/supabase/supabaseClient";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(`Failed to send password reset email: ${error.message}`);
    } else {
      setMessage("Password reset email sent! Check your inbox.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-screen pt-[300px]">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handlePasswordReset}
        className="w-full max-w-md p-4 border rounded z-50"
      >
        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
