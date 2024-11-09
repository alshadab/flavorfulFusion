import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import VendorsAllPendingOrdersTable from "../../../components/VendorsCompos/VendorsAllPendingOrdersTable/VendorsAllPendingOrdersTable";
import useRequest from "../../../APIServices/useRequest";

function VendorPendingOrders() {
  const { user } = useContext(AuthContext);

  const [postRequest, getRequest] = useRequest();
  const [pendingOrders, setPendingOrders] = useState([]);

  const fetchAllPendingOrders = async () => {
    try {
      const fetchOrders = await postRequest("/orders/src/pending/all/byusr", {
        sellerId: user?._id,
      });
      setPendingOrders(fetchOrders?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPendingOrders();
  }, []);

  return (
    <>
      {user && user.userType === 101 && (
        <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
          <div className="w-full bg-white rounded px-10 pt-10">
            <GlobalHeaders title={"All Pending Orders"} />
          </div>

          <div className="bg-white w-full pb-10 rounded">
            <VendorsAllPendingOrdersTable
              pendingOrdersList={pendingOrders}
              // deletePendingOrders={deletePendingOrders}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default VendorPendingOrders;
