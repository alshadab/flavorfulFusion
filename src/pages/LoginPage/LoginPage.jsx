import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/logo.png";
import loginImage from "../../assets/loginImage.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProviders";

function LoginPage() {
  const { handleLoginData, setLoading, user } = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState(101);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const usertype = selectedRole;
      const userCreds = { email, password, usertype };
      console.log(userCreds, "User Login Details");
      await handleLoginData(userCreds);
      if (handleLoginData) {
        console.log(user, "Userrrr");
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-center items-center px-20 py-10">
      <div className="w-full h-full rounded-lg shadow-lg">
        <div className="w-full h-full grid grid-cols-2">
          <div className="bg-orange-100 w-full h-full flex justify-center items-center">
            <img src={loginImage} className="w-92" alt="Sign Up Logo" />
          </div>
          <form 
          onSubmit={handleLogin}
          className="w-full h-full px-28 py-20 flex flex-col justify-center">
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
                    className="border focus:ring-0 focus:border focus:border-gray-400 border-gray-200 w-full py-2 rounded-lg px-2"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div className="mt-5 flex flex-col items-start col-span-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="border focus:ring-0 focus:border focus:border-gray-400 border-gray-200 w-full py-2 rounded-lg px-2"
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
                      selectedRole === 101
                        ? "bg-orange-600 text-white"
                        : "bg-white text-black"
                    } font-bold duration-200 hover:cursor-pointer`}
                    onClick={() => setSelectedRole(101)}
                  >
                    As Buyer
                  </button>
                  <button
                    type="button"
                    className={`w-full py-1 ml-2 rounded-lg ${
                      selectedRole === 103
                        ? "bg-orange-600 text-white"
                        : "bg-white text-black"
                    } font-bold duration-200 hover:cursor-pointer`}
                    onClick={() => setSelectedRole(103)}
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

                <div className="flex items-center justify-center mt-10">
                  <button className="flex items-center gap-x-2 px-4 py-2 rounded bg-blue-500 text-white font-bold duration-200 hover:duration-200 hover:bg-blue-600">
                    <FcGoogle className="bg-white text-2xl" />
                    Sign In With Google Account
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
