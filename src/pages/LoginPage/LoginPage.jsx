import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/logo.png';
import loginImage from '../../assets/loginImage.png';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

function LoginPage() {
  const { handleLoginData, setLoading, user } = useContext(AuthContext);
  console.log('user', user);
  const [selectedRole, setSelectedRole] = useState(103);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      await handleLoginData({ email, password });

      Swal.fire({
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 2000,
      });

      // Redirect after successful login
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message || 'Invalid credentials',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center p-5">
      <div className="w-full max-w-4xl h-full rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="bg-orange-100 w-full md:w-1/2 flex justify-center items-center">
          <img src={loginImage} className="w-72 md:w-92" alt="Sign Up Logo" />
        </div>
        <form
          onSubmit={handleLogin}
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        >
          <div className="flex items-center justify-center">
            <Link to="/">
              <img src={img} className="w-20" alt="" />
            </Link>
            <h1 className="text-2xl font-poppins font-extrabold">
              Login to <span className="text-orange-600">Flavourfull </span>
              Fushion
            </h1>
          </div>
          <div className="mt-5 w-full">
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="border focus:ring-0 focus:border focus:border-gray-400 border-gray-200 w-full py-2 rounded-lg px-2"
                name="email"
                id="email"
                placeholder="email"
                required
              />
            </div>
            <div className="mt-5 flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="border focus:ring-0 focus:border focus:border-gray-400 border-gray-200 w-full py-2 rounded-lg px-2"
                name="password"
                id="password"
                placeholder="password"
                required
              />
            </div>

            {/* Role Selection Section */}
            {/* <div className="mt-5 flex justify-between">
              <button
                type="button"
                className={`w-full py-1 mr-2 rounded-lg ${
                  selectedRole === 103
                    ? "bg-orange-600 text-white"
                    : "bg-white text-black"
                } font-bold duration-200 hover:cursor-pointer`}
                onClick={() => setSelectedRole(103)}
              >
                As Buyer
              </button>
              <button
                type="button"
                className={`w-full py-1 ml-2 rounded-lg ${
                  selectedRole === 101
                    ? "bg-orange-600 text-white"
                    : "bg-white text-black"
                } font-bold duration-200 hover:cursor-pointer`}
                onClick={() => setSelectedRole(101)}
              >
                As Vendor
              </button>
              <button
                type="button"
                className={`w-full py-1 ml-2 rounded-lg ${
                  selectedRole === 109
                    ? "bg-orange-600 text-white"
                    : "bg-white text-black"
                } font-bold duration-200 hover:cursor-pointer`}
                onClick={() => setSelectedRole(109)}
              >
                As Admin
              </button>
            </div> */}

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
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
