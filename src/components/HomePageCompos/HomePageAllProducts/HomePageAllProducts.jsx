import React, { useState } from "react";
import HomePageIndividualProduct from "../HomePageIndividualProduct/HomePageIndividualProduct";
import Paginations from "../../GlobalComponents/Paginations/Paginations";
import GlobalFilters from "../../GlobalComponents/GlobalFilters/GlobalFilters";

const products = new Array(12).fill(null); // Assume an array with 20 products for demonstration.

function HomePageAllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const itemsPerPage = 10; // Number of products per page

  // Dummy products data with prices and sales for sorting
  const dummyProducts = products.map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2), // Random price between 0-100
    sales: Math.floor(Math.random() * 1000), // Random sales number between 0-1000
  }));

  // Filter and sort products based on the search term and sort option
  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "bestSelling") {
      return b.sales - a.sales; // Best selling: higher sales first
    } else if (sortOption === "lowToHighPrice") {
      return a.price - b.price; // Low to high price
    } else if (sortOption === "highToLowPrice") {
      return b.price - a.price; // High to low price
    } else {
      return 0; // Default, no sorting
    }
  });

  // Calculate the start and end indices of the products to display
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to the first page on sort change
  };

  return (
    <div className="px-10 pt-5 pb-10">
      <GlobalFilters
        searchTerm={searchTerm}
        onSearch={handleSearch}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />

      <div className="col-span-9">
        <div className="grid grid-cols-5 gap-x-5 gap-y-10">
          {currentProducts.map((product) => (
            <HomePageIndividualProduct key={product.id} product={product} />
          ))}
        </div>

        <Paginations
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default HomePageAllProducts;
