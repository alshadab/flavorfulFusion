import React, { useContext, useState } from "react";
import useRequest from "../../../APIServices/useRequest";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

function UserDashAllCarts() {
  const {
    user,
    cartItem = [],
    setLoading,
    loading,
    removeFromCart,
    confirmCartItem,
    setCartItem,
  } = useContext(AuthContext);

  const [postRequest, getRequest] = useRequest();
  const [items, setItems] = useState(cartItem);

  // Calculate total price
  const calculateTotalPrice = () =>
    items &&
    items?.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

  // Handle quantity increase
  const handleIncrease = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  // Handle quantity decrease
  const handleDecrease = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };

  // Remove item from cart
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Place order
  const placeOrder = async () => {
    try {
      setLoading(true);
      const orderPromises = items.map((item) =>
        postRequest("/orders/crt", { cartId: item?._id })
      );
      const orderConfirm = await Promise.all(orderPromises);
      setCartItem([]);
      Swal.fire("Successfull Placed the Order");
      setItems([]);

      setLoading(false);
      // setLoading(false);
    } catch (error) {
      console.log("Error placing order:", error);
      setLoading(false);
    }
  };

  console.log(cartItem);

  return (
    <>
      {cartItem && cartItem.length > 0 ? (
        <div className="grid grid-cols-12 gap-x-2">
          {/* Shopping Cart Section */}
          <div className="col-span-8 py-5 px-5 bg-gray-50 rounded shadow-md overflow-y-auto">
            <div className="flex items-start justify-between text-xl pb-5 border-b-2 border-gray-300">
              <h1 className="font-extrabold">Shopping Cart</h1>
              <p className="font-semibold">
                Total Items: <span className="font-normal">{items.length}</span>
              </p>
            </div>

            {/* Table Header */}
            <div className="mt-10 grid grid-cols-12">
              <div className="col-span-6">
                <h1>Product Lists</h1>
              </div>
              <div className="col-span-2">
                <h1>Quantity</h1>
              </div>
              <div className="col-span-2 text-center">
                <h1>Price</h1>
              </div>
              <div className="col-span-1 text-left">
                <h1>Total</h1>
              </div>
              <div className="col-span-1 text-center">
                <h1>Action</h1>
              </div>
            </div>

            {/* Cart Items */}
            <div>
              {Array.isArray(items) &&
                items.map((item, index) => (
                  <div
                    key={index}
                    className="mt-5 grid grid-cols-12 items-center border-b border-gray-300 pb-5"
                  >
                    <div className="col-span-6 flex items-center gap-3">
                      <img
                        src={`http://localhost:8000/images/${item?.productImage}`}
                        alt={item.productName}
                        className="w-16 h-16 rounded-full object-contain"
                      />
                      <p className="font-semibold">{item.productName}</p>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <button
                        onClick={() => handleDecrease(index)}
                        className="px-2 py-1 text-xl font-bold"
                      >
                        -
                      </button>
                      <p className="mx-2">{item.quantity}</p>
                      <button
                        onClick={() => handleIncrease(index)}
                        className="px-2 py-1 text-xl font-bold"
                      >
                        +
                      </button>
                    </div>

                    <div className="col-span-2 text-center">
                      <p>TK {item.productPrice}</p>
                    </div>

                    <div className="col-span-1 text-left text-sm">
                      <p>TK {(item.productPrice * item.quantity).toFixed(2)}</p>
                    </div>

                    <div className="col-span-1 text-center">
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-xl text-red-500 font-bold"
                      >
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="py-5 px-5 col-span-4 bg-gray-100 rounded shadow-md overflow-y-auto">
            <div className="pb-5 border-b-2 border-orange-400">
              <h1 className="text-xl font-extrabold">Order Summary</h1>
            </div>

            <div className="mt-5 space-y-4">
              {items &&
                items?.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between font-semibold"
                  >
                    <div className="flex items-center gap-x-2">
                      <p>{index + 1}.</p>
                      <p>
                        {item.productName} x {item.quantity}
                      </p>
                    </div>
                    <p>TK {(item.productPrice * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
            </div>

            <div className="mt-40 border-t-4 border-orange-400 pt-2 flex items-center justify-between text-xl">
              <p className="font-bold">Total:</p>
              <p className="font-bold">TK {calculateTotalPrice().toFixed(2)}</p>
            </div>

            <div className="mt-8">
              <button
                onClick={placeOrder}
                className="w-full py-2 rounded-lg bg-orange-600 text-white font-extrabold hover:cursor-pointer hover:bg-orange-700"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full  text-2xl font-bold text-gray-400 text-center py-10">
          <h1>No Products on CART</h1>
        </div>
      )}
    </>
  );
}

export default UserDashAllCarts;
