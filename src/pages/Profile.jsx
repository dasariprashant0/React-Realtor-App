import React, { useState } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const navigate = useNavigate()

  const onSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Signed Out Successfully.")
      navigate("/sign-in")
    }).catch((error) => {
      toast.error("There was an error in Signing Out.")
    })
  }

  return (
    <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-center mt-6 text-3xl font-bold">My Profile</h1>

      <div className="w-full md:w-[60%] mt-6 px-3">
        <form action="">
          {/* Name Input */}

          <input
            type="text"
            id="name"
            value={name}
            disabled
            className="text-input mb-6"
          />

          {/* Email Input */}

          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="text-input mb-6"
          />

          <div className="flex justify-between items-center whitespace-nowrap text-sm sm:text-lg mb-6">
            <p>
              Do you want to change your name?{" "}
              <span className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 cursor-pointer">
                Edit
              </span>
            </p>
            <p className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1 cursor-pointer" onClick={onSignOut}>Sign out</p>
          </div>

          <button className="flex justify-center items-center bg-blue-700 w-full text-white rounded py-2 px-7 uppercase text-sm font-medium hover:bg-blue-600 active:bg-blue-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">
            sell or rent your home
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
