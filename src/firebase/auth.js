import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully!");
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully!");
  } catch (error) {
    console.error("Error signing in:", error.message);
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
