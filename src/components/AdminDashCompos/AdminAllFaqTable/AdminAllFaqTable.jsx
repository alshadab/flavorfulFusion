import React, { useState } from "react";
import Paginations from "../../GlobalComponents/Paginations/Paginations";

export default function AdminAllFaqTable({
  allFAQ,
  selectedFaq,
  isModalOpen,
  handleDeleteFaq,
  handleEditClick,
  handleModalClose,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const totalPages = Math.ceil(allFAQ.length / entriesPerPage);

  const displayedFaqs = allFAQ.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

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
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 align-middle"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="w-20 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-middle"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 text-left pl-5 text-sm font-semibold text-gray-900 align-middle"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayedFaqs.map((faq, index) => (
                  <tr key={faq?._id} className="align-middle">
                    <td className="whitespace-normal max-w-lg py-5 pl-4 pr-3 text-sm sm:pl-0 break-words align-middle">
                      <h1 className="break-words">{faq.question}</h1>
                    </td>
                    <td className="text-left w-80 whitespace-normal max-w-xs py-5 text-sm text-gray-500 break-words align-middle">
                      <h1 className="break-words">{faq.answer}</h1>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-3 text-center text-sm font-medium sm:pr-0 align-middle">
                      <div className="flex items-center gap-x-2">
                        <p
                          onClick={() => handleEditClick(faq)}
                          className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer"
                        >
                          Edit
                        </p>
                        <p 
                        onClick={()=>handleDeleteFaq(faq?._id)}
                        className="text-red-600 hover:text-indigo-900 hover:cursor-pointer">
                          Delete
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {allFAQ && allFAQ.lenght >= 5 ? (
              <Paginations
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                onPageChange={handlePageChange}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedFaq && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-lg font-semibold mb-4">Edit FAQ</h2>
            <form>
              <label className="block text-sm font-medium text-gray-700">
                Question
              </label>
              <input
                type="text"
                defaultValue={selectedFaq.question}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Answer
              </label>
              <textarea
                defaultValue={selectedFaq.answer}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
