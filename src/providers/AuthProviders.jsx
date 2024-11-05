import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useRequest from "../APIServices/useRequest";

export const AuthContext = createContext(null);

function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true); // Make sure initial state is 'true' until data is fetched

  const getUserData = async () => {
    try {
      let getUserDetails = await JSON.parse(localStorage.getItem("userCreds"));
      if (getUserDetails) {
        setUser(getUserDetails);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched (or after failure)
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleLoginData = async (userCreds) => {
    try {
      const loginUser = await postRequest("/users/login", userCreds);

      const user = loginUser?.data?.data?.modifiedUser;
      if (user) {
        localStorage.setItem("userCreds", JSON.stringify(user));
        setUser(user);
      } else {
        Swal.fire("No user data found.");
        throw new Error("No user data found.");
      }
    } catch (error) {
      Swal.fire("Credentials Don't Match");
      throw new Error("Credentials Don't Match");
    }
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleLoginData,
  };

  // Render loading spinner or a placeholder until user data is loaded
  if (loading) {
    return <div>Loading...</div>; // You can use a loading spinner here
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviders;
