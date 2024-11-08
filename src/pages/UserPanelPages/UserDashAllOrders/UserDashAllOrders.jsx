import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useRequest from "../../../APIServices/useRequest";
import UserOrdersList from "../../../components/UserDashCompos/UserOrdersCompos/UserOrdersList/UserOrdersList";
import UserOrdersDetailsCompo from "../../../components/UserDashCompos/UserOrdersCompos/UserOrdersDetailsCompo/UserOrdersDetailsCompo";

function UserDashAllOrders() {
  const { user } = useContext(AuthContext);
  const [postRequest, getRequest] = useRequest();
  const [ordersList, setOrdersList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  const fetchOrdersList = async () => {
    try {
      const fetchData = await getRequest(`/orders/src/user/byid/${user?._id}`);
      setOrdersList(fetchData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrdersList();
  }, []);

  const handleSelectOrder = (order, index) => {
    setSelectedOrder(order);
    setSelectedOrderIndex(index);
  };

  return (
    <>
      {ordersList && ordersList.length > 0 ? (
        <div className="grid grid-cols-12">
          <div className="col-span-3 h-[85vh] overflow-y-scroll pr-5">
            <h1 className="text-xl font-bold">
              Orders List{" "}
              <span className="text-orange-600">
                ({ordersList.length})
              </span>
            </h1>
            <div className="mt-5">
              {ordersList.map((order, index) => (
                <UserOrdersList
                  key={order?._id}
                  order={order}
                  index={index + 1}
                  onSelect={() => handleSelectOrder(order, index + 1)}
                  isSelected={selectedOrderIndex === index + 1} // Pass selected state
                />
              ))}
            </div>
          </div>
          <div className="col-span-9">
            {selectedOrder ? (
              <UserOrdersDetailsCompo order={selectedOrder} index={selectedOrderIndex} />
            ) : (
              <div className="flex items-center justify-center h-full text-xl text-gray-500">
                No orders selected yet. Please select an order.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="border-2 w-full h-[85vh] rounded-lg flex items-center justify-center text-3xl font-semibold text-gray-300">
          <h1 className="underline">No Orders are Placed Yet</h1>
        </div>
      )}
    </>
  );
}

export default UserDashAllOrders;
