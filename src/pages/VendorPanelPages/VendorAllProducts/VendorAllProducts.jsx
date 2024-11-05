import React, { useContext, useEffect, useState } from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import useRequest from "../../../APIServices/useRequest";
import VendorsAllProductTable from "../../../components/VendorsCompos/VendorsAllProductTable/VendorsAllProductTable";
import { AuthContext } from "../../../providers/AuthProviders";

function VendorAllProducts() {
  const { user } = useContext(AuthContext);
  const [postRequest, getRequest] = useRequest();
  const [allProdList, setAllProdList] = useState([]);
  const [deleteState, setDeleteState] = useState([]);
  const [activateState, setActivateState] = useState([]);

  const fetchAllProducts = async () => {
    try {
      let prodList = await postRequest("/products/src/all/byusrid", {
        userId: user?._id,
      });
      setAllProdList(prodList?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [deleteState, activateState]);

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
      </div>

      <div className="bg-white w-full pb-10 rounded">
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
