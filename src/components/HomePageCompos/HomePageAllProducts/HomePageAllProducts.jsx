import React, { useState } from "react";
import HomePageIndividualProduct from "../HomePageIndividualProduct/HomePageIndividualProduct";

const products = new Array(20).fill(null); // Assume an array with 20 products for demonstration.

function HomePageAllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of products per page

  // Calculate the start and end indices of the products to display
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="px-10 pt-5 pb-10">
      <div className="col-span-9 overflow-y-auto max-h-screen">
        <div className="grid grid-cols-5 gap-x-5 gap-y-10">
          {currentProducts.map((_, index) => (
            <HomePageIndividualProduct key={index} />
          ))}
        </div>

        {/* Updated Pagination controls */}
        <div className="flex justify-end mt-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 mr-2 border rounded-md transition-colors duration-300 ${
              currentPage === 1
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-orange-600 hover:text-white border-gray-400"
            }`}
          >
            Prev
          </button>
          <div className="flex items-center space-x-2">
            {/* Show all pages */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-4 py-2 border rounded-md transition-colors duration-300 ${
                    currentPage === pageNumber
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-white text-gray-700 hover:bg-orange-600 hover:text-white border-gray-400"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 ml-2 border rounded-md transition-colors duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-orange-600 hover:text-white border-gray-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageAllProducts;
