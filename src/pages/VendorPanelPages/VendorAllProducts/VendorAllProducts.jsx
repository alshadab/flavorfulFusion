import React, { useEffect, useState } from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import FilterProductsByCategories from "../../../components/GlobalComponents/FilterProductsByCategories/FilterProductsByCategories";
import useRequest from "../../../APIServices/useRequest";
import VendorsAllProductTable from "../../../components/VendorsCompos/VendorsAllProductTable/VendorsAllProductTable";

function VendorAllProducts() {
  const [, getRequest] = useRequest();
  const [categoryList, setCategoryList] = useState([]);
  const [allProdList, setAllProdList] = useState([]);
  const [deleteState, setDeleteState] = useState([]);
  const [activateState, setActivateState] = useState([]);

  const fetchAllCategoryList = async () => {
    try {
      let categoryList = await getRequest("/categories/src");
      setCategoryList(categoryList?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCategoryList();
  }, [deleteState, activateState]);

  const handleSelectCategories = async (categoryCode) => {
    const fetchProdListAgain = await getRequest(
      `/products/src/category/${categoryCode.target.value}`
    );
    setAllProdList(fetchProdListAgain?.data?.data);
  };

  const deleteProduct = async (id) => {
    try {
      const dltProd = await getRequest(`/products/del/${id}`);
      setDeleteState(dltProd?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const activateProduct = async (id) => {
    try {
      const activateProd = await getRequest(`/products/actv/${id}`);
      setActivateState(activateProd?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
      <div className="w-full bg-white rounded pt-5">
        <GlobalHeaders title={"Products"} searchFilter={"Product Name"} />
        <div className="mt-5 w-full grid grid-cols-2 gap-x-80">
          <FilterProductsByCategories
            categoryList={categoryList}
            handleSelectCategories={handleSelectCategories}
          />
          {/* <FilterProductsByProductTypes /> */}
        </div>
      </div>

      <div className="mt-5 bg-white w-full pt-5 pb-10 rounded">
        {allProdList === null ? (
          <div className="w-full flex justify-center">
            <h1 className="text-2xl text-gray-300">No Products Available</h1>
          </div>
        ) : (
          <VendorsAllProductTable
            deleteProduct={deleteProduct}
            activateProduct={activateProduct}
            activateState={activateState}
            deleteState={deleteState}
            allProdList={allProdList}
          />
        )}
      </div>
    </div>
  );
}

export default VendorAllProducts;
