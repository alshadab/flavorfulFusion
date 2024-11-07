import React, { useContext, useEffect, useState } from "react";
import useRequest from "../../../APIServices/useRequest";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

function HomePageIndividualProduct({ product }) {
  const { addToCart, addedProduct, user } = useContext(AuthContext);
  const [postRequest, getRequest] = useRequest();
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const fetchStock = async () => {
    try {
      const fetchData = await getRequest(`/stocks/src/${product?._id}`);
      setStock(fetchData?.data?.data?.stockQTY);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStock();
  }, [addedProduct]);

  return (
    <Link to={`/singleproductpage/${product?._id}`}>
      <div class="w-full p-4 bg-white border rounded-lg shadow-md hover:cursor-pointer">
        <div class="relative">
          <img
            class="w-full h-60 rounded-t-lg object-contain"
            src={`http://localhost:8000/images/${product?.productThumb}`}
            alt="Apples"
          />
          {/* <span class="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-semibold px-2 py-1 rounded-full">
          20%
        </span> */}
        </div>

        <div class="mt-5 text-left">
          <h3 class="text-lg font-semibold">{product?.productName}</h3>
          <p class="text-sm text-gray-500">
            Quantity Remaining: <span className="italic">{stock}</span> pieces
          </p>
          <div class="mt-10 flex items-end justify-between">
            <div className="flex flex-col items-start">
              {/* <span class="text-sm line-through text-gray-400">$2.00</span> */}
              <span class="text-lg font-semibold text-green-500">
                ${product?.sellingPrice}
              </span>
            </div>
            {user && user.userType === 103 ? (
              <button
                onClick={async () => {
                  const success = await addToCart(product, stock);
                  if (success) {
                    navigate("/usercarts");
                  }
                }}
                class="flex items-center justify-center border px-3 py-1 text-sm bg-white text-green-600 font-bold rounded-3xl duration-200 hover:duration-200 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 6M7 13l1.4 6m10-6l-1.4 6M7 19h10M9 23a1 1 0 102 0m4 0a1 1 0 102 0"
                  />
                </svg>
                Cart
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomePageIndividualProduct;
