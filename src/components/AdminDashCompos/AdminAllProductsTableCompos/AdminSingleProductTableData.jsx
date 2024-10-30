import React, { useEffect, useState } from "react";
import useRequest from "../../../APIServices/useRequest";

function AdminSingleProductTableData({ product, index }) {
  const [postRequest, getRequest] = useRequest();
  const [stockCount, setStockCount] = useState(0);
  const [category, setCategory] = useState('');

  const fetchIndividualProductStock = async () => {
    let stockCount = await getRequest(`/stocks/src/${product?._id}`);
    setStockCount(stockCount?.data?.data?.stockQTY);
  };

  const fetchCategoryOfIndividualProduct = async () =>{
    let categoryFetch = await getRequest(`/categories/src/${product?.categoryId}`);
    setCategory(categoryFetch?.data?.data?.categoryName);
  }

  useEffect(() => {
    fetchCategoryOfIndividualProduct();
    fetchIndividualProductStock();
  }, []);


  console.log(product, "Products");

  return (
    <tr key={`${product?._id}`}>
      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded-full"
              src={product?.productImg}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {product?.productName}
            </div>
            {/* <div className="mt-1 text-gray-500">{product?.shopName}</div> */}
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap py-5 text-sm text-center pr-10 text-gray-500">
        {stockCount}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {category}
      </td>
      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          <div className="">
            <div className="font-medium text-gray-900">{product.shopName}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {product?.buyingPrice} $
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {product?.sellingPrice} $
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
       {
        product && (product.isActive === true & product.isDeleted === false) ?  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Active
      </span> :  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
          Deleted
        </span>
       }
      </td>
      <td className="relative whitespace-nowrap py-5 pl-3 text-center text-sm font-medium sm:pr-0">
        <p className="text-indigo-600 hover:text-indigo-900">
          Edit<span className="sr-only">, {product.name}</span>
        </p>
      </td>
    </tr>
  );
}

export default AdminSingleProductTableData;
