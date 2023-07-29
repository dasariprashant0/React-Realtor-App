import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";


const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
      <Spinner />
    );
  }
// || In This statement there is conditional rendering which sees if the loggedIn state from 
// \/ useAuthStatus is true or false if true the children will be accesseble or it will redirect you to sign-in route.
  return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;
