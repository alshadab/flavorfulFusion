import React, { useContext, useEffect, useState } from "react";
import useRequest from "../../../APIServices/useRequest";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

function HomePageIndividualProduct({ product }) {
  const { addToCart, addedProduct, user } = useContext(AuthContext);
  const [postRequest, getRequest] = useRequest();
  const [stock, setStock] = useState(0);
  const [quantity, setQuantity] = useState(1);
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
  }, []);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setStock(stock - 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setStock(stock + 1);
    }
  };

  return (
    <div className="w-full p-4 bg-white border rounded-lg shadow-md hover:cursor-pointer">
      <Link to={`/singleproductpage/${product?._id}`}>
        <div className="relative">
          <img
            className="w-full h-60 rounded-t-lg object-contain"
            src={`http://localhost:8000/images/${product?.productThumb}`}
            alt="Product"
          />
        </div>
      </Link>

      <div className="mt-5 text-left">
        <h3 className="text-lg font-semibold">{product?.productName}</h3>
        <p className="text-sm text-gray-500">
          Quantity Remaining: <span className="italic">{stock}</span> pieces
        </p>
        {user && user.userType === 103 ? (
          <div className="mt-3 flex items-center space-x-2">
            <button
              onClick={handleDecrease}
              disabled={quantity === 1}
              className={`px-2 border rounded-lg ${
                quantity === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black bg-red-100 border-red-100"
              }`}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-8 text-xs !px-0 !py-1 text-center border rounded-lg border-gray-200"
            />
            <button
              onClick={handleIncrease}
              disabled={quantity === stock}
              className={`px-2 border rounded-lg ${
                quantity === stock
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black bg-green-100 border-green-100"
              }`}
            >
              +
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="mt-10 flex items-end justify-between">
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold text-green-500">
              ${product?.sellingPrice}
            </span>
          </div>
          {user && user.userType === 103 ? (
            <button
              onClick={() => addToCart(product, stock, quantity)}
              className="flex items-center justify-center border px-3 py-1 text-sm bg-white text-green-600 font-bold rounded-3xl duration-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
  );
}

export default HomePageIndividualProduct;
