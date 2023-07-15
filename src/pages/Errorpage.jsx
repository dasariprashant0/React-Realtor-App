import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-[95.05vh]">
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        class="absolute h-full w-full object-cover"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-4xl md:text-6xl text-center text-white leading-tight mt-4">
            You are all alone here.
          </h1>
          <p class="font-extrabold text-6xl md:text-8xl mt-[10rem] md:mt-44 ml-[16rem] md:ml-[23.5rem] text-white animate-bounce">
            404
          </p>
          <button
            onClick={() => navigate("/")}
            class="bg-white hover:bg-black ml-[16rem] 
            md:ml-[23.5rem] hover:text-white text-black 
            py-1.5 md:py-3 px-6 md:px-10 rounded text-lg 
            font-semibold tracking-widest transition duration-300 ease-in-out"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
