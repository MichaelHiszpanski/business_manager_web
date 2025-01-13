import { supabase } from "./supabaseClient";
import { setCookie, destroyCookie } from "nookies";

export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign-up error:", error.message);
      return {
        success: false,
        error: error.message || "An error occurred. Please try again later.",
      };
    }

    if (data.user) {
      console.log("User signed up successfully:", data);
      return { success: true };
    }

    return {
      success: false,
      error: "Unexpected error occurred during sign-up.",
    };
  } catch (err) {
    console.error("Error during sign-up:", err);
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    };
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Sign-in error:", error.message);
      if (error.message.includes("Invalid login credentials")) {
        return {
          success: false,
          error: "Invalid login credentials. Please try again.",
        };
      }
      return {
        success: false,
        error: error.message || "An error occurred. Please try again later.",
      };
    }

    if (data.session) {
      const token = data.session.access_token;

      setCookie(null, "token", token, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      console.log("User signed in successfully:", data);
      return { success: true };
    }

    return {
      success: false,
      error: "Unexpected error occurred during sign-in.",
    };
  } catch (err) {
    console.error("Error during sign-in:", err);
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    };
  }
};

export const logOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Log-out error:", error.message);
      return {
        success: false,
        error: error.message || "An error occurred. Please try again later.",
      };
    }

    destroyCookie(null, "token", { path: "/" });
    console.log("User signed out successfully!");
    return { success: true };
  } catch (err) {
    console.error("Error during log-out:", err);
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    };
  }
};
