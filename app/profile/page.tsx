"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabase/supabaseClient";

const Profile: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [modalConfirm, setModalConfirm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        router.push("/sign-in");
      }
    };

    checkAuth();

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setIsAuthenticated(true);
      } else {
        router.push("/sign-in");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [router]);

  const deleteUserSupabaseAccount = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const accessToken = session?.access_token;
    if (!accessToken) return;

    const response = await fetch("/api/delete-user", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("response ===>", response);
    if (response.ok) {
      await supabase.auth.signOut();
      router.push("/");
    } else {
      alert("Failed to delete User Supabase account.");
    }
  };

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="w-screen h-screen justify-center flex flex-col items-center bg-colorOne">
      <h1 className="text-2xl md:text-5xl md:mb-10 font-bold mb-4 font-orbitron_variable text-white">
        Profile
      </h1>
      <div className="bg-black p-8 rounded-lg border-2 border-white shadow-md w-[90%] md:w-[500px] text-center">
        <div className=" w-full text-left">
          <p className="text-lg mb-2 text-white">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-lg mb-6 text-white">
            <strong>Joined:</strong>{" "}
            {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={() => setModalConfirm(true)}
          className="bg-red-600 text-white rounded-2xl px-12 py-2  hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>

      {modalConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 shadow-xl shadow-white">
          <div className="bg-white p-6 rounded-md w-[90%] max-w-md shadow-lg border-2 border-red-600">
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Are you sure you want to delete your account?
            </h2>
            <p className="mb-6 text-gray-700">
              This action is{" "}
              <strong className=" text-red-600">permanent</strong> and will
              remove your data!
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setModalConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setModalConfirm(false);
                  deleteUserSupabaseAccount();
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
