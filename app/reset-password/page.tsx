// "use client";
// import React, { useState } from "react";
// import { NextPage } from "next";
// import CustomTextInput from "@/components/custom_text_input/CustomTextInput";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signUp } from "@/supabase/supabaseAuth";

// const ResetPassword: NextPage = () => {
//   const router = useRouter();

//   const [apiError, setApiError] = useState<string | null>(null);

//   const [userData, setUserData] = useState<any>({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });
//   const [errors, setErrors] = useState<any>({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });

//   const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validateInputs()) return;

//     const result = await signUp(userData.email, userData.password);

//     if (result.success) {
//       console.log("Sign-up successful!");
//       router.push("/docs");
//     } else {
//       console.error("Sign-up failed:", result.error ?? "Unknown error");
//       setApiError(
//         result.error || "An unexpected error occurred. Please try again."
//       );
//     }
//   };

//   const validateInputs = () => {
//     let isValid = true;
//     const errorsList: any = {};

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(userData.email)) {
//       errorsList.email = "Please enter a valid email address.";
//       isValid = false;
//     } else if (userData.email.trim() === "") {
//       errorsList.email = "Email address cannot be empty.";
//       isValid = false;
//     }

//     if (userData.password.trim() === "") {
//       errorsList.password = "Password cannot be empty.";
//       isValid = false;
//     }

//     if (userData.passwordConfirm.trim() === "") {
//       errorsList.passwordConfirm = "Confirm password cannot be empty.";
//       isValid = false;
//     } else if (userData.passwordConfirm !== userData.password) {
//       errorsList.passwordConfirm =
//         "Your confirmation password has to match a password";
//       isValid = false;
//     }

//     setErrors(errorsList);
//     return isValid;
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUserData((prev: any) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev: any) => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <div className="w-full  flex flex-col items-center h-screen relative">
//       <div className="w-full h-full  flex flex-col items-center justify-center ">
//         <h1 className="text-2xl font-bold mb-4 font-orbitron_variable">
//           Sign Up
//         </h1>
//         {apiError && <p className="text-red-500 mb-4">{apiError}</p>}
//         <form
//           onSubmit={handleSignUp}
//           className="flex flex-col items-center md:w-[600px] w-[90%] z-30 md:border justify-center md:border-gray-400 p-2 md:p-12 rounded-xl"
//         >
//           <CustomTextInput
//             placeholder="Email"
//             value={userData.email}
//             name="email"
//             onChange={handleInputChange}
//             borderColor="border-colorSeven"
//             label={"Email"}
//             error={errors.email}
//           />

//           <CustomTextInput
//             type="password"
//             placeholder="Password"
//             value={userData.password}
//             onChange={handleInputChange}
//             borderColor="border-colorSeven"
//             name={"password"}
//             label={"Password"}
//             error={errors.password}
//           />

//           <CustomTextInput
//             type="password"
//             placeholder="Confirm Password"
//             value={userData.passwordConfirm}
//             onChange={handleInputChange}
//             borderColor="border-colorSeven"
//             name="passwordConfirm"
//             label={"Confirm Password"}
//             error={errors.passwordConfirm}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 md:w-full  w-full text-white  p-2 md:p-4 rounded mt-2 font-orbitron_variable font-bold"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="my-10 text-xl font-jost_variabler">
//           Already have an account?
//           <Link
//             className=" font-orbitron_variable text-colorFour ml-5"
//             href={"/sign-in"}
//           >
//             Sign-in
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
"use client";
import React, { useEffect, useState } from "react";
import CustomTextInput from "@/components/custom_text_input/CustomTextInput";
import { resetPassword } from "@/supabase/supabaseAuth";
import { supabase } from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1)); // Extract parameters after `#`
    const accessToken = params.get("access_token");

    if (!accessToken) {
      setError("Invalid or missing token.");
    } else {
      // Optionally store the token in state if needed
      console.log("Access token retrieved:", accessToken);
    }
  }, []);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword) {
      setError("Password cannot be empty.");
      return;
    }

    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");

    if (!accessToken) {
      setError("Invalid or missing token.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
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
        onSubmit={handlePasswordReset}
        className="w-[90%] max-w-md p-4 border rounded z-50"
      >
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 w-full rounded"
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
