"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabase/supabaseClient";

const UpdatePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (!error) {
      setMessage("Password updated successfully!");
      setTimeout(() => router.push("/sign-in"), 3000);
    } else {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-screen pt-[300px]">
      <h1 className="text-2xl font-bold mb-4">Set New Password</h1>
      <form
        onSubmit={handleUpdatePassword}
        className="w-[90%] max-w-md p-4 border rounded z-50"
      >
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded mt-4"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
