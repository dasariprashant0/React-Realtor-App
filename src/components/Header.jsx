import React from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return location.pathname === route;
  }  

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li
              className={`my-1 py-2 text-sm font-semibold border-b-[3px] cursor-pointer ${pathMatchRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`my-1 py-2 text-sm font-semibold border-b-[3px] cursor-pointer ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`my-1 py-2 text-sm font-semibold border-b-[3px] cursor-pointer ${pathMatchRoute("/sign-in") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;