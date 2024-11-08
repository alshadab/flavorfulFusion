import React, { useEffect, useState } from "react";

function UserOrdersDetailsCompo({ order, index }) {
  const [currentState, setCurrentState] = useState(null);

  console.log(order);

  const orderStateHandle = async () => {
    try {
      if (order.isCancelled === true) {
        setCurrentState("Cancelled");
      } else if (
        order.isConfirmed === true &&
        order.isLaunched === true &&
        order.isDelivered === false
      ) {
        setCurrentState("Released");
      } else if (order.isPending === true) {
        setCurrentState("Processing");
      } else if (order.isDelivered === true) {
        setCurrentState("Delivered");
      } else {
        setCurrentState("Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orderStateHandle();
  }, []);

  return (
    <div className="mx-5">
      <h1 className="font-bold text-lg">
        Details of Order No: <span className="text-orange-600">{index}</span>
      </h1>
      <div className="mt-5 border-2 rounded-lg px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 justify-start font-semibold">
            <h1>Cart ID:</h1>
            <p className="text-orange-600">{order?.cartId}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <h1 className="font-bold">Order Status: </h1>
            <div className="text-orange-600 font-extrabold">
              <p>{currentState}</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 justify-start font-semibold">
              {/* <h1>Delivery Method:</h1>
              <p className="text-orange-600">Cash On Delivery</p> */}
            </div>
            <div className="flex items-center gap-x-2 justify-start font-semibold">
              {order.isConfirmed &&
              order.isLaunched === true &&
              order.isDelivered === false ? (
                <div className="flex items-center gap-1 text-seventh font-semibold text-sm">
                  <h1 className="text-xs">Is Product Delivered ?</h1>
                  <button
                    // onClick={() => handleOrderDelivered(order._id)}
                    className="px-4 py-1 font-bold rounded-lg shadow-md bg-green-700 text-white duration-700 hover:cursor-pointer hover:duration-700 hover:bg-green-400"
                  >
                    Yes
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 items-start">
          <div className="col-span-8 text-left">
            <div className="">
              <h1 className="font-bold">Shipping Address: </h1>
              <p className="text-sm">{order?.userAddress}</p>
            </div>
            <div className="mt-4">
              <h1 className="font-bold">Billing Address: </h1>
              <p className="text-sm">{order?.userAddress}</p>
            </div>
          </div>
          <div className="pl-5 col-span-4 text-left text-sm border-l-2">
            <div className="flex items-center justify-between">
              <h1 className="">Product Price: </h1>
              <p className="">{order?.productSellingPrice} TK</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="">Product Quantity: </h1>
              <p className="">{order?.totalQuantity}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h1 className="">Sub Total: </h1>
              <p className="">
                {order.productSellingPrice * order?.totalQuantity} TK
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="">Discount: </h1>
              <p className="">{order?.discount} %</p>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <h1 className="">Delivery Fee: </h1>
              <p className="">{order?.deliveryFee} TK</p>
            </div>
            <hr />
            <div className="mt-2 flex items-center justify-between font-extrabold">
              <h1 className="">Total Cost: </h1>
              <p className="">{order?.allTotalPrice} TK</p>
            </div>
          </div>
        </div>

        <div className="my-10 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-left p-4 text-gray-700 font-semibold">
                  Product
                </th>
                <th className="text-left p-4 text-gray-700 font-semibold">
                  Quantity
                </th>
                <th className="text-left p-4 text-gray-700 font-semibold">
                  Selling Price
                </th>
                <th className="text-left p-4 text-gray-700 font-semibold">
                  Delivery Fee
                </th>
                <th className="text-left p-4 text-gray-700 font-semibold">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center">
                  <img
                     src={`http://localhost:8000/images/${order?.productThumb}`}
                    alt="Product"
                    className="w-12 h-12 mr-4 rounded-full object-cover border-2 border-orange-600"
                  />
                  <span>{order?.productName}</span>
                </td>
                <td className="p-4">{order?.totalQuantity}</td>
                <td className="p-4">TK {order?.productSellingPrice}</td>
                <td className="p-4">TK {order?.deliveryFee}</td>
                <td className="p-4">TK {order?.allTotalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserOrdersDetailsCompo;
