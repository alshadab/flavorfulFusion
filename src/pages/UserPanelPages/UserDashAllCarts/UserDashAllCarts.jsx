import React, { useContext } from "react";
import useRequest from "../../../APIServices/useRequest";
import { AuthContext } from "../../../providers/AuthProviders";
import UserCartItems from "../../../components/UserDashCompos/UserCartCompos/UserCartItems";

function UserDashAllCarts() {
  const { user, cartItem, removeFromCart, confirmCartItem } =
    useContext(AuthContext);
  const [postRequest, getRequest] = useRequest();

  return (
    <div className="mx-5 my-5 py-5 px-5">
      <h1 className="font-bold underline underline-offset-8">
        Products Added to Cart
      </h1>
      {cartItem && cartItem?.length > 0 ? (
        <div className="mt-10 grid grid-cols-4 gap-5">
          {cartItem &&
            cartItem.map((item) => (
              <UserCartItems
                key={item?._id}
                item={item}
                removeFromCart={removeFromCart}
                confirmCartItem={confirmCartItem}
              />
            ))}
        </div>
      ) : (
        <div className="w-full text-center mt-10 text-2xl font-semibold text-gray-300">
          <h1>No Products In Cart Yet !!</h1>
        </div>
      )}
    </div>
  );
}

export default UserDashAllCarts;
