import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useRequest from "../APIServices/useRequest";
import GlobalLoading from "../components/GlobalComponents/GlobalLoading/GlobalLoading";

export const AuthContext = createContext(null);

function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [postRequest, getRequest] = useRequest();
  const [addedProduct, setAddedProduct] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const [loading, setLoading] = useState(true); // Global loading state
  const [removeCart, setRemoveCart] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const getUserData = async () => {
    setLoading(true); // Start loading
    try {
      const getUserDetails = await JSON.parse(
        localStorage.getItem("userCreds")
      );
      if (getUserDetails) {
        setUser(getUserDetails);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const removeFromCart = async (id) => {
    setLoading(true);
    try {
      const removeMechanism = await getRequest(`/carts/del/byId/${id}`);
      if (removeMechanism?.data?.error === false) {
        setRemoveCart(!removeCart);
        Swal.fire("Successfully Removed From Cart");
      } else {
        Swal.fire("Failed to remove the item from the cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmCartItem = async (id) => {
    setLoading(true);
    try {
      const confirmationData = await postRequest("/orders/crt", { cartId: id });
      if (confirmationData?.data?.error === false) {
        setRemoveCart(!removeCart);
        Swal.fire("Successfully Placed an Order");
        return true;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCartItemsNumber = async () => {
    if (user?._id) {
      setLoading(true);
      try {
        const fetchData = await getRequest(`/carts/src/byuser/${user._id}`);
        setCartItem(fetchData?.data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (user) {
      fetchCartItemsNumber();
    }
  }, [user, addedProduct, removeCart]);

  const handleLoginData = async (userCreds) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product, stock) => {
    try {
      const { value: quantity } = await Swal.fire({
        title: "Enter Quantity",
        input: "number",
        inputAttributes: {
          min: 1,
          max: stock,
          step: 1,
          style: "appearance: none; -moz-appearance: textfield;",
        },
        customClass: {
          input: "no-spinner",
        },
        showCancelButton: true,
        confirmButtonText: "Add to Cart",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        inputValidator: (value) => {
          if (!value || value <= 0) {
            return "Please enter a valid quantity!";
          } else if (value > stock) {
            return `Only ${stock} items are available in stock!`;
          }
        },
      });

      if (quantity) {
        setLoading(true);
        const addCartDetails = await postRequest("/carts/crt", {
          userId: user?._id,
          productId: product?._id,
          quantity: parseInt(quantity),
        });

        if (addCartDetails?.data?.error === false) {
          Swal.fire({
            title: "Added to Cart",
            text: `You have added ${quantity} items to your cart.`,
            icon: "success",
          });
          setAddedProduct(!addedProduct);
          return true;
        } else {
          Swal.fire("Failed to Add");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleLoginData,
    addedProduct,
    setAddedProduct,
    addToCart,
    setCartItem,
    cartItem,
    removeFromCart,
    confirmCartItem,
  };

  if (loading) {
    return <GlobalLoading />; // Show global loading
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviders;
