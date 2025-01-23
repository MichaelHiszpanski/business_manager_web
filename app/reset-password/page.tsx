"use client";
import React, { useEffect, useState } from "react";
import CustomTextInput from "@/components/custom_text_input/CustomTextInput";
import { supabase } from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "PASSWORD_RECOVERY" && session) {
          console.log("Password recovery event detected");
          const newPassword = prompt("Please enter your new password:");
          if (newPassword) {
            const { error } = await supabase.auth.updateUser({
              password: newPassword,
            });
            if (error) {
              setError("Failed to update password: " + error.message);
            } else {
              setMessage("Password updated successfully! Redirecting...");
              setTimeout(() => router.push("/sign-in"), 3000);
            }
          }
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  const handleResetPasswordRequest = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!newPassword) {
      setError("Password cannot be empty.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError("Failed to reset password: " + error.message);
    } else {
      setMessage("Password reset successful! Redirecting...");
      setTimeout(() => router.push("/sign-in"), 3000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-screen pt-[300px]">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleResetPasswordRequest}
        className="w-[90%] max-w-md p-4 border rounded z-50"
      >
        <CustomTextInput
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          borderColor="border-colorSeven"
          label="New Password"
          name={""}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded mt-4"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
