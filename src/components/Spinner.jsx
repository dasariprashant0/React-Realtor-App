import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50">
      <ClipLoader color="#36d7b7" size={85} speedMultiplier={0.5} />;
    </div>
  );
};

export default Spinner;
