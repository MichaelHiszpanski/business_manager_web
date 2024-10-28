import { auth } from "./firebase";

export const signUp = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log("User signed up successfully!");
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("User signed in successfully!");
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    console.log("User signed out successfully!");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};