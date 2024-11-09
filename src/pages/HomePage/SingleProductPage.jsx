import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import useRequest from "../../APIServices/useRequest";
import { FaHeart, FaStar } from "react-icons/fa";
import GlobalLoading from "../../components/GlobalComponents/GlobalLoading/GlobalLoading";

function SingleProductPage() {
  const { id } = useParams();
  const { addToCart, user } = useContext(AuthContext);

  const [postRequest, getRequest] = useRequest();
  const [productInfo, setProductInfo] = useState(null);
  const [stocks, setStocks] = useState(0);
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const fetchProductInfo = async () => {
    const singleProdFetchInfo = {
      userId: user?._id,
      productId: id,
    };
    try {
      const fetchData = await postRequest(
        "/products/src/byid",
        singleProdFetchInfo
      );
      setProductInfo(fetchData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductInfo();
  }, []);

  const fetchStockDetails = async () => {
    try {
      const stockDetails = await getRequest(`/stocks/src/${id}`);
      setStocks(stockDetails?.data?.data?.stockQTY);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStockDetails();
  }, []);

  const fetchCategory = async () => {
    try {
      const fetchData = await getRequest(
        `/categories/src/${productInfo?.categoryId}`
      );
      setCategories(fetchData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productInfo && productInfo?.categoryId) {
      fetchCategory();
    }
  }, [productInfo]);

  const handleIncrease = () => {
    if (quantity < stocks) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  if (!productInfo) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GlobalLoading />
      </div>
    );
  }

  const handleAddToCart = async () => {
    try {
      console.log(quantity, "Cart Quantity");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-8">
        {/* Product Image and Thumbnails */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <div className="relative">
            {/* {productInfo.discount && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-white font-semibold py-1 px-2 rounded-lg text-sm">
                {productInfo.discount}% OFF
              </span>
            )} */}
            <img
              src={`http://localhost:8000/images/${productInfo?.productThumb}`}
              alt={productInfo?.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2 mt-4"></div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {productInfo?.productName}
            </h1>
          </div>
          {stocks && stocks > 0 ? (
            <p className="text-gray-500 mb-4">
              Stock Remaining: {stocks} pieces
            </p>
          ) : (
            <p>Stock Unavailable</p>
          )}
          <p className="text-gray-600 mb-6">{productInfo.productDescription}</p>

          {/* Rating */}
          <div className="flex gap-x-2 items-center mb-4">
            <span>Rating</span>
            <span className="text-lg font-semibold text-green-600">
              {productInfo.rating || "4.5"}
            </span>
            <FaStar className="text-yellow-500" />
            <span>({0})</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-green-600">
              Tk {productInfo.sellingPrice} /-
            </span>
            {productInfo.originalPrice && (
              <span className="text-gray-400 line-through">
                ${productInfo.originalPrice}
              </span>
            )}
          </div>
          <div className="mb-10 flex items-center space-x-2">
            {/* Decrease Button */}
            <button
              onClick={handleDecrease}
              className="px-3 py-1 bg-gray-200 rounded-l-lg text-gray-600 hover:bg-gray-300 disabled:opacity-50"
              disabled={quantity <= 0}
            >
              -
            </button>

            {/* Input Field */}
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-14 py-1 flex items-center justify-normaltext-center border-t border-b border-gray-300 focus:outline-none"
            />

            {/* Increase Button */}
            <button
              onClick={handleIncrease}
              className="px-3 py-1 bg-gray-200 rounded-r-lg text-gray-600 hover:bg-gray-300 disabled:opacity-50"
              disabled={quantity >= stocks}
            >
              +
            </button>
          </div>

          <div className="mt-3 mb-5 text-lg flex items-center gap-x-2 font-semibold">
            <span>Total Cost: </span>
            <span className="text-green-700">
              {quantity * productInfo?.sellingPrice} TK
            </span>
          </div>

          <div>
            {user !== null ? (
              <>
                {user.userType === 103 ? (
                  <>
                    {" "}
                    {quantity === 0 ? (
                      <button
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-6 transition duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                        disabled
                      >
                        Add To Shopping Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(productInfo, stocks, quantity)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-6 transition duration-300"
                        disabled={productInfo.stock <= 0}
                      >
                        Add To Shopping Cart
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {" "}
                    <button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-6 transition duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                      disabled
                    >
                      Add To Shopping Cart
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                {" "}
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-6 transition duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                  disabled
                >
                  Add To Shopping Cart
                </button>
              </>
            )}
          </div>

          {/* Categories and Seller */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold">Categories:</span>{" "}
              {categories && categories?.categoryName
                ? categories?.categoryName
                : "not defined"}
            </div>
            <div className="flex items-center gap-x-2">
              <span className="font-semibold flex">Sellers:</span>
              <p className="text-green-600 hover:underline hover:cursor-pointer">
                {productInfo.seller || "Grocery Shop"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-10 py-10">
        <h1 className="text-2xl font-semibold underline underline-offset-8">
          Reviews and Rating
        </h1>
      </div>

      <div className="mt-10 px-10 py-10">
        <h1 className="text-2xl font-semibold underline underline-offset-8">
          Recently Viewed Products
        </h1>
      </div>
    </div>
  );
}

export default SingleProductPage;
