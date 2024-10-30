import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebase";
import { setCookie } from "nookies";

const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully!");
    return { success: true };
  } catch (error) {
    console.error("Error signing up:", error.message);
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();
    setCookie(null, "token", token, { path: "/" });
    return { success: true };
  } catch (error) {
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found"
    ) {
      return {
        success: false,
        error: "Invalid login credentials. Please try again.",
      };
    }
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    };
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully!");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};
