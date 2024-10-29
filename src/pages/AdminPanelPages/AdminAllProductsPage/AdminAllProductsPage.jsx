import React from "react";
import { FaSearch } from "react-icons/fa";
import FilterProductsByVendors from "../../../components/GlobalComponents/FilterProductsByVendors/FilterProductsByVendors";
import FilterProductsByCategories from "../../../components/GlobalComponents/FilterProductsByCategories/FilterProductsByCategories";
import FilterProductsByProductTypes from "../../../components/GlobalComponents/FilterProductsByProductTypes/FilterProductsByProductTypes";
import AdminAllProductsTable from "../../../components/AdminDashCompos/AdminAllProductsTableCompos/AdminAllProductsTable";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";

function AdminAllProductsPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders title={'Products'}  searchFilter={'Product Name'}/>
        <div className="mt-5 w-full grid grid-cols-3 gap-x-5">
          <FilterProductsByVendors />
          <FilterProductsByCategories />
          <FilterProductsByProductTypes />
        </div>
      </div>

      <div className="mt-10 bg-white w-full px-10 pt-5 pb-10 rounded">
        <h1 className="font-extrabold pl-5 border-l-4 border-orange-600">
          All Products
        </h1>
        <AdminAllProductsTable/>
      </div>
    </div>
  );
}

export default AdminAllProductsPage;
