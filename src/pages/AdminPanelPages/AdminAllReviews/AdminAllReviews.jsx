import React from 'react'
import AdminAllReviewsTable from '../../../components/AdminDashCompos/AdminAllReviewsTable/AdminAllReviewsTable'

function AdminAllReviews() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <div className="w-full flex items-center justify-between px-6 py-6 bg-white shadow rounded-md">
        <div className="flex items-center space-x-5">
          <div className="w-1 h-6 bg-orange-600 rounded"></div>
          <h2 className="text-xl font-semibold">ALL FAQs</h2>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="flex space-x-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Title"
                className="px-8 py-2 border border-gray-300 rounded-md focus:ring-0 focus:outline-none focus:border-orange-600"
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                🔍
              </span>
            </div>
          </div>

          <button className="px-4 py-2 text-white bg-orange-600 rounded-3xl hover:bg-orange-500">
            + Add FAQs
          </button>
        </div>
      </div>

      <div className="bg-white w-full pb-10 rounded">
        <AdminAllReviewsTable/>
      </div>
    </div>
  )
}

export default AdminAllReviews