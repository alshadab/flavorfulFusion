import React, { useState } from "react";
import img from "../../assets/logo.png";
import signupLogo from "../../assets/signupPage.png";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for the uploaded image
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-orange-300 flex justify-center items-center px-20 py-10">
      <div className="w-full h-full bg-white rounded-lg shadow-lg">
        <div className="w-full h-full grid grid-cols-2">
          <form className="w-full h-full pl-20 py-2 text-sm">
            <div className="flex items-center justify-center gap-x-2">
              <Link to="/">
                <img src={img} className="w-20" alt="" />
              </Link>
              <h1 className="text-2xl font-poppins font-extrabold">
                Signup to <span className="text-orange-600">Flavourfull </span>
                Fushion
              </h1>
            </div>
            <div className="w-full h-full">
              <div className="grid grid-cols-3 gap-x-2">
                <div className="flex flex-col items-start col-span-1">
                  <label htmlFor="userName">User Name</label>
                  <input
                    type="text"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="userName"
                    id="userName"
                    placeholder="username"
                  />
                </div>
                <div className="flex flex-col items-start col-span-2">
                  <label htmlFor="userFullName">Full Name</label>
                  <input
                    type="text"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="userFullName"
                    id="userFullName"
                    placeholder="full name"
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-x-5">
                <div className="flex flex-col items-start col-span-2">
                  <label htmlFor="userEmail">User Email</label>
                  <input
                    type="email"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="userEmail"
                    id="userEmail"
                    placeholder="email"
                  />
                </div>
                <div className="flex flex-col items-start col-span-1">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="flex flex-col items-start">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="address"
                    id="address"
                    placeholder="address"
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-x-2">
                <div className="flex flex-col items-start">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="phone number"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="state"
                    id="state"
                    placeholder="state"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="postalCode"
                    id="postalCode"
                    placeholder="postal code"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="gender"
                    id="gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Photo Upload Section */}
              <div className="mt-5 grid grid-cols-3 gap-x-4">
                <div className="col-span-2 flex items-center justify-between gap-x-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="photoUpload">Upload Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full py-2 rounded-lg"
                      name="photoUpload"
                      id="photoUpload"
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* Show Uploaded Image */}
                  {selectedImage && (
                    <div className="">
                      <img
                        src={selectedImage}
                        alt="Uploaded"
                        className="w-14 h-14 object-cover rounded-xl"
                      />
                    </div>
                  )}
                </div>
                <div className="col-span-1 flex flex-col items-start">
                  <label htmlFor="userType">User Type</label>
                  <select
                    className="border-2 w-full py-2 rounded-lg px-2"
                    name="userType"
                    id="userType"
                  >
                    <option value="">Select Type</option>
                    <option value="male">Vendor</option>
                    <option value="female">Buyer</option>
                  </select>
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  className="mt-5 w-full py-2 rounded-lg bg-orange-600 text-white font-bold duration-200 hover:duration-200 hover:cursor-pointer hover:bg-orange-700"
                  value="Sign Up"
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <h1>
                  Already a User of <span>Flavourfull</span> Fushion ?
                </h1>
                <Link to="/login">
                  <p className="font-bold text-orange-600 duration-200 hover:duration-200 hover:cursor-pointer hover:text-orange-700">
                    Login
                  </p>
                </Link>
              </div>
              <div className="mt-8 text-center grid grid-cols-2 gap-x-4 text-sm">
                <button className="px-4 py-2 rounded bg-blue-500 text-white font-bold duration-200 hover:duration-200 hover:scale-105">
                  Sign In With Facebook
                </button>
                <button className="px-4 py-2 rounded bg-gray-400 text-white font-bold duration-200 hover:duration-200 hover:scale-105">
                  Sign In With Google Account
                </button>
              </div>
            </div>
          </form>
          <div className="w-full h-full flex justify-center items-center">
            <img src={signupLogo} className="w-92" alt="Sign Up Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
