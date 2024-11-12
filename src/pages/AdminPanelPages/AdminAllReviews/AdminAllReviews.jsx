import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaTrashAlt } from "react-icons/fa";
import useRequest from "../../../APIServices/useRequest";
import Swal from "sweetalert2";

function AdminAllReviews() {
  const { user } = useContext(AuthContext);
  const [postRequest, getRequest] = useRequest();
  const [ratingReviews, setRatingReviews] = useState([]);
  const [deleteState, setDeleteState] = useState(false);

  const fetchAllUserRatings = async () => {
    try {
      const fetchData = await getRequest("/ratings/src/all");
      setRatingReviews(fetchData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUserRatings();
  }, [deleteState]);

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const handleDelete = async (review) => {
    const deleteData = await getRequest(`/ratings/del/byId/${review?._id}`);
    if (deleteData?.data?.error === false) {
      Swal.fire("Removed the Review");
      setDeleteState(!deleteState);
    }
    console.log("Deleting review:", review);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">All Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ratingReviews.map((review) => (
          <div
            key={review._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative"
            title={review.review || "No review available"}
          >
            <div className="flex flex-col items-center relative">
              <img
                src={`http://localhost:8000/images/${review?.productThumb}`}
                alt={review.productName}
                className="w-20 h-20 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold text-center">
                {review.productName}
              </h3>
              <div className="flex items-center text-yellow-400 my-2">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-400 ml-2">
                  ({review.rating} / 5)
                </span>
              </div>
              <p className="text-gray-600 mt-2 text-center">
                {truncateText(review.review, 30)}
              </p>
              <span className="text-sm text-gray-500 mt-1">
                {review.createdDate}
              </span>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(review)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
                title="Delete Review"
              >
                <FaTrashAlt size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAllReviews;
