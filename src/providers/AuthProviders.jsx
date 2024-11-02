import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useRequest from '../APIServices/useRequest';

export const AuthContext = createContext(null);

function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(false);

  const getUserData = () => {
    try {
      let getUserDetails = JSON.parse(localStorage.getItem('userCreds'));
      if (getUserDetails) {
        setUser(getUserDetails);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleLoginData = async (userCreds) => {
    try {
      const loginUser = await postRequest('/users/login', userCreds);

      const user = loginUser?.data?.data?.modifiedUser;
      if (user) {
        localStorage.setItem('userCreds', JSON.stringify(user));
        setUser(user);
      } else {
        Swal.fire('No user data found.');
        throw new Error('No user data found.');
      }
    } catch (error) {
      Swal.fire("Credentials Don't Match");
      throw new Error("Credentials Don't Match");
    }
  };
  console.log('user', user);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleLoginData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviders;
