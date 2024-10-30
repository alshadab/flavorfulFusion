import React from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import AdminCancelledOrdersPage from "../../../components/AdminDashCompos/AdminCancelledOrdersTable/AdminCancelledOrdersTable";

function AdminAllCancelledOrdersPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders title={'All Cancelled Orders'} searchFilter={'Customer Name'}/>
      </div>

      <div className="bg-white w-full pb-10 rounded">
       <AdminCancelledOrdersPage/>
      </div>
    </div>
  );
}

export default AdminAllCancelledOrdersPage;