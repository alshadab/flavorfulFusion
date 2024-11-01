import React, { useState } from "react";
import Paginations from "../../GlobalComponents/Paginations/Paginations";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function AdminDashPopularProuctsTable({popularProductsList}) {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const totalPages = Math.ceil(popularProductsList.length / entriesPerPage);

  // Slice the data for the current page
  const displayedPeople = popularProductsList.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Pagination handler functions
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Product Name</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Stock Remainining</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Buying Price</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Selling Price</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  {/* <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Action</th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayedPeople.map((prod, index) => (
                  <tr key={`${prod.email}-${index}`}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img className="h-11 w-11 rounded-lg" src={prod.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{prod.productName}</div>
                          <div className="mt-1 text-gray-500">{prod.shopCategory}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 text-sm text-center text-gray-500"></td>
                    <td className="whitespace-nowrap pl-5 pr-3 py-5 text-sm text-gray-500">{prod.buyingPrice} $</td>
                    <td className="whitespace-nowrap pl-5 pr-3 py-5 text-sm text-gray-500">{prod.sellingPrice} $</td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    {/* <td className="relative whitespace-nowrap py-5 pl-10 text-center text-sm font-medium sm:pr-0">
                      <p className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, {prod.name}</span></p>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <Paginations
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
