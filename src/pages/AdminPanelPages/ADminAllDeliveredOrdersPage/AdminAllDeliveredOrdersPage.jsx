import React from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import AdminAllDeliveredOrdersTable from "../../../components/AdminDashCompos/AdminAllDeliveredOrdersTable/AdminAllDeliveredOrdersTable";

function AdminAllDeliveredOrdersPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders title={'All Delivered Orders'} searchFilter={'Customer Name'}/>
      </div>

      <div className="bg-white w-full pb-10 rounded">
       <AdminAllDeliveredOrdersTable/>
      </div>
    </div>
  );
}

export default AdminAllDeliveredOrdersPage;
