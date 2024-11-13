// import React, { useEffect, useState } from "react";
// import useRequest from "../../../APIServices/useRequest";

function AdminCancelledOrdersTableItem({ order }) {
  // const [postRequest, getRequest] = useRequest();
  // const [cartDetails, setCartDetails] = useState([]);

  // const fetchCartDetails = async () => {
  //   try {
  //     const cartId = order?.cartId;
  //     const fetchDetails = await getRequest(`/carts/src/byId/${cartId}`);
  //     console.log(fetchDetails, "Fetch Details");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCartDetails();
  // }, []);

  return (
    <tr>
      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded-full"
              src={`http://localhost:8000/images/${order?.productThumb}`}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {order?.productName}
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap py-5 text-sm text-left pl-8 text-gray-500">
        {order?.totalQuantity}
      </td>
      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {order.userFullName}
            </div>
          </div>
        </div>
      </td>
      {/* <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {order.deliveryFee} $
      </td> */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {order.allTotalPrice} $
      </td>
    </tr>
  );
}

export default AdminCancelledOrdersTableItem;
