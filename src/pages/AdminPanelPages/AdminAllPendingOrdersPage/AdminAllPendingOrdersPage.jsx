import React from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import AdminPendingOrderTable from "../../../components/AdminDashCompos/AdminPendingOrderTable/AdminPendingOrderTable";

function AdminAllPendingOrdersPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders title={'All Pending Orders'}  searchFilter={'Customer Name'}/>
      </div>

      <div className="bg-white w-full pb-10 rounded">
       <AdminPendingOrderTable/>
      </div>
    </div>
  );
}

export default AdminAllPendingOrdersPage;
