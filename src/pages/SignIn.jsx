import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from "../components/OAuth";
import { auth } from "../Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const errors = [];

    if (!email) {
      errors.push("Please fill in your email address");
    }
    if (!password) {
      errors.push("Please enter a password");
    }

    if (errors.length > 0) {
      toast.error(errors.join(", "));
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      if (user) {
        // User is signed in
        toast.success("You have signed in successfully!");
        navigate("/");
      } 
        await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const uid = user.uid;
        } 
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else if (errorCode === "auth/wrong-password") {
        toast.error("Password is not correct. Please Check Again.");
      } else {
        toast.error(errorMessage);
      }
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">Sign In</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form action="" onSubmit={onSubmit}>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                placeholder="EmaIl Address"
                // required={true}
                value={email}
                onChange={onChange}
                className="text-input"
              />
            </div>
            <div className=" mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                // required={true}
                value={password}
                onChange={onChange}
                className="text-input"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="showPassword"
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="showPassword"
                />
              )}
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to={"/sign-up"}
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  {" "}
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={"/forgot-password"}
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign In
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
