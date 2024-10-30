import React from "react";

function FilterProductsByCategories({categoryList}) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2 text-gray-700">
        Filter By Category
      </label>
      <select
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        defaultValue=""
      >
        <option value="" disabled>
          Filter by Category
        </option>
        {
          categoryList && categoryList.map(item=> <option key={item?._id}>{item?.categoryName}</option>)
        }
      </select>
    </div>
  );
}

export default FilterProductsByCategories;
