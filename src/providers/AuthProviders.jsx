import React, { createContext, useEffect, useState } from 'react'
import Swal from "sweetalert2";
import useRequest from '../APIServices/useRequest';

export const AuthContext = createContext(null);

function AuthProviders({children}) {
    const [user, setUser] = useState(null);
    const [postRequest, getRequest] = useRequest();
    const [loading, setLoading] = useState(false);

    const getUserData = () => {
        try {
          let getUserDetails = JSON.parse(localStorage.getItem("userCreds"));
          if (getUserDetails) {
            setUser(getUserDetails);
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      useEffect(()=>{
        getUserData();
      },[]);

      const handleLoginData = async (userCreds) => {
        try {
          let loginUser = await postRequest("/users/login", userCreds);
          const setUserToLocal = localStorage.setItem(
            "userCreds",
            JSON.stringify(loginUser?.data?.data?.modifiedUser)
          );
    
          setUser(setUserToLocal);
          setLoading(false);
        } catch (error) {
          Swal.fire("Credentials Doesn't Match");
          setLoading(false);
        }
      };

    const authInfo = {
        user, 
        setUser,
        loading, 
        setLoading,
        handleLoginData
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProviders