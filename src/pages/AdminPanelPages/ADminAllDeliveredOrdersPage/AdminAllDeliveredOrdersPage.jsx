import React, { useEffect, useState } from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import AdminAllDeliveredOrdersTable from "../../../components/AdminDashCompos/AdminAllDeliveredOrdersTable/AdminAllDeliveredOrdersTable";
import useRequest from "../../../APIServices/useRequest";

function AdminAllDeliveredOrdersPage() {
  const [postRequest, getRequest] = useRequest();
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  const fetchOrderList = async () =>{
    try{
      const orderData = await getRequest('/orders/src/delivered/all');
      setDeliveredOrders(orderData?.data?.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchOrderList();
  },[]);


  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders title={'All Delivered Orders'} searchFilter={'Customer Name'}/>
      </div>

      <div className="bg-white w-full pb-10 rounded">
       <AdminAllDeliveredOrdersTable deliveredOrders={deliveredOrders}/>
      </div>
    </div>
  );
}

export default AdminAllDeliveredOrdersPage;
