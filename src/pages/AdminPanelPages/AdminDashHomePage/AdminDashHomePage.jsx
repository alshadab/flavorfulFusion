import React from "react";
import SummaryDataCards from "../../../components/AdminDashCompos/SummaryDataCards/SummaryDataCards";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcFactoryBreakdown } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import AdminDashRecentOrdersTable from "../../../components/AdminDashCompos/AdminDashRecentOrdersTable/AdminDashRecentOrdersTable";
import { FaSearch } from "react-icons/fa";
import AdminDashPopularProuctsTable from "../../../components/AdminDashCompos/AdminDashPopularProductsTable/AdminDashPopularProuctsTable";

function AdminDashHomePage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 py-10 bg-white">
      <h1 className="pl-5 border-l-4 border-orange-600 font-extrabold">
        Summary
      </h1>
      <div className="mt-5 w-full grid grid-cols-4 gap-x-4">
        <SummaryDataCards
          title="Total Revenue"
          amount="22,345"
          borderLColor="border-green-400"
          borderBColor="border-b-green-400"
          isAmount={true}
          icons={FcCurrencyExchange}
        />
        <SummaryDataCards
          title="Total Order"
          amount="45"
          borderLColor="border-red-400"
          borderBColor="border-b-red-400"
          isAmount={false}
          icons={FcMoneyTransfer}
        />
        <SummaryDataCards
          title="Vendor"
          amount="32"
          borderLColor="border-blue-400"
          borderBColor="border-b-blue-400"
          isAmount={false}
          icons={FcFactoryBreakdown}
        />
        <SummaryDataCards
          title="Total Shops"
          amount="9"
          borderLColor="border-orange-400"
          borderBColor="border-b-orange-400"
          isAmount={false}
          icons={FcShop}
        />
      </div>

      <h1 className="mt-20 pl-5 border-l-4 border-orange-600 font-extrabold">
        Order Status
      </h1>
      <div className="mt-5 w-full grid grid-cols-4 gap-x-4">
        <SummaryDataCards
          title="Pending Orders"
          amount="5"
          borderLColor="border-purple-400"
          borderBColor="border-b-purple-400"
          isAmount={true}
          icons={FcAlarmClock}
        />
        <SummaryDataCards
          title="Processing Orders"
          amount="90"
          borderLColor="border-orange-400"
          borderBColor="border-b-orange-400"
          isAmount={false}
          icons={FcBarChart}
        />
        <SummaryDataCards
          title="Completed Orders"
          amount="0"
          borderLColor="border-sky-400"
          borderBColor="border-b-sky-400"
          isAmount={false}
          icons={FcApproval}
        />
        <SummaryDataCards
          title="Cancelled Orders"
          amount="0"
          borderLColor="border-red-400"
          borderBColor="border-b-red-400"
          isAmount={false}
          icons={FcCancel}
        />
      </div>

      <div className="mt-20 pl-5 border-l-4 border-orange-600 grid grid-cols-5 items-center justify-between">
        <h1 className="font-extrabold col-span-3">Recent Orders</h1>
        <div className="relative col-span-2 w-full">
          <input
            type="search"
            name="productName"
            id="productName"
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-0 focus:outline-none focus:border-orange-500"
            placeholder="Search by product name"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <AdminDashRecentOrdersTable />

      <h1 className="mt-20 pl-5 border-l-4 border-orange-600 font-extrabold">
         Popular Products
      </h1>
      <AdminDashPopularProuctsTable/>
    </div>
  );
}

export default AdminDashHomePage;
