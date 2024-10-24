// GlobalComponents/Filters/GlobalFilters.js
import React from "react";

function GlobalFilters({ searchTerm, onSearch, sortOption, onSortChange }) {
  return (
    <div className="flex flex-row-reverse justify-between items-center mb-5">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={onSearch}
        className="px-4 py-2 border rounded-md w-2/6 border-gray-400 focus:outline-none focus:border-orange-600"
      />
      <div className="flex items-center gap-x-2">
        <p>Filter By: </p>
        <select
          value={sortOption}
          onChange={onSortChange}
          className="px-4 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-orange-600"
        >
          <option value="default">Sort by</option>
          <option value="bestSelling">Best Selling</option>
          <option value="lowToHighPrice">Price: Low to High</option>
          <option value="highToLowPrice">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default GlobalFilters;
