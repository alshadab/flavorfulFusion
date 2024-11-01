import React, { useContext, useState } from "react";
import img from "../../assets/logo.png";
import signupLogo from "../../assets/signupPage.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useRequest from "../../APIServices/useRequest";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

function SignUpPage() {
  const {setLoading} = useContext(AuthContext);

  const [postRequest] = useRequest();
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState(0);

  const navigate = useNavigate();

  // Handle file input change
  const handleImageChange = (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImage(file);
      setLoading(false);
    }
  };

  const handleSignUpUser = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log("image", image);
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("userEmail", email);
    formData.append("userFullName", fullName);
    formData.append("userImg", image);
    formData.append("userPass", password);
    formData.append("gender", gender);
    formData.append("phoneNumber", phoneNumber);
    formData.append("userType", userType);
    formData.append("shippingState", state);
    formData.append("shippingAddress", address);
    formData.append("shippingPostalCode", postalCode);

    await postRequest("/users/crt", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setLoading(false);
    Swal.fire("Created User");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen bg-orange-300 flex justify-center items-center p-4 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
      <div className="w-full max-w-8xl h-full bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <form
            onSubmit={handleSignUpUser}
            className="w-full h-full p-4 sm:px-8 lg:pl-20 py-2 text-sm"
          >
            {/* Header with logo and title */}
            <div className="flex flex-col items-center lg:items-start gap-y-2 lg:flex-row lg:gap-x-2 mb-5">
              <Link to="/">
                <img src={img} className="w-16 lg:w-20" alt="Logo" />
              </Link>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-poppins font-extrabold text-center lg:text-left">
                Signup to <span className="text-orange-600">Flavourfull</span>{" "}
                Fusion
              </h1>
            </div>

            {/* Username and Full Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-2 mb-5">
              <div className="flex flex-col col-span-1">
                <label htmlFor="userName">User Name</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="userName"
                  id="userName"
                  placeholder="username"
                />
              </div>
              <div className="flex flex-col col-span-1 sm:col-span-2">
                <label htmlFor="userFullName">Full Name</label>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="userFullName"
                  id="userFullName"
                  placeholder="full name"
                />
              </div>
            </div>

            {/* Email and Password fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-2 mb-5">
              <div className="flex flex-col col-span-1 sm:col-span-2">
                <label htmlFor="userEmail">User Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="userEmail"
                  id="userEmail"
                  placeholder="email"
                />
              </div>
              <div className="flex flex-col col-span-1">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
            </div>

            {/* Address field */}
            <div className="flex flex-col mb-5">
              <label htmlFor="address">Address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                name="address"
                id="address"
                placeholder="address"
              />
            </div>

            {/* Phone, State, Postal Code, Gender */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              <div className="flex flex-col">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="phone number"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state">State</label>
                <input
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="state"
                  id="state"
                  placeholder="state"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="postalCode"
                  id="postalCode"
                  placeholder="postal code"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="gender">Gender</label>
                <select
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="gender"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Photo Upload and User Type fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
              <div className="flex flex-col col-span-2">
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
              {selectedImage && (
                <div className="w-14 h-14 mt-2">
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <label htmlFor="userType">User Type</label>
                <select
                  className="border border-gray-200 focus:ring-0 focus:border-gray-400 w-full py-2 rounded-lg px-2"
                  name="userType"
                  id="userType"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="male">Vendor</option>
                  <option value="female">Buyer</option>
                </select>
              </div>
            </div>

            {/* Submit and additional options */}
            <div className="flex flex-col items-center lg:items-start mb-2">
              <input
                type="submit"
                className="w-full py-2 rounded-lg bg-orange-600 text-white font-bold duration-200 hover:bg-orange-700"
                value="Sign Up"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center">
              <div className="w-full flex items-center gap-x-2 justify-center">
                <p className="text-center lg:text-left">
                  Already a User of <span>Flavourfull</span> Fusion?
                </p>
                <Link to="/login" className="font-bold text-orange-600">
                  Login
                </Link>
              </div>
              <button className="flex items-center justify-center gap-x-2 px-4 py-2 mt-5 rounded bg-blue-500 text-white font-bold hover:bg-blue-600">
                <FcGoogle className="text-2xl" />
                Sign In With Google Account
              </button>
            </div>
          </form>
          <div className="hidden lg:flex justify-center items-center p-5">
            <img src={signupLogo} className="max-w-full" alt="Sign Up Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
