import React from "react";
import AdminCategoriesTable from "../../../components/AdminDashCompos/AdminCategoriestTable/AdminCategoriesTable";

function AdminAllCategoriesPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="flex items-center justify-between px-6 py-6 bg-white shadow rounded-md">
        <div className="flex items-center space-x-5">
          <div className="w-1 h-6 bg-orange-600 rounded"></div>
          <h2 className="text-xl font-semibold">Categories</h2>
        </div>
        
        <button className="px-4 py-2 text-white bg-orange-600 rounded-3xl hover:bg-orange-500">
          + Add Categories
        </button>
      </div>

      <div className="pb-5">
        <AdminCategoriesTable />
      </div>
    </div>
  );
}

export default AdminAllCategoriesPage;