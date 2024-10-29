import React, { useState } from "react";
import Paginations from "../../GlobalComponents/Paginations/Paginations";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";

const faqs = [
  {
    title: "Can I pay once I get the product on my hand?",
    description:
      "Yes, you can entirely pay the bill along with the shipping charges right outside your doors once you get the product. Even if the product comes damaged, you can return it straight away.",
    type: "Vegetables",
    issuedBy: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "Do you provide international shipping for orders?",
    description:
      "Currently, we ship within our country, but international shipping options are under consideration for the future.",
    type: "Shipping",
    issuedBy: "Jordan Peterson",
    email: "jordan.peterson@example.com",
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "How can I track my order?",
    description:
      "Once your order is shipped, you’ll receive an email with tracking details. You can use this information to monitor your order’s status.",
    type: "Orders",
    issuedBy: "Emma Stone",
    email: "emma.stone@example.com",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "What payment methods do you accept?",
    description:
      "We accept various payment methods, including credit cards, PayPal, and bank transfers.",
    type: "Payments",
    issuedBy: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function AdminAllReviewsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const totalPages = Math.ceil(faqs.length / entriesPerPage);

  // Slice the data for the current page
  const displayedFaqs = faqs.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Pagination handler functions
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 sm:px-6 lg:px-0 w-full h-full">
      <div className="mt-8 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                >
                  Product Title
                </th>
                <th
                  scope="col"
                  className="w-40 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Customer Review
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {displayedFaqs.map((faq, index) => (
                <tr key={`${faq.email}-${index}`} className="">
                  <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 lg:pl-8">
                    <div className="flex items-center">
                      <img
                        className="h-11 w-11 rounded-full object-cover"
                        src={faq.image}
                        alt=""
                      />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {faq.issuedBy}
                        </div>
                        <div className="text-gray-500 text-xs">{faq.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="w-60 px-3 py-4 text-sm text-gray-900 break-words">
                    <p className="text-xs font-semibold text-gray-700 hover:cursor-default">
                      Review By:{" "}
                      <span className="text-orange-600">Customer 01</span>
                    </p>
                    <p className="mt-2 hover:cursor-default">{faq.description}</p>
                  </td>
                  <td className="px-3 py-4 text-sm text-orange-600">
                    <div className="flex items-center gap-x-1">
                      <FaStar />
                      <p>3</p>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    <p>26th June, 1994</p>
                  </td>
                  <td className="py-4 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <button className="text-red-600 hover:text-orange-900">
                      <RiDeleteBin2Fill className="text-2xl" />
                      <span className="sr-only">, {faq.issuedBy}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-3 px-4 sm:px-6 lg:px-8">
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
  );
}
