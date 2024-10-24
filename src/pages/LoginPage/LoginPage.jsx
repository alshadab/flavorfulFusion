import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png";
import signupLogo from "../../assets/signupPage.png";

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("buyer"); // Default selected role

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-center items-center px-20 py-10">
      <div className="w-full h-full bg-orange-200 rounded-lg shadow-lg">
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full h-full flex justify-center items-center">
            <img src={signupLogo} className="w-92" alt="Sign Up Logo" />
          </div>
          <form className="w-full h-full px-28 py-20 flex flex-col justify-center">
            <div className="">
              <div className="flex items-center justify-center ">
                <Link to="/">
                  <img src={img} className="w-20" alt="" />
                </Link>
                <h1 className="text-2xl font-poppins font-extrabold">
                  Login to <span className="text-orange-600">Flavourfull </span>
                  Fushion
                </h1>
              </div>
              <div className="mt-5 w-full h-full">
                <div className="flex flex-col items-start col-span-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div className="mt-5 flex flex-col items-start col-span-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>

                {/* Role Selection Section */}
                <div className="mt-5 flex justify-between">
                  <button
                    type="button"
                    className={`w-full py-1 mr-2 rounded-lg ${
                      selectedRole === "buyer"
                        ? "bg-orange-600 text-white"
                        : "bg-white text-black"
                    } font-bold duration-200 hover:cursor-pointer`}
                    onClick={() => setSelectedRole("buyer")}
                  >
                    As Buyer
                  </button>
                  <button
                    type="button"
                    className={`w-full py-1 ml-2 rounded-lg ${
                      selectedRole === "vendor"
                        ? "bg-orange-600 text-white"
                        : "bg-white text-black"
                    } font-bold duration-200 hover:cursor-pointer`}
                    onClick={() => setSelectedRole("vendor")}
                  >
                    As Vendor
                  </button>
                </div>

                <div>
                  <input
                    type="submit"
                    className="mt-10 w-full py-2 rounded-lg bg-orange-600 text-white font-bold duration-200 hover:duration-200 hover:cursor-pointer hover:bg-orange-700"
                    value="Login"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <h1>
                    New to <span>Flavourfull</span> Fushion?
                  </h1>
                  <Link to="/signup">
                    <p className="font-bold text-orange-600 duration-200 hover:duration-200 hover:cursor-pointer hover:text-orange-700">
                      Create Account
                    </p>
                  </Link>
                </div>

                <div className="mt-10 text-center grid grid-cols-2 gap-x-4 text-sm">
                  <button className="px-4 py-2 rounded bg-gray-400 text-white font-bold duration-200 hover:duration-200 hover:scale-105">
                    Sign In With Google Account
                  </button>
                  <button className="px-4 py-2 rounded bg-blue-500 text-white font-bold duration-200 hover:duration-200 hover:scale-105">
                    Sign In With Facebook
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
