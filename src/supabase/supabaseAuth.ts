import { supabase } from "./supabaseClient";
import { setCookie, destroyCookie } from "nookies";

export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message || "An error occurred. Please try again later.",
      };
    }

    if (data.user) {
      return { success: true };
    }

    return {
      success: false,
      error: "Unexpected error occurred during sign-up.",
    };
  } catch (err) {
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

      return { success: true };
    }

    return {
      success: false,
      error: "Unexpected error occurred during sign-in.",
    };
  } catch (err) {
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
      return {
        success: false,
        error: error.message || "An error occurred. Please try again later.",
      };
    }

    destroyCookie(null, "token", { path: "/" });

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    };
  }
};

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://business-manager-website.vercel.app/update-password",
  });
  return error ? { success: false, error } : { success: true };
};
