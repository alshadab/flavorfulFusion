import React, { useState } from "react";
import Paginations from "../../GlobalComponents/Paginations/Paginations";

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

export default function AdminAllFaqTable() {
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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="w-20 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Issued By
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
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
                  <tr key={`${faq.email}-${index}`}>
                    <td className="whitespace-normal max-w-lg py-5 pl-4 pr-3 text-sm sm:pl-0 break-words">
                      <h1 className="break-words">{faq.title}</h1>
                    </td>
                    <td className="text-left w-80 whitespace-normal max-w-xs py-5 text-sm text-gray-500 break-words">
                      <h1 className="break-words">{faq.description}</h1>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {faq.type}
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img
                            className="h-11 w-11 rounded"
                            src={faq.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {faq.issuedBy}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                        faq.status === "Active"
                          ? "bg-green-50 text-green-700 ring-green-600/20"
                          : "bg-red-50 text-red-700 ring-red-600/20"
                      }`}>
                        {faq.status}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 text-center text-sm font-medium sm:pr-0">
                      <p className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {faq.issuedBy}</span>
                      </p>
                    </td>
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
