import React, { useEffect, useState } from "react";
import FilterProductsByVendors from "../../../components/GlobalComponents/FilterProductsByVendors/FilterProductsByVendors";
import FilterProductsByCategories from "../../../components/GlobalComponents/FilterProductsByCategories/FilterProductsByCategories";
import FilterProductsByProductTypes from "../../../components/GlobalComponents/FilterProductsByProductTypes/FilterProductsByProductTypes";
import AdminAllProductsTable from "../../../components/AdminDashCompos/AdminAllProductsTableCompos/AdminAllProductsTable";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import useRequest from "../../../APIServices/useRequest";

function AdminAllProductsPage() {
  const [postRequest, getRequest] = useRequest();
  const [allVendorsList, setAllVendorsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const fetchAllVendorsList = async()=>{
    let vendorsList = await getRequest('/shop/src/all');
    setAllVendorsList(vendorsList?.data?.data);
  }

  const fetchAllCategoryList = async()=>{
    let categoryList = await getRequest('/categories/src');
    setCategoryList(categoryList?.data?.data);
  }

  useEffect(()=>{
    fetchAllVendorsList();
    fetchAllCategoryList();
  },[]);

  console.log(categoryList, "Category List");

  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
      <div className="w-full bg-white rounded pt-5">
        <GlobalHeaders title={'Products'}  searchFilter={'Product Name'}/>
        <div className="mt-5 w-full grid grid-cols-3 gap-x-5">
          <FilterProductsByVendors allVendorsList={allVendorsList}/>
          <FilterProductsByCategories categoryList={categoryList}/>
          <FilterProductsByProductTypes />
        </div>
      </div>

      <div className="mt-10 bg-white w-full pt-5 pb-10 rounded">
        <h1 className="font-extrabold pl-5 border-l-4 border-orange-600">
          All Products
        </h1>
        <AdminAllProductsTable/>
      </div>
    </div>
  );
}

export default AdminAllProductsPage;
