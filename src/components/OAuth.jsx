import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex justify-center items-center bg-red-700 w-full text-white rounded py-2 px-7 uppercase text-sm font-medium hover:bg-red-600 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">

      <FcGoogle className="mr-2 bg-white rounded-full text-2xl" />
      Continue with Google
      
    </button>
  );
};

export default OAuth;
