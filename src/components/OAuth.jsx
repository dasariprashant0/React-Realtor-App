import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, db } from "../Firebase";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const OAuth = () => {
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      auth.languageCode = 'it';
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      toast.success("You have signed in successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google Authentication");
    }
  };

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex justify-center items-center bg-red-700 w-full text-white rounded py-2 px-7 uppercase text-sm font-medium hover:bg-red-600 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
    >
      <FcGoogle className="mr-2 bg-white rounded-full text-2xl" />
      Continue with Google
    </button>
  );
};

export default OAuth;
